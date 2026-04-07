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

const necklaces: Product[] = [
  {
    id: "necklace-001",
    name: "Traditional Gold Necklace",
    price: 125000,
    originalPrice: 145000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Classic South Indian necklace with intricate design",
    weight: "25.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-002",
    name: "Diamond Choker Necklace",
    price: 245000,
    originalPrice: 285000,
    image: "/images/diamond/Necklaces.png",
    category: "Diamond Necklaces",
    description: "Elegant diamond choker with modern setting",
    weight: "18.2 grams",
    purity: "18K"
  },
  {
    id: "necklace-003",
    name: "Temple Design Necklace",
    price: 185000,
    originalPrice: 210000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Traditional temple jewelry with Lakshmi motif",
    weight: "32.8 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-004",
    name: "Floral Pattern Necklace",
    price: 98000,
    originalPrice: 115000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Delicate floral pattern with high polish finish",
    weight: "16.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-005",
    name: "Ruby Emerald Necklace",
    price: 285000,
    originalPrice: 325000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Stunning necklace with ruby and emerald stones",
    weight: "28.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-006",
    name: "Modern Diamond Necklace",
    price: 195000,
    originalPrice: 225000,
    image: "/images/diamond/Necklaces.png",
    category: "Diamond Necklaces",
    description: "Contemporary geometric design with diamonds",
    weight: "15.8 grams",
    purity: "18K"
  },
  {
    id: "necklace-007",
    name: "Antique Finish Necklace",
    price: 155000,
    originalPrice: 175000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Vintage antique finish with traditional patterns",
    weight: "26.2 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-008",
    name: "Pearl String Necklace",
    price: 75000,
    originalPrice: 88000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Elegant pearl strings with gold accents",
    weight: "12.5 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-009",
    name: "Layered Gold Necklace",
    price: 115000,
    originalPrice: 135000,
    image: "/images/gold/Necklaces.png",
    category: "Gold Necklaces",
    description: "Multi-layered design with intricate detailing",
    weight: "22.8 grams",
    purity: "22K (916)"
  },
  {
    id: "necklace-010",
    name: "Bridal Diamond Necklace",
    price: 345000,
    originalPrice: 395000,
    image: "/images/diamond/Necklaces.png",
    category: "Diamond Necklaces",
    description: "Bridal collection with premium diamonds",
    weight: "24.5 grams",
    purity: "18K"
  }
];

export default function NecklacesPage() {
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
      collectionSlug: "necklaces",
    });
    toast.success(`${product.name} added to cart!`);
  };

  const handleProductClick = (productId: string) => {
    router.push(`/products/necklaces/${productId}`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#E92247] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products/necklaces" className="hover:text-[#E92247] transition-colors">Gold</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Necklaces</span>
          </nav>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">Necklaces</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Discover our exquisite collection of gold and diamond necklaces. From traditional designs to contemporary styles, find the perfect piece for every occasion.</p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {necklaces.map((necklace) => (
            <div 
              key={necklace.id}
              onClick={() => handleProductClick(necklace.id)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100 flex-shrink-0">
                <Image src={necklace.image} alt={necklace.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <button onClick={(e) => handleAddToCart(necklace, e)} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E92247] hover:bg-[#E92247] hover:text-white transition-colors" title="Add to Cart">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button onClick={(e) => e.stopPropagation()} className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-[#E92247] transition-colors" title="Add to Wishlist">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E92247] text-white px-3 py-1 rounded-full text-xs font-medium">{necklace.category}</span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-lg text-gray-900 mb-2 group-hover:text-[#E92247] transition-colors">{necklace.name}</h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">{necklace.description}</p>
                {/* Weight & Purity */}
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                  <span>{necklace.weight}</span>
                  <span>•</span>
                  <span>{necklace.purity}</span>
                </div>
                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl font-bold text-[#E92247]">₹{necklace.price.toLocaleString()}</span>
                  {necklace.originalPrice && <span className="text-sm text-gray-400 line-through">₹{necklace.originalPrice.toLocaleString()}</span>}
                </div>
                {/* Add to Cart Button */}
                <button onClick={(e) => handleAddToCart(necklace, e)} className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 py-3 rounded-xl hover:bg-[#E92247] hover:text-white hover:border-[#E92247] transition-colors font-medium mt-auto">
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
