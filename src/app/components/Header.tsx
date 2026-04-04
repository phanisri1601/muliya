"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { Badge } from "./ui/badge";
import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  Search,
  ChevronDown,
  Coins,
  Store,
  Image as ImageIcon,
  Globe,
  Video,
  MoreHorizontal,
  LogOut,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const categories = [
  { name: "Rings", slug: "rings", image: "/images/gold/Rings.png" },
  { name: "Earrings", slug: "earrings", image: "/images/gold/Earrings.png" },
  { name: "Pendants", slug: "pendants", image: "/images/gold/Pendants.png" },
  { name: "Necklaces", slug: "necklaces", image: "/images/gold/Necklaces.png" },
  { name: "Haarams", slug: "haarams", image: "/images/gold/Haarams.png" },
  { name: "Kadaas", slug: "kadaas", image: "/images/gold/Kadaas.png" },
  { name: "Mangalsutra", slug: "mangalsutra", image: "/images/gold/Mangalsutra.png" },
  { name: "Bangles", slug: "bangles", image: "/images/gold/Bangles.png" },
  { name: "Chain", slug: "chain", image: "/images/gold/Chain.png" },
  { name: "Bracelets", slug: "bracelets", image: "/images/gold/Bracelets.png" },
  { name: "Silver", slug: "silver", image: "/images/gold/Silver.png" },
  { name: "Watches", slug: "watches", image: "/images/gold/Watches.png" },
];

const diamondCategories = [
  { name: "Rings", slug: "rings", image: "/images/diamond/Rings.png" },
  { name: "Earrings", slug: "earrings", image: "/images/diamond/Earrings.png" },
  { name: "Pendants", slug: "pendants", image: "/images/diamond/Pendants.png" },
  { name: "Necklaces", slug: "necklaces", image: "/images/diamond/Necklaces.png" },
  { name: "Bangles", slug: "bangles", image: "/images/diamond/Bangles.png" },
  { name: "Bracelets", slug: "bracelets", image: "/images/diamond/Bracelets.png" },
];

const collectionsData = [
  { name: "Mahathi", slug: "mahathi", image: "/images/Mahathi - s.png" },
  { name: "Amuliya", slug: "amuliya", image: "/images/Amuliya-s.png" },
  { name: "Indian Bridal", slug: "indian-bridal", image: "/images/Indian-bridal-s.png" },
  { name: "Indian Ethnic", slug: "indian-ethnic", image: "/images/Indian-Ethnic-s.png" },
  { name: "Ruby and Emerald", slug: "ruby-and-emerald", image: "/images/Ruby-and-Emerald-s.png" },
  { name: "Apsara", slug: "apsara", image: "/images/Apsara-s.png" },
];

const desktopNav = [
  { label: "Gold", href: "/products/rings", icon: Coins },
  { label: "Silver", href: "/products/silver", icon: Coins },
  { label: "Diamond", href: "/products/earrings", icon: Coins },
  { label: "Collections", href: "/collections", icon: Coins },
  { label: "Showrooms", href: "/store-locator", icon: Store },
  { label: "Gallery", href: "https://gallery.muliya.in", icon: ImageIcon },
  { label: "Virtual Tour", href: "/blog", icon: Globe },
  { label: "More", href: "/about", icon: MoreHorizontal },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [goldDropdownOpen, setGoldDropdownOpen] = useState(false);
  const [diamondDropdownOpen, setDiamondDropdownOpen] = useState(false);
  const [collectionsDropdownOpen, setCollectionsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const router = useRouter();
  const [logoError, setLogoError] = useState(false);
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <img
              src="/images/Logo-1.svg"
              alt="Muliya Gold & Diamonds"
              loading="eager"
              className="h-10 w-auto object-contain max-w-[160px]"
              onError={() => setLogoError(true)}
            />
            {logoError ? (
              <span className="ml-2 font-serif text-xl text-[#E92247] leading-none hidden sm:inline">
                Muliya
              </span>
            ) : null}
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm text-gray-700">
            <Link
              href="/policy/gold-scheme"
              className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
            >
              <Coins className="w-4 h-4 text-[#E92247]" />
              <span>Easy Jewellery Buying Plan</span>
            </Link>
            <Link
              href="/policy/gold-scheme"
              className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
            >
              <Video className="w-4 h-4 text-[#E92247]" />
              <span>Scheme Payments</span>
            </Link>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center gap-0 w-full max-w-[520px]"
          >
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for gold jewellery, diamond jewellery and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 rounded-l-md border border-gray-200 pl-4 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#E92247]/30"
              />
            </div>
            <button
              type="submit"
              className="h-10 w-11 bg-[#E92247] text-white flex items-center justify-center rounded-r-md"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Cart */}
          <Link href="/cart" className="relative hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors">
            <ShoppingCart className="w-5 h-5 text-gray-700" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-[#E92247] text-white border-0">
                {totalItems}
              </Badge>
            )}
          </Link>

          {/* User Auth */}
          {isAuthenticated ? (
            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50">
                <div className="w-8 h-8 bg-[#E92247] rounded-full flex items-center justify-center text-white font-medium">
                  {user?.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
                title="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#E92247] transition-colors whitespace-nowrap"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="px-5 py-2 text-sm font-medium bg-[#E92247] text-white rounded-full hover:bg-[#d11f3f] transition-colors whitespace-nowrap"
              >
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2 text-[#E92247]">
                    <img
                      src="/images/Logo-1.svg"
                      alt="Muliya"
                      loading="eager"
                      className="h-7 w-auto object-contain"
                      onError={() => setLogoError(true)}
                    />
                    {logoError ? (
                      <span className="sm:inline hidden font-serif text-base">
                        Muliya
                      </span>
                    ) : null}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/products/${category.slug}`}
                      className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                  <Link
                    href="/store-locator"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Store Locator
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-700 hover:text-[#E92247] py-2 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Nav Row */}
      <div className="border-t border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-8 text-sm text-gray-700">
              {desktopNav.map((item) => {
                const Icon = item.icon;
                const isGold = item.label === "Gold";
                const isDiamond = item.label === "Diamond";
                const isCollections = item.label === "Collections";
                const isMore = item.label === "More";
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => {
                      isGold && setGoldDropdownOpen(true);
                      isDiamond && setDiamondDropdownOpen(true);
                      isCollections && setCollectionsDropdownOpen(true);
                      isMore && setMoreDropdownOpen(true);
                    }}
                    onMouseLeave={() => {
                      isGold && setGoldDropdownOpen(false);
                      isDiamond && setDiamondDropdownOpen(false);
                      isCollections && setCollectionsDropdownOpen(false);
                      isMore && setMoreDropdownOpen(false);
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-2 hover:text-[#E92247] transition-colors"
                    >
                      <Icon className="w-4 h-4 text-[#E92247]" />
                      <span className="whitespace-nowrap">{item.label}</span>
                      {(item.label === "Gold" ||
                        item.label === "Silver" ||
                        item.label === "Diamond" ||
                        item.label === "Collections" ||
                        item.label === "More") && (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>
                    
                    {/* Gold Dropdown */}
                    {isGold && goldDropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[1000px]">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-amber-50 to-white px-8 py-4 border-b border-gray-100">
                            <p className="text-[#8B4513] font-medium text-base">Shop by Category</p>
                          </div>
                          
                          <div className="flex">
                            {/* Categories Grid - Left Side */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-3 gap-y-6">
                                {categories.slice(0, 10).map((cat, idx) => {
                                  const isLastRow = idx >= 9;
                                  return (
                                    <Link
                                      key={cat.slug}
                                      href={`/products/${cat.slug}`}
                                      className={`flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group ${!isLastRow ? 'border-b border-gray-100' : ''}`}
                                    >
                                      <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                                        <img
                                          src={cat.image}
                                          alt={cat.name}
                                          className="w-14 h-14 object-contain"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/images/ringwithperson.png";
                                          }}
                                        />
                                      </div>
                                      <span className="text-[#8B4513] text-base font-medium group-hover:text-[#E92247] transition-colors">
                                        {cat.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                            
                            {/* Vertical Divider */}
                            <div className="w-px bg-gray-200 my-6" />
                            
                            {/* Featured Image - Right Side */}
                            <div className="w-[320px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[380px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/gold/featured-necklace.png"
                                  alt="Featured Gold Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                  <p className="text-white font-serif text-2xl mb-2">New Collection</p>
                                  <p className="text-white/80 text-base">Explore our latest designs</p>
                                  <div className="mt-4 inline-flex items-center gap-2 text-white/90 text-sm">
                                    <span>View All</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Diamond Dropdown */}
                    {isDiamond && diamondDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[800px]">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-blue-50 to-white px-8 py-4 border-b border-gray-100">
                            <p className="text-[#1e3a5f] font-medium text-base">Diamond Collection</p>
                          </div>
                          
                          <div className="flex">
                            {/* Categories Grid - Left Side */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-2 gap-y-4">
                                {diamondCategories.map((cat, idx) => {
                                  const isLastRow = idx >= 4;
                                  return (
                                    <Link
                                      key={cat.slug}
                                      href={`/products/${cat.slug}`}
                                      className={`flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group ${!isLastRow ? 'border-b border-gray-100' : ''}`}
                                    >
                                      <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
                                        <img
                                          src={cat.image}
                                          alt={cat.name}
                                          className="w-14 h-14 object-contain"
                                          onError={(e) => {
                                            (e.target as HTMLImageElement).src = "/images/ringwithperson.png";
                                          }}
                                        />
                                      </div>
                                      <span className="text-[#1e3a5f] text-base font-medium group-hover:text-[#E92247] transition-colors">
                                        {cat.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                            
                            {/* Vertical Divider */}
                            <div className="w-px bg-gray-200 my-6" />
                            
                            {/* Featured Image - Right Side */}
                            <div className="w-[280px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/diamond/featured-diamond.png"
                                  alt="Featured Diamond Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                  <p className="text-white font-serif text-xl mb-2">Diamond Collection</p>
                                  <p className="text-white/80 text-sm">Timeless elegance</p>
                                  <div className="mt-4 inline-flex items-center gap-2 text-white/90 text-sm">
                                    <span>View All</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Collections Dropdown */}
                    {isCollections && collectionsDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden w-[900px]">
                          {/* Header */}
                          <div className="bg-gradient-to-r from-purple-50 to-white px-8 py-4 border-b border-gray-100">
                            <p className="text-[#6b2c91] font-medium text-base">Our Collections</p>
                          </div>
                          
                          <div className="flex">
                            {/* Collections Grid - Left Side */}
                            <div className="flex-1 p-6">
                              <div className="grid grid-cols-3 gap-4">
                                {collectionsData.map((col) => (
                                  <Link
                                    key={col.slug}
                                    href={`/collections/${col.slug}`}
                                    className="relative rounded-xl overflow-hidden group cursor-pointer h-[120px]"
                                  >
                                    <img
                                      src={col.image}
                                      alt={col.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                      onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80";
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                    <div className="absolute bottom-3 left-3 right-3">
                                      <p className="text-white font-serif text-sm">{col.name}</p>
                                    </div>
                                    {/* Sparkle icon */}
                                    <div className="absolute top-2 right-2">
                                      <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                                      </svg>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            
                            {/* Vertical Divider */}
                            <div className="w-px bg-gray-200 my-6" />
                            
                            {/* Featured Image - Right Side */}
                            <div className="w-[300px] p-6 flex-shrink-0">
                              <div className="relative h-full min-h-[260px] rounded-xl overflow-hidden group cursor-pointer">
                                <img
                                  src="/images/collections/featured-collection.png"
                                  alt="Featured Collection"
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80";
                                  }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-5 left-5 right-5">
                                  <p className="text-white font-serif text-xl mb-1">Exclusive Collection</p>
                                  <p className="text-white/80 text-sm">Discover our finest pieces</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* More Dropdown */}
                    {isMore && moreDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden w-[220px] py-2">
                          <Link
                            href="/policy/gold-scheme"
                            className="block px-5 py-3 text-[#8B4513] hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Gold Buying Plans
                          </Link>
                          <Link
                            href="/blog"
                            className="block px-5 py-3 text-[#8B4513] hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Blog
                          </Link>
                          <Link
                            href="/careers"
                            className="block px-5 py-3 text-[#8B4513] hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Careers
                          </Link>
                          <Link
                            href="/contact"
                            className="block px-5 py-3 text-[#8B4513] hover:bg-gray-50 hover:text-[#E92247] transition-colors text-base"
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
