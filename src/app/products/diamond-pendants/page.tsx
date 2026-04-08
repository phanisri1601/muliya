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

const diamondPendants: Product[] = [
  {
    id: "diamond-pendant-001",
    name: "Solitaire Diamond Pendant",
    price: 85000,
    originalPrice: 98000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Classic solitaire diamond pendant with chain",
    weight: "5.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-002",
    name: "Heart Shape Diamond Pendant",
    price: 115000,
    originalPrice: 132000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Romantic heart shaped diamond pendant",
    weight: "6.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-003",
    name: "Halo Diamond Pendant",
    price: 105000,
    originalPrice: 120000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Halo setting with brilliant center diamond",
    weight: "7.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-004",
    name: "Journey Diamond Pendant",
    price: 95000,
    originalPrice: 110000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Graduated diamonds representing life's journey",
    weight: "6.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-005",
    name: "Cross Diamond Pendant",
    price: 75000,
    originalPrice: 88000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Elegant cross design with pave diamonds",
    weight: "5.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-006",
    name: "Infinity Diamond Pendant",
    price: 125000,
    originalPrice: 145000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Infinity symbol with brilliant diamonds",
    weight: "8.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-007",
    name: "Drop Diamond Pendant",
    price: 135000,
    originalPrice: 155000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Elegant teardrop diamond pendant",
    weight: "7.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-008",
    name: "Circle of Life Pendant",
    price: 145000,
    originalPrice: 165000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Circular design with continuous diamonds",
    weight: "8.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-009",
    name: "Cluster Diamond Pendant",
    price: 98000,
    originalPrice: 112000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Floral cluster design with multiple diamonds",
    weight: "6.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-pendant-010",
    name: "Princess Cut Pendant",
    price: 155000,
    originalPrice: 178000,
    image: "/images/diamond/Pendants.png",
    category: "Diamond Pendants",
    description: "Modern princess cut diamond pendant",
    weight: "7.8 grams",
    purity: "18K"
  }
];

export default function DiamondPendantsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-pendants" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-pendants/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-pendants" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Pendants</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Diamond Pendants</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Timeless elegance close to your heart. Discover our stunning collection of diamond pendants.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diamondPendants.map((pendant) => (
            <div key={pendant.id} onClick={() => handleProductClick(pendant.id)} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image src={pendant.image} alt={pendant.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(pendant, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{pendant.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{pendant.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{pendant.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{pendant.weight}</span><span>•</span><span>{pendant.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{pendant.price.toLocaleString()}</span>
                  {pendant.originalPrice && <span className="text-sm text-gray-400 line-through">₹{pendant.originalPrice.toLocaleString()}</span>}
                </div>
                <button onClick={(e) => handleAddToCart(pendant, e)} className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
