import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Package, Shield, Truck } from "lucide-react";

import figureCyberSamurai from "@/assets/figure-cyber-samurai.jpg";
import figureDragonKnight from "@/assets/figure-dragon-knight.jpg";
import figureMecha from "@/assets/figure-mecha.jpg";
import figureAssassin from "@/assets/figure-assassin.jpg";
import figureGuardian from "@/assets/figure-guardian.jpg";

// Mock product data - would come from database
const mockProductDetails: Record<string, {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  options: { name: string; values: string[] }[];
  inStock: boolean;
}> = {
  "1": {
    id: "1",
    name: "Cyber Ronin - Limited Edition",
    price: 149.99,
    description: "A stunning representation of futuristic samurai aesthetics. This limited edition Cyber Ronin features intricate armor detailing, LED-compatible base, and articulated joints for dynamic posing. Standing at 8 inches tall, this figure captures the essence of neo-Tokyo cyberpunk culture.",
    images: [figureCyberSamurai, figureMecha, figureAssassin],
    category: "Sci-Fi",
    options: [
      { name: "Size", values: ["Standard (8\")", "Large (12\")", "Display (16\")"] },
      { name: "Finish", values: ["Matte", "Glossy", "Metallic"] },
    ],
    inStock: true,
  },
  "2": {
    id: "2",
    name: "Dragon Knight Warrior",
    price: 129.99,
    description: "An epic fantasy warrior clad in dragon-scale armor. This highly detailed figure showcases master-level sculpting with hand-painted accents. Features a removable cape and interchangeable weapons. Perfect for fantasy collectors.",
    images: [figureDragonKnight, figureGuardian, figureCyberSamurai],
    category: "Fantasy",
    options: [
      { name: "Size", values: ["Standard (8\")", "Large (12\")"] },
      { name: "Base", values: ["Rock Formation", "Dragon Skull", "Plain"] },
    ],
    inStock: true,
  },
  "3": {
    id: "3",
    name: "Shadow Assassin",
    price: 99.99,
    description: "A mysterious hooded figure wielding dual daggers. This Shadow Assassin captures the essence of stealth and danger. Features dynamic pose, flowing cloak, and intricate weapon details.",
    images: [figureAssassin, figureCyberSamurai, figureMecha],
    category: "Gaming",
    options: [
      { name: "Size", values: ["Standard (8\")", "Large (12\")"] },
      { name: "Weapons", values: ["Dual Daggers", "Crossbow", "Sword"] },
    ],
    inStock: true,
  },
  "4": {
    id: "4",
    name: "Mecha Pilot Elite",
    price: 179.99,
    description: "A sleek futuristic mecha pilot in advanced combat suit. Features articulated joints, detailed panel lines, and a dynamic action pose. The perfect addition for any sci-fi or anime collection.",
    images: [figureMecha, figureCyberSamurai, figureAssassin],
    category: "Anime",
    options: [
      { name: "Size", values: ["Standard (8\")", "Large (12\")", "Display (16\")"] },
      { name: "Color", values: ["Blue/Purple", "Red/Black", "White/Gold"] },
    ],
    inStock: true,
  },
  "5": {
    id: "5",
    name: "Ancient Guardian",
    price: 159.99,
    description: "A powerful bronze warrior wielding a massive battle axe. This Ancient Guardian features intricate armor details, weathered bronze finish, and commanding presence. Perfect for fantasy and mythology collectors.",
    images: [figureGuardian, figureDragonKnight, figureCyberSamurai],
    category: "Fantasy",
    options: [
      { name: "Size", values: ["Standard (8\")", "Large (12\")"] },
      { name: "Weapon", values: ["Battle Axe", "Sword & Shield", "War Hammer"] },
    ],
    inStock: true,
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});

  // Get product or fallback to first one
  const product = mockProductDetails[id as string] || mockProductDetails["1"];

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionName]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Shop
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="aspect-square rounded-2xl overflow-hidden glass-card glow-border">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index
                        ? "border-primary glow-border"
                        : "border-border/50 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                {product.category}
              </span>

              {/* Title & Price */}
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  {product.name}
                </h1>
                <div className="font-display text-3xl font-bold gradient-text-gold">
                  ${product.price.toFixed(2)}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Options */}
              <div className="space-y-4">
                {product.options.map((option) => (
                  <div key={option.name}>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {option.name}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => (
                        <button
                          key={value}
                          onClick={() => handleOptionChange(option.name, value)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                            selectedOptions[option.name] === value
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-muted/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                          }`}
                        >
                          {value}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Add to Cart */}
              <div className="pt-4">
                <Button variant="glow" size="xl" className="w-full">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/30">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Package className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Premium Packaging</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Quality Guaranteed</span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Fast Shipping</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
