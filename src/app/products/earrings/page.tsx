"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  weight?: string;
  purity?: string;
}

const earrings: Product[] = [
  {
    id: "earring-001",
    name: "Traditional Jhumka Earrings",
    price: 45200,
    originalPrice: 52000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Classic South Indian jhumka with intricate temple design",
    weight: "6.8 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-002",
    name: "Diamond Stud Earrings",
    price: 98000,
    originalPrice: 115000,
    image: "/images/diamond/Earrings.png",
    category: "Diamond Earrings",
    description: "Elegant round brilliant diamond studs in platinum setting",
    weight: "4.2 grams",
    purity: "18K"
  },
  {
    id: "earring-003",
    name: "Chand Bali Earrings",
    price: 38500,
    originalPrice: 45000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Crescent moon shaped chand bali with pearl drops",
    weight: "5.5 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-004",
    name: "Floral Drop Earrings",
    price: 29800,
    originalPrice: 35000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Delicate floral pattern drop earrings with high polish",
    weight: "4.2 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-005",
    name: "Diamond Hoop Earrings",
    price: 125000,
    originalPrice: 145000,
    image: "/images/diamond/Earrings.png",
    category: "Diamond Earrings",
    description: "Sparkling diamond encrusted hoop earrings",
    weight: "6.8 grams",
    purity: "18K"
  },
  {
    id: "earring-006",
    name: "Temple Design Earrings",
    price: 52000,
    originalPrice: 60000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Traditional temple jewelry style with goddess motif",
    weight: "7.5 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-007",
    name: "Ruby Emerald Danglers",
    price: 75000,
    originalPrice: 88000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Elegant dangler earrings with ruby and emerald stones",
    weight: "8.2 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-008",
    name: "Modern Geometric Earrings",
    price: 145000,
    originalPrice: 165000,
    image: "/images/diamond/Earrings.png",
    category: "Diamond Earrings",
    description: "Contemporary geometric design with princess cut diamonds",
    weight: "5.5 grams",
    purity: "18K"
  },
  {
    id: "earring-009",
    name: "Antique Finish Earrings",
    price: 42000,
    originalPrice: 48000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Vintage antique finish with traditional patterns",
    weight: "6.2 grams",
    purity: "22K (916)"
  },
  {
    id: "earring-010",
    name: "Pearl Cluster Earrings",
    price: 32000,
    originalPrice: 38000,
    image: "/images/earrings-1.jpeg",
    category: "Gold Earrings",
    description: "Elegant cluster of freshwater pearls in gold setting",
    weight: "4.8 grams",
    purity: "22K (916)"
  }
];

export default function EarringsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      collection: product.category,
      collectionSlug: "earrings",
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/earrings/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/earrings" className="hover:text-[#E92247] transition-colors">
              Gold
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Earrings</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
              Earrings
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our exquisite collection of gold and diamond earrings. From traditional jhumkas to contemporary studs, find the perfect pair for every occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {earrings.map((earring) => (
            <div 
              key={earring.id}
              onClick={() => handleProductClick(earring.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={earring.image}
                  alt={earring.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button 
                    onClick={(e) => handleAddToCart(earring, e)}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors"
                    title="Add to Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors"
                    title="Add to Wishlist"
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {earring.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">
                  {earring.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {earring.description}
                </p>
                
                {/* Weight & Purity */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{earring.weight}</span>
                  <span>•</span>
                  <span>{earring.purity}</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">
                    ₹{earring.price.toLocaleString()}
                  </span>
                  {earring.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ₹{earring.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button - mt-auto pushes to bottom */}
                <button 
                  onClick={(e) => handleAddToCart(earring, e)}
                  className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
