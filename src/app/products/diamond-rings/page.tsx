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

const diamondRings: Product[] = [
  {
    id: "diamond-ring-001",
    name: "Classic Solitaire Diamond Ring",
    price: 125000,
    originalPrice: 145000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Elegant solitaire diamond ring with brilliant cut",
    weight: "6.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-002",
    name: "Halo Diamond Ring",
    price: 145000,
    originalPrice: 168000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Stunning halo setting with surrounding diamonds",
    weight: "7.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-003",
    name: "Princess Cut Diamond Ring",
    price: 165000,
    originalPrice: 188000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Modern princess cut diamond with sleek band",
    weight: "6.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-004",
    name: "Three Stone Diamond Ring",
    price: 185000,
    originalPrice: 215000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Elegant trilogy design representing past present future",
    weight: "8.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-005",
    name: "Vintage Diamond Ring",
    price: 135000,
    originalPrice: 155000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Antique inspired vintage design diamond ring",
    weight: "7.2 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-006",
    name: "Pave Diamond Band",
    price: 95000,
    originalPrice: 110000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Continuous pave set diamonds for eternal sparkle",
    weight: "5.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-007",
    name: "Oval Diamond Ring",
    price: 175000,
    originalPrice: 198000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Sophisticated oval cut diamond with delicate band",
    weight: "6.5 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-008",
    name: "Emerald Cut Diamond Ring",
    price: 195000,
    originalPrice: 225000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Elegant emerald cut with step facets",
    weight: "7.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-009",
    name: "Pear Diamond Ring",
    price: 155000,
    originalPrice: 178000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Beautiful pear shaped diamond teardrop design",
    weight: "6.8 grams",
    purity: "18K"
  },
  {
    id: "diamond-ring-010",
    name: "Diamond Eternity Band",
    price: 115000,
    originalPrice: 132000,
    image: "/images/ring1.png",
    category: "Diamond Rings",
    description: "Full eternity band with continuous diamonds",
    weight: "5.5 grams",
    purity: "18K"
  }
];

export default function DiamondRingsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "diamond-rings" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/diamond-rings/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/diamond-rings" className="hover:text-[#E92247] transition-colors">Diamond</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Diamond Rings</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Diamond Rings</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Eternal brilliance for eternal love. Discover our exquisite collection of certified diamond rings.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {diamondRings.map((ring) => (
            <div key={ring.id} onClick={() => handleProductClick(ring.id)} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image src={ring.image} alt={ring.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(ring, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">{ring.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{ring.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{ring.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{ring.weight}</span><span>•</span><span>{ring.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{ring.price.toLocaleString()}</span>
                  {ring.originalPrice && <span className="text-sm text-gray-400 line-through">₹{ring.originalPrice.toLocaleString()}</span>}
                </div>
                <button onClick={(e) => handleAddToCart(ring, e)} className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
