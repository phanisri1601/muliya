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

const bracelets: Product[] = [
  {
    id: "bracelet-001",
    name: "Classic Gold Bracelet",
    price: 55000,
    originalPrice: 65000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Traditional gold bracelet with elegant design",
    weight: "12.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-002",
    name: "Diamond Tennis Bracelet",
    price: 185000,
    originalPrice: 215000,
    image: "/images/diamond/Bracelets.png",
    category: "Diamond Bracelets",
    description: "Elegant tennis bracelet with continuous diamonds",
    weight: "10.2 grams",
    purity: "18K"
  },
  {
    id: "bracelet-003",
    name: "Temple Design Bracelet",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Traditional temple jewelry style bracelet",
    weight: "16.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-004",
    name: "Ruby Stone Bracelet",
    price: 65000,
    originalPrice: 78000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Beautiful bracelet with ruby stone settings",
    weight: "14.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-005",
    name: "Antique Finish Bracelet",
    price: 58000,
    originalPrice: 68000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Vintage antique finish bracelet with patterns",
    weight: "13.2 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-006",
    name: "Modern Diamond Bracelet",
    price: 145000,
    originalPrice: 165000,
    image: "/images/diamond/Bracelets.png",
    category: "Diamond Bracelets",
    description: "Contemporary design with brilliant diamonds",
    weight: "11.5 grams",
    purity: "18K"
  },
  {
    id: "bracelet-007",
    name: "Pearl Bracelet",
    price: 42000,
    originalPrice: 52000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Elegant pearl bracelet with gold accents",
    weight: "10.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-008",
    name: "Charm Bracelet",
    price: 48000,
    originalPrice: 58000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Playful charm bracelet with gold pendants",
    weight: "11.5 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-009",
    name: "Bridal Bracelet Set",
    price: 125000,
    originalPrice: 145000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Bridal collection bracelet with matching design",
    weight: "22.8 grams",
    purity: "22K (916)"
  },
  {
    id: "bracelet-010",
    name: "Filigree Work Bracelet",
    price: 52000,
    originalPrice: 62000,
    image: "/images/gold/Bracelets.png",
    category: "Gold Bracelets",
    description: "Delicate filigree work bracelet with lightweight design",
    weight: "11.5 grams",
    purity: "22K (916)"
  }
];

export default function BraceletsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "bracelets" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/bracelets/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/bracelets" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Bracelets</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Bracelets</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Adorn your wrist with elegance. Discover our collection of gold and diamond bracelets for every style.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {bracelets.map((bracelet) => (
            <div key={bracelet.id} onClick={() => handleProductClick(bracelet.id)} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image src={bracelet.image} alt={bracelet.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(bracelet, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{bracelet.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{bracelet.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{bracelet.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{bracelet.weight}</span><span>•</span><span>{bracelet.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{bracelet.price.toLocaleString()}</span>
                  {bracelet.originalPrice && <span className="text-sm text-gray-400 line-through">₹{bracelet.originalPrice.toLocaleString()}</span>}
                </div>
                <button onClick={(e) => handleAddToCart(bracelet, e)} className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
