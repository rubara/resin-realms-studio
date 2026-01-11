import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30 backdrop-blur-sm">
                {product.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 space-y-3">
            <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-bold gradient-text-gold">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <Button variant="glow" size="default" className="w-full group/btn">
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
