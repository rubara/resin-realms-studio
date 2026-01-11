import { motion } from "framer-motion";

const CreatorSection = () => {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass-card glow-border">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Creator"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/20 blur-2xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3 space-y-6"
            >
              <span className="font-display text-sm font-semibold text-primary uppercase tracking-wider">
                About Me
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                The Artist Behind the Prints
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I'm a passionate 3D artist and collector who turned a lifelong 
                  love for action figures into a craft. With years of experience in 3D 
                  modeling and resin printing, I create detailed miniatures that capture 
                  the essence of beloved characters.
                </p>
                <p>
                  Every figure I create is a labor of love - from the initial design to 
                  the final painted details. I use professional-grade resin printers and 
                  high-quality materials to ensure each piece meets collector standards.
                </p>
              </div>
              
              {/* Signature */}
              <div className="pt-4">
                <div className="font-display text-2xl gradient-text-gold italic">
                  — The 3D Forge Creator
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
