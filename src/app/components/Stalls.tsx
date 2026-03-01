import { motion } from 'motion/react';
import { Store, Coffee, Palette, Gamepad2, Sparkles, ShoppingBag, Search } from 'lucide-react';
import { useState } from 'react';

export interface StallData {
  id: string;
  title: string;
  category: 'Food' | 'Beverages' | 'Snacks' | 'Desserts' | 'Activities';
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  fullDescription?: string;
  highlights?: string[];
  previousYear?: string;
}

interface StallsProps {
  onStallClick?: (stall: StallData) => void;
}

export function Stalls({ onStallClick }: StallsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStalls, setFilteredStalls] = useState<StallData[]>([]);
  const stalls: StallData[] = [
    // Food Stalls - Main Dishes
    {
      id: 'biriyani',
      title: 'BIRIYANI',
      category: 'Food',
      description: 'Authentic aromatic biriyani with flavorful spices.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Experience the rich flavors of authentic biriyani. Perfectly cooked rice with aromatic spices and tender meat or vegetables.',
      highlights: [
        'Chicken Biriyani',
        'Veg Biriyani',
        'Raita & Salan included',
        'Freshly prepared',
        'Traditional recipe',
      ],
      previousYear: 'Most popular food stall in Synergia 2025',
    },
    {
      id: 'chinese',
      title: 'CHINESE',
      category: 'Food',
      description: 'Delicious Chinese cuisine - noodles, fried rice, and more.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Satisfy your Chinese food cravings with our authentic dishes. From hakka noodles to manchurian.',
      highlights: [
        'Hakka Noodles',
        'Fried Rice',
        'Manchurian',
        'Spring Rolls',
        'Quick service',
      ],
      previousYear: 'Served 1500+ plates in Synergia 2025',
    },
    {
      id: 'mexican',
      title: 'MEXICAN',
      category: 'Food',
      description: 'Spicy and flavorful Mexican delights.',
      icon: Store,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Enjoy authentic Mexican flavors with tacos, burritos, nachos and more.',
      highlights: [
        'Tacos & Burritos',
        'Nachos with Cheese',
        'Quesadillas',
        'Salsa & Guacamole',
        'Spice levels available',
      ],
      previousYear: 'New addition for Synergia 2026',
    },
    {
      id: 'italian',
      title: 'ITALIAN',
      category: 'Food',
      description: 'Classic Italian pasta, pizza, and more.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Indulge in Italian classics. Fresh pasta, wood-fired pizza, and authentic Italian flavors.',
      highlights: [
        'Pasta Varieties',
        'Wood-fired Pizza',
        'Garlic Bread',
        'Italian Sauces',
        'Vegetarian options',
      ],
      previousYear: 'Popular choice in Synergia 2025',
    },
    {
      id: 'indian',
      title: 'INDIAN',
      category: 'Food',
      description: 'Traditional Indian cuisine with diverse flavors.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Experience the diversity of Indian cuisine. From North Indian curries to South Indian delicacies.',
      highlights: [
        'Paneer Dishes',
        'Dal & Curries',
        'Roti & Naan',
        'South Indian Specials',
        'Authentic spices',
      ],
      previousYear: 'Traditional favorite from Synergia 2025',
    },
    {
      id: 'korean',
      title: 'KOREAN',
      category: 'Food',
      description: 'Trendy Korean street food and dishes.',
      icon: Store,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Try the latest Korean food trends. From kimchi to Korean fried chicken and more.',
      highlights: [
        'Korean Fried Chicken',
        'Kimchi Fried Rice',
        'Tteokbokki',
        'Korean BBQ',
        'K-pop vibes',
      ],
      previousYear: 'New trending addition for Synergia 2026',
    },
    {
      id: 'bbq',
      title: 'BBQ',
      category: 'Food',
      description: 'Smoky grilled BBQ delights.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Enjoy perfectly grilled BBQ items. Smoky, juicy, and full of flavor.',
      highlights: [
        'Grilled Chicken',
        'BBQ Skewers',
        'Grilled Vegetables',
        'Special BBQ Sauce',
        'Fresh off the grill',
      ],
      previousYear: 'Crowd favorite in Synergia 2025',
    },
    {
      id: 'burgers-sandwiches',
      title: 'BURGERS & SANDWICHES',
      category: 'Food',
      description: 'Juicy burgers and fresh sandwiches.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Classic burgers and creative sandwiches. Made fresh with quality ingredients.',
      highlights: [
        'Veg & Chicken Burgers',
        'Club Sandwiches',
        'Grilled Sandwiches',
        'Fresh Vegetables',
        'Custom toppings',
      ],
      previousYear: 'Fast food favorite from Synergia 2025',
    },
    {
      id: 'twisters',
      title: 'TWISTERS',
      category: 'Food',
      description: 'Delicious wraps and rolls with various fillings.',
      icon: Store,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Wrapped goodness with your choice of fillings. Perfect for eating on the go.',
      highlights: [
        'Chicken Twisters',
        'Veg Wraps',
        'Paneer Rolls',
        'Multiple sauces',
        'Portable & tasty',
      ],
      previousYear: 'Quick bite favorite in Synergia 2025',
    },
    {
      id: 'fritters',
      title: 'FRITTERS',
      category: 'Food',
      description: 'Crispy fried snacks and pakoras.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Hot and crispy fritters. Perfect tea-time snacks with chutneys.',
      highlights: [
        'Vegetable Pakoras',
        'Onion Bhajis',
        'Banana Fritters',
        'Mint & Tamarind Chutney',
        'Freshly fried',
      ],
      previousYear: 'Snack time essential from Synergia 2025',
    },

    // Beverages
    {
      id: 'goli-soda',
      title: 'GOLI SODA',
      category: 'Beverages',
      description: 'Traditional Indian marble soda in various flavors.',
      icon: Coffee,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Experience the nostalgia of Goli Soda. Traditional marble bottle sodas with unique flavors.',
      highlights: [
        'Multiple Flavors',
        'Lemon & Orange',
        'Rose & Jeera',
        'Refreshing & fizzy',
        'Traditional experience',
      ],
      previousYear: 'Nostalgic hit in Synergia 2025',
    },
    {
      id: 'milkshakes',
      title: 'MILKSHAKES',
      category: 'Beverages',
      description: 'Thick and creamy milkshakes in various flavors.',
      icon: Coffee,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Indulge in thick, creamy milkshakes. Made with real ice cream and fresh ingredients.',
      highlights: [
        'Chocolate & Vanilla',
        'Strawberry & Mango',
        'Oreo & KitKat',
        'Extra thick option',
        'Whipped cream topping',
      ],
      previousYear: 'Best seller in Synergia 2025',
    },
    {
      id: 'iced-teas',
      title: 'ICED TEAS',
      category: 'Beverages',
      description: 'Refreshing iced teas with natural flavors.',
      icon: Coffee,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Cool down with our refreshing iced teas. Natural flavors and perfect sweetness.',
      highlights: [
        'Lemon Iced Tea',
        'Peach Iced Tea',
        'Green Tea variants',
        'Low sugar options',
        'Fresh & chilled',
      ],
      previousYear: 'Refreshing choice in Synergia 2025',
    },

    // Snacks & Treats
    {
      id: 'popcorn',
      title: 'POPCORN',
      category: 'Snacks',
      description: 'Freshly popped popcorn in different flavors.',
      icon: Sparkles,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Freshly popped popcorn with exciting flavor options. Perfect movie-style snack.',
      highlights: [
        'Butter Popcorn',
        'Caramel Popcorn',
        'Cheese Popcorn',
        'Spicy Masala',
        'Freshly made',
      ],
      previousYear: 'Munching favorite from Synergia 2025',
    },
    {
      id: 'fruit-bowls',
      title: 'FRUIT BOWLS',
      category: 'Snacks',
      description: 'Fresh fruit bowls and healthy options.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Healthy and refreshing fruit bowls. Fresh seasonal fruits with optional toppings.',
      highlights: [
        'Seasonal Fresh Fruits',
        'Fruit Salad',
        'Honey & Lime dressing',
        'Chaat Masala option',
        'Healthy choice',
      ],
      previousYear: 'Healthy option in Synergia 2025',
    },

    // Desserts
    {
      id: 'ice-gola',
      title: 'ICE GOLA',
      category: 'Desserts',
      description: 'Colorful shaved ice with flavored syrups.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Beat the heat with colorful ice golas. Shaved ice with your choice of flavored syrups.',
      highlights: [
        'Multiple Syrup Flavors',
        'Kala Khatta',
        'Orange & Mango',
        'Mixed Fruit',
        'Cool & refreshing',
      ],
      previousYear: 'Summer favorite from Synergia 2025',
    },
    {
      id: 'waffles',
      title: 'WAFFLES',
      category: 'Desserts',
      description: 'Crispy waffles with delicious toppings.',
      icon: Sparkles,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Freshly made crispy waffles with your choice of toppings. Sweet or savory options available.',
      highlights: [
        'Belgian Waffles',
        'Chocolate & Nutella',
        'Fresh Fruits',
        'Ice Cream topping',
        'Made to order',
      ],
      previousYear: 'Dessert hit in Synergia 2025',
    },
    {
      id: 'brownies-cupcakes',
      title: 'BROWNIES & CUPCAKES',
      category: 'Desserts',
      description: 'Freshly baked brownies, cupcakes, cakes, and muffins.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Indulge in freshly baked goodies. Fudgy brownies, fluffy cupcakes, moist cakes, and delicious muffins.',
      highlights: [
        'Chocolate Brownies',
        'Assorted Cupcakes',
        'Mini Cakes',
        'Blueberry Muffins',
        'Freshly baked daily',
      ],
      previousYear: 'Baked goods favorite from Synergia 2025',
    },
    {
      id: 'cookies-cheesecakes',
      title: 'COOKIES & CHEESECAKES',
      category: 'Desserts',
      description: 'Homemade cookies, creamy cheesecakes, and churros.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Sweet treats galore! Freshly baked cookies, creamy cheesecakes, and crispy churros.',
      highlights: [
        'Chocolate Chip Cookies',
        'Classic Cheesecake',
        'Cinnamon Churros',
        'Variety of flavors',
        'Perfect with coffee',
      ],
      previousYear: 'Sweet tooth paradise in Synergia 2025',
    },
    {
      id: 'chocolate-covered',
      title: 'CHOCOLATE COVERED EVERYTHING',
      category: 'Desserts',
      description: 'Everything dipped in delicious chocolate.',
      icon: Sparkles,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Chocolate lovers paradise! Fruits, cookies, pretzels, and more - all covered in rich chocolate.',
      highlights: [
        'Chocolate Strawberries',
        'Chocolate Pretzels',
        'Chocolate Oreos',
        'Dark & Milk Chocolate',
        'Instagram-worthy',
      ],
      previousYear: 'Viral sensation in Synergia 2025',
    },

    // Activities
    {
      id: 'games-diy-art',
      title: 'GAMES / DIY / ART',
      category: 'Activities',
      description: 'Fun games, DIY activities, and art experiences.',
      icon: Gamepad2,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Take a break with fun activities! Play games, create DIY crafts, or express yourself through art.',
      highlights: [
        'Board Games',
        'DIY Craft Kits',
        'Art Supplies',
        'Group Activities',
        'Win prizes',
      ],
      previousYear: 'Interactive favorite from Synergia 2025',
    },
    {
      id: 'make-chip-bag',
      title: 'MAKE YOUR OWN CHIP BAG',
      category: 'Activities',
      description: 'Create your custom chip bag with your favorite snacks.',
      icon: Palette,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Unique experience! Choose from various chips and snacks to create your personalized chip bag mix.',
      highlights: [
        'Multiple Chip Varieties',
        'Mix & Match',
        'Custom Portions',
        'Unique Combinations',
        'Take home creation',
      ],
      previousYear: 'New interactive experience for Synergia 2026',
    },
  ];

  const categories = ['Food', 'Beverages', 'Snacks', 'Desserts', 'Activities'] as const;
  
  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredStalls([]);
      return;
    }

    const q = query.toLowerCase();
    const matches = stalls.filter(stall => {
      // Search in stall name
      if (stall.title.toLowerCase().includes(q)) return true;
      
      // Search in description
      if (stall.description.toLowerCase().includes(q)) return true;
      
      // Search in full description
      if (stall.fullDescription?.toLowerCase().includes(q)) return true;
      
      // Search in highlights
      if (stall.highlights?.some(h => h.toLowerCase().includes(q))) return true;
      
      // Search in category
      if (stall.category.toLowerCase().includes(q)) return true;
      
      // Search for common food keywords
      // For rice
      if (q.includes('rice') && (stall.title.includes('BIRIYANI') || stall.title.includes('CHINESE') || stall.title.includes('KOREAN'))) return true;
      
      // For soft drinks
      if ((q.includes('soft drink') || q.includes('soda') || q.includes('drink')) && (stall.title.includes('GOLI SODA') || stall.title.includes('ICED TEA') || stall.title.includes('MILKSHAKE'))) return true;
      
      // For noodles
      if (q.includes('noodle') && stall.title.includes('CHINESE')) return true;
      
      // For chocolate
      if (q.includes('chocolate') && (stall.title.includes('CHOCOLATE') || stall.title.includes('BROWNIES') || stall.title.includes('COOKIES'))) return true;
      
      // For spicy
      if (q.includes('spicy') && (stall.title.includes('MEXICAN') || stall.title.includes('INDIAN') || stall.title.includes('KOREAN'))) return true;
      
      // For cold/ice
      if ((q.includes('cold') || q.includes('ice')) && (stall.title.includes('ICE') || stall.title.includes('MILKSHAKE') || stall.title.includes('ICED'))) return true;
      
      // For sweet
      if (q.includes('sweet') && stall.category === 'Desserts') return true;
      
      // For healthy
      if (q.includes('healthy') && stall.title.includes('FRUIT')) return true;
      
      return false;
    });
    
    setFilteredStalls(matches);
  };

  const stallsByCategory = categories.map(cat => ({
    category: cat,
    stalls: (searchQuery ? filteredStalls : stalls).filter(s => s.category === cat)
  }));

  return (
    <section id="stalls" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#0a0015] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="font-['Press_Start_2P'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6" style={{ color: '#ff1493', textShadow: '0 0 15px rgba(255, 20, 147, 0.5)' }}>
            STALLS
          </h2>
          <p className="font-['Rajdhani'] text-base sm:text-lg md:text-xl text-[#00ffff] max-w-2xl mx-auto px-4 mb-8">
            Shop • Eat • Explore
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto px-4">
            <div className="relative">
              <Search 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00d9ff]" 
              />
              <input
                type="text"
                placeholder="Search for food items, drinks, or activities..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-black/60 border-2 border-[#00d9ff]/30 rounded-lg text-white font-['Rajdhani'] text-base focus:outline-none focus:border-[#00d9ff] transition-all duration-300"
                style={{
                  boxShadow: searchQuery ? '0 0 20px rgba(0, 217, 255, 0.3)' : 'none'
                }}
              />
            </div>
            {searchQuery && (
              <p className="mt-3 text-sm font-['Rajdhani'] text-gray-400">
                {filteredStalls.length > 0 
                  ? `Found ${filteredStalls.length} stall${filteredStalls.length !== 1 ? 's' : ''} matching "${searchQuery}"`
                  : `No stalls found for "${searchQuery}"`
                }
              </p>
            )}
          </div>
        </motion.div>

        {/* Stalls by Category */}
        {stallsByCategory
          .filter(({ stalls: categoryStalls }) => categoryStalls.length > 0)
          .map(({ category, stalls: categoryStalls }) => (
          <div key={category} className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Press_Start_2P'] text-xl sm:text-2xl md:text-3xl mb-8"
              style={{ color: '#87CEEB', textShadow: '0 0 10px rgba(135, 206, 235, 0.4)' }}
            >
              {category}
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {categoryStalls.map((stall, index) => (
                <motion.div
                  key={stall.id}
                  id={stall.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="bg-black/60 backdrop-blur-sm p-6 sm:p-8 pixel-corners group cursor-pointer transition-all duration-300 hover:bg-black/80 border-2"
                  style={{ borderColor: stall.color + '60' }}
                  onClick={() => onStallClick?.(stall)}
                >
                  <div className="mb-4 sm:mb-6" style={{ color: stall.color }}>
                    <stall.icon className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3
                    className="font-['Orbitron'] text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4"
                    style={{ color: stall.color }}
                  >
                    {stall.title}
                  </h3>

                  <p className="font-['Rajdhani'] text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
                    {stall.description}
                  </p>

                  <button
                    className="neon-button font-['Orbitron'] text-xs sm:text-sm px-4 sm:px-6 py-2 border-2 pixel-corners hover:scale-105 transition-all duration-300"
                    style={{
                      color: stall.color,
                      borderColor: stall.color,
                    }}
                  >
                    VIEW DETAILS
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
