import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard, { Product } from "@/components/shop/ProductCard";

import figureCyberSamurai from "@/assets/figure-cyber-samurai.jpg";
import figureDragonKnight from "@/assets/figure-dragon-knight.jpg";
import figureMecha from "@/assets/figure-mecha.jpg";
import figureAssassin from "@/assets/figure-assassin.jpg";
import figureGuardian from "@/assets/figure-guardian.jpg";
import heroFigure from "@/assets/hero-figure.jpg";

// Mock products - would come from admin panel/database
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Cyber Ronin - Limited Edition",
    price: 149.99,
    image: figureCyberSamurai,
    category: "Sci-Fi",
  },
  {
    id: "2",
    name: "Dragon Knight Warrior",
    price: 129.99,
    image: figureDragonKnight,
    category: "Fantasy",
  },
  {
    id: "3",
    name: "Shadow Assassin",
    price: 99.99,
    image: figureAssassin,
    category: "Gaming",
  },
  {
    id: "4",
    name: "Mecha Pilot Elite",
    price: 179.99,
    image: figureMecha,
    category: "Anime",
  },
  {
    id: "5",
    name: "Ancient Guardian",
    price: 159.99,
    image: figureGuardian,
    category: "Fantasy",
  },
  {
    id: "6",
    name: "Space Commander",
    price: 139.99,
    image: heroFigure,
    category: "Sci-Fi",
  },
  {
    id: "7",
    name: "Demon Hunter",
    price: 119.99,
    image: figureAssassin,
    category: "Gaming",
  },
  {
    id: "8",
    name: "Phoenix Warrior",
    price: 189.99,
    image: figureDragonKnight,
    category: "Anime",
  },
];

const categories = ["All", "Fantasy", "Sci-Fi", "Gaming", "Anime"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
                Collection
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Shop Our <span className="gradient-text">Figures</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Browse our collection of premium resin-printed action figures. 
                Each piece is handcrafted and ready to ship.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-y border-border/30 bg-card/30 backdrop-blur-sm sticky top-20 z-30">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground glow-button"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
