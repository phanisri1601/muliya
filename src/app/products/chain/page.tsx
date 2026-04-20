"use client";

import Link from "next/link";
import { ChevronRight, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ImageWithFallbackNext } from "@/app/components/ImageWithFallbackNext";

const formatINR = (value: number) => new Intl.NumberFormat("en-IN").format(value);

const BANNER_SRC = "/category/Gemini_Generated_Image_uacnh2uacnh2uacn (8).png";

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

const chains: Product[] = [
  {
    id: "chain-001",
    name: "Classic Gold Chain",
    price: 85000,
    originalPrice: 95000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/10LEAF.BC%20-%2074342580.jpg",
    category: "Gold Chains",
    description: "Traditional chain design perfect for daily wear",
    weight: "22 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-002",
    name: "Rope Chain",
    price: 125000,
    originalPrice: 140000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/16%20ASHWINI%20MJ%20-%20743411541.jpg",
    category: "Gold Chains",
    description: "Thick rope design chain with high polish",
    weight: "32 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-003",
    name: "Box Chain",
    price: 95000,
    originalPrice: 105000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/20%20PE%20CHANDRAMUKHI%20MJ%20-%20746501622.jpg",
    category: "Gold Chains",
    description: "Sleek box chain design with modern look",
    weight: "24 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-004",
    name: "Curb Chain",
    price: 115000,
    originalPrice: 128000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/28%20FANCY%20CH%20MJ-%20748213162.jpg",
    category: "Gold Chains",
    description: "Heavy curb chain for bold statement",
    weight: "28 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-005",
    name: "Figaro Chain",
    price: 105000,
    originalPrice: 118000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/Chain%20CP%20MJ-%207234013197.jpg",
    category: "Gold Chains",
    description: "Classic Figaro pattern chain",
    weight: "26 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-006",
    name: "Snake Chain",
    price: 135000,
    originalPrice: 150000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/10LEAF.BC%20-%2074342580.jpg",
    category: "Gold Chains",
    description: "Flexible snake chain with smooth finish",
    weight: "30 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-007",
    name: "Singapore Chain",
    price: 75000,
    originalPrice: 85000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/16%20ASHWINI%20MJ%20-%20743411541.jpg",
    category: "Gold Chains",
    description: "Delicate Singapore twist chain",
    weight: "18 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-008",
    name: "Ball Chain",
    price: 65000,
    originalPrice: 75000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/20%20PE%20CHANDRAMUKHI%20MJ%20-%20746501622.jpg",
    category: "Gold Chains",
    description: "Unique gold ball chain design",
    weight: "16 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-009",
    name: "Wheat Chain",
    price: 145000,
    originalPrice: 162000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/28%20FANCY%20CH%20MJ-%20748213162.jpg",
    category: "Gold Chains",
    description: "Intricate wheat pattern braided chain",
    weight: "34 grams",
    purity: "22K (916)"
  },
  {
    id: "chain-010",
    name: "Byzantine Chain",
    price: 165000,
    originalPrice: 185000,
    image: "/images/gold/Gold%20Chains/Gold%20Chains/Chain%20CP%20MJ-%207234013197.jpg",
    category: "Gold Chains",
    description: "Luxurious Byzantine weave pattern",
    weight: "38 grams",
    purity: "22K (916)"
  }
];

export default function ChainsPage() {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.image, collection: product.category, collectionSlug: "chain" });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/chain/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/chain" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Chains</span>
          </nav>
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallbackNext src={BANNER_SRC} alt="Chains banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 drop-shadow">Chains</h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto drop-shadow">Elegant gold chains in various designs. Perfect for everyday wear or pairing with your favorite pendants.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {chains.map((chain) => (
            <div key={chain.id} onClick={() => handleProductClick(chain.id)} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <ImageWithFallbackNext src={chain.image} alt={chain.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(chain, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart"><ShoppingCart className="w-5 h-5" /></button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist"><Heart className="w-5 h-5" /></button>
                </div>
                <div className="absolute top-4 left-4"><span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{chain.category}</span></div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{chain.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{chain.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3"><span>{chain.weight}</span><span>•</span><span>{chain.purity}</span></div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{formatINR(chain.price)}</span>
                  {chain.originalPrice && <span className="text-sm text-gray-400 line-through">₹{formatINR(chain.originalPrice)}</span>}
                </div>
                <button onClick={(e) => handleAddToCart(chain, e)} className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto"><ShoppingCart className="w-4 h-4" />Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
