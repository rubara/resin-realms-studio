import { motion } from "framer-motion";
import { Layers, Palette, Star } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Premium Resin",
      description: "We use only the highest quality photopolymer resins for exceptional detail and durability.",
    },
    {
      icon: Palette,
      title: "Expert Painting",
      description: "Each figure is hand-painted by skilled artists with meticulous attention to detail.",
    },
    {
      icon: Star,
      title: "Collector Grade",
      description: "Every piece is inspected and packaged with care, worthy of any premium collection.",
    },
  ];

  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-sm font-semibold text-primary uppercase tracking-wider"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6"
          >
            Crafting Dreams Into Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We specialize in creating stunning 3D resin printed action figures that capture 
            the essence of your favorite characters. From gaming legends to anime heroes, 
            we bring detailed miniatures to life with passion and precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
