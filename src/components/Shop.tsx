
import { useState } from "react";

const Shop = () => {
  const [cart, setCart] = useState<Array<{id: number, name: string, price: number, size: string, quantity: number}>>([]);
  
  const products = [
    {
      id: 1,
      name: "Tarn Music T-Shirt",
      price: 25,
      image: "/placeholder.svg",
      description: "High-quality cotton t-shirt with Tarn's logo",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 2,
      name: "Acoustic Sessions Hoodie",
      price: 45,
      image: "/placeholder.svg", 
      description: "Comfortable hoodie perfect for concert nights",
      sizes: ["S", "M", "L", "XL"]
    },
    {
      id: 3,
      name: "Limited Edition Vinyl",
      price: 35,
      image: "/placeholder.svg",
      description: "First EP on limited edition vinyl",
      sizes: ["One Size"]
    }
  ];

  const addToCart = (product: typeof products[0], size: string) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.id === product.id && item.size === size);
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { 
        id: product.id, 
        name: product.name, 
        price: product.price, 
        size, 
        quantity: 1 
      }];
    });
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section id="shop" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Merchandise Shop
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="max-w-md mx-auto bg-card rounded-lg shadow-lg p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Cart Summary</h3>
            <div className="space-y-2 mb-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.name} ({item.size}) x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2 font-bold">
              Total: ${cartTotal.toFixed(2)}
            </div>
            <button className="w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProductCard = ({ 
  product, 
  onAddToCart 
}: { 
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
    sizes: string[];
  };
  onAddToCart: (product: any, size: string) => void;
}) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-border">
      <div className="aspect-square bg-muted flex items-center justify-center">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Size:</label>
          <select 
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background"
          >
            {product.sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        
        <button 
          onClick={() => onAddToCart(product, selectedSize)}
          className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Shop;
