import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import figureCyberSamurai from "@/assets/figure-cyber-samurai.jpg";
import figureDragonKnight from "@/assets/figure-dragon-knight.jpg";
import figureMecha from "@/assets/figure-mecha.jpg";
import figureAssassin from "@/assets/figure-assassin.jpg";
import figureGuardian from "@/assets/figure-guardian.jpg";
import heroFigure from "@/assets/hero-figure.jpg";

// Gallery items - these would come from admin panel in real app
const galleryItems = [
  {
    id: 1,
    title: "Cyber Samurai",
    category: "Sci-Fi",
    image: figureCyberSamurai,
  },
  {
    id: 2,
    title: "Dragon Knight",
    category: "Fantasy",
    image: figureDragonKnight,
  },
  {
    id: 3,
    title: "Shadow Assassin",
    category: "Gaming",
    image: figureAssassin,
  },
  {
    id: 4,
    title: "Mecha Pilot",
    category: "Anime",
    image: figureMecha,
  },
  {
    id: 5,
    title: "Ancient Guardian",
    category: "Fantasy",
    image: figureGuardian,
  },
  {
    id: 6,
    title: "Space Marine",
    category: "Sci-Fi",
    image: heroFigure,
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm font-semibold text-primary uppercase tracking-wider"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6"
          >
            Portfolio Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Browse through our collection of handcrafted figures. Each piece represents 
            hours of dedication and artistic passion.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative aspect-square rounded-xl overflow-hidden glass-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none glow-border" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent rounded-b-xl">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-foreground mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GallerySection;
