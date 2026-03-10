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
  location?: string;
}

interface StallsProps {
  onStallClick?: (stall: StallData) => void;
}

export function Stalls({ onStallClick }: StallsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStalls, setFilteredStalls] = useState<StallData[]>([]);
  const stalls: StallData[] = [
    {
      id: 'biryani',
      title: 'BIRYANI',
      category: 'Food',
      description: 'Authentic aromatic biryani with flavorful spices.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Experience the rich flavors of authentic biryani.',
      highlights: ['Chicken Biryani', 'Veg Biryani', 'Freshly prepared'],
      location: 'Sports Ground',
    },
    {
      id: 'milkshakes',
      title: 'MILKSHAKES',
      category: 'Beverages',
      description: 'Thick and creamy milkshakes in various flavors.',
      icon: Coffee,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Indulge in thick, creamy milkshakes.',
      highlights: ['Chocolate', 'Vanilla', 'Strawberry', 'Mango'],
      location: 'Sports Ground',
    },
    {
      id: 'burgers-sandwiches',
      title: 'BURGERS AND SANDWICHES',
      category: 'Food',
      description: 'Juicy burgers and fresh sandwiches.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Classic burgers and creative sandwiches.',
      highlights: ['Veg & Chicken Burgers', 'Club Sandwiches'],
      location: 'Sports Ground',
    },
    {
      id: 'soft-drinks',
      title: 'SOFT DRINKS',
      category: 'Beverages',
      description: 'Refreshing soft drinks and beverages.',
      icon: Coffee,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Cool down with refreshing soft drinks.',
      highlights: ['Coke', 'Pepsi', 'Sprite', 'Fanta'],
      location: 'Sports Ground',
    },
    {
      id: 'water-bottles',
      title: 'WATER BOTTLES',
      category: 'Beverages',
      description: 'Packaged drinking water bottles.',
      icon: Coffee,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Stay hydrated with packaged water.',
      highlights: ['Mineral Water', 'Chilled', 'Various sizes'],
      location: 'Sports Ground',
    },
    {
      id: 'chinese',
      title: 'CHINESE',
      category: 'Food',
      description: 'Delicious Chinese cuisine.',
      icon: Store,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Satisfy your Chinese food cravings.',
      highlights: ['Noodles', 'Fried Rice', 'Manchurian'],
      location: 'Sports Ground',
    },
    {
      id: 'panipuri',
      title: 'PANIPURI',
      category: 'Snacks',
      description: 'Crispy puris with tangy flavored water.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Enjoy the classic Indian street food.',
      highlights: ['Spicy', 'Sweet', 'Tangy flavors'],
      location: 'Sports Ground',
    },
    {
      id: 'twisters',
      title: 'TWISTERS',
      category: 'Food',
      description: 'Delicious wraps and rolls.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Wrapped goodness with various fillings.',
      highlights: ['Chicken Twisters', 'Veg Wraps'],
      location: 'Sports Ground',
    },
    {
      id: 'goli-soda',
      title: 'GOLI SODA',
      category: 'Beverages',
      description: 'Traditional Indian marble soda.',
      icon: Coffee,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Experience the nostalgia of Goli Soda.',
      highlights: ['Multiple Flavors', 'Refreshing'],
      location: 'Sports Ground',
    },
    {
      id: 'ice-cream',
      title: 'ICE CREAM',
      category: 'Desserts',
      description: 'Creamy ice cream in various flavors.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Cool down with delicious ice cream.',
      highlights: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch'],
      location: 'Sports Ground',
    },
    {
      id: 'diy',
      title: 'DIY',
      category: 'Activities',
      description: 'Do-it-yourself craft activities.',
      icon: Palette,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Create your own crafts and art.',
      highlights: ['Craft Kits', 'Art Supplies', 'Creative Fun'],
      location: 'Sports Ground',
    },
    {
      id: 'fritters',
      title: 'FRITTERS',
      category: 'Snacks',
      description: 'Crispy fried snacks and pakoras.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Hot and crispy fritters.',
      highlights: ['Vegetable Pakoras', 'Onion Bhajis'],
      location: 'Sports Ground',
    },
    {
      id: 'waffles',
      title: 'WAFFLES',
      category: 'Desserts',
      description: 'Crispy waffles with delicious toppings.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Freshly made crispy waffles.',
      highlights: ['Belgian Waffles', 'Chocolate', 'Nutella'],
      location: 'Sports Ground',
    },
    {
      id: 'popcorn',
      title: 'POPCORN',
      category: 'Snacks',
      description: 'Freshly popped popcorn.',
      icon: Sparkles,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Freshly popped popcorn with exciting flavors.',
      highlights: ['Butter', 'Caramel', 'Cheese'],
      location: 'Sports Ground',
    },
    {
      id: 'make-chip-bag',
      title: 'MAKE YOUR OWN CHIP BAG',
      category: 'Activities',
      description: 'Create your custom chip bag.',
      icon: Palette,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Choose from various chips and create your mix.',
      highlights: ['Mix & Match', 'Custom Portions'],
      location: 'Sports Ground',
    },
    {
      id: 'brownies',
      title: 'BROWNIES',
      category: 'Desserts',
      description: 'Freshly baked brownies.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Indulge in fudgy brownies.',
      highlights: ['Chocolate Brownies', 'Freshly baked'],
      location: 'Sports Ground',
    },
    {
      id: 'momos',
      title: 'MOMOS',
      category: 'Food',
      description: 'Steamed or fried dumplings.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Delicious momos with various fillings.',
      highlights: ['Veg Momos', 'Chicken Momos', 'Fried & Steamed'],
      location: 'Sports Ground',
    },
    {
      id: 'ice-gola',
      title: 'ICE GOLA',
      category: 'Desserts',
      description: 'Colorful shaved ice with flavored syrups.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Beat the heat with colorful ice golas.',
      highlights: ['Multiple Flavors', 'Refreshing'],
      location: 'Sports Ground',
    },
    {
      id: 'accessories',
      title: 'ACCESSORIES',
      category: 'Activities',
      description: 'Fashion accessories and merchandise.',
      icon: ShoppingBag,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Browse through trendy accessories.',
      highlights: ['Jewelry', 'Bags', 'Fashion Items'],
      location: 'Sports Ground',
    },
    {
      id: 'chocolate-covered',
      title: 'CHOCOLATE COVERED EVERYTHING',
      category: 'Desserts',
      description: 'Everything dipped in delicious chocolate.',
      icon: Sparkles,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Chocolate lovers paradise!',
      highlights: ['Chocolate Strawberries', 'Chocolate Pretzels'],
      location: 'Sports Ground',
    },
    {
      id: 'churros',
      title: 'CHURROS',
      category: 'Desserts',
      description: 'Crispy fried dough with sugar and cinnamon.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Enjoy crispy churros with chocolate sauce.',
      highlights: ['Cinnamon Sugar', 'Chocolate Dip'],
      location: 'Sports Ground',
    },
    {
      id: 'chicken-pakodi',
      title: 'CHICKEN PAKODI',
      category: 'Snacks',
      description: 'Crispy fried chicken fritters.',
      icon: Sparkles,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Spicy and crispy chicken pakodis.',
      highlights: ['Spicy', 'Crispy', 'Hot & Fresh'],
      location: 'Sports Ground',
    },
    {
      id: 'frozen-foods',
      title: 'FROZEN FOODS',
      category: 'Food',
      description: 'Frozen treats and snacks.',
      icon: Store,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Cool down with frozen delights.',
      highlights: ['Ice Pops', 'Frozen Treats'],
      location: 'Sports Ground',
    },
    {
      id: 'dora-cakes',
      title: 'DORA CAKES',
      category: 'Desserts',
      description: 'Soft Japanese-style pancakes.',
      icon: Sparkles,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'Fluffy pancakes with sweet filling.',
      highlights: ['Red Bean', 'Chocolate', 'Custard'],
      location: 'Sports Ground',
    },
    {
      id: 'bbq',
      title: 'BBQ',
      category: 'Food',
      description: 'Smoky grilled BBQ delights.',
      icon: Store,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Enjoy perfectly grilled BBQ items.',
      highlights: ['Grilled Chicken', 'BBQ Skewers'],
      location: 'Sports Ground',
    },
    {
      id: 'games-1',
      title: 'GAMES - 1',
      category: 'Activities',
      description: 'Fun games and activities.',
      icon: Gamepad2,
      color: '#00ffff',
      borderColor: 'neon-border-blue',
      fullDescription: 'Play exciting games and win prizes.',
      highlights: ['Wire Buzz', 'Ball Maze', 'Match the Colour', 'Goal It', 'Unlock Your Luck', 'Sort Balls', 'Ball into Hole', 'Straw Game'],
      location: 'Sports Ground',
    },
    {
      id: 'games-2',
      title: 'GAMES - 2',
      category: 'Activities',
      description: 'More fun games and activities.',
      icon: Gamepad2,
      color: '#ff1493',
      borderColor: 'neon-border-pink',
      fullDescription: 'More gaming fun and entertainment.',
      highlights: ['Buzz Wire', 'Hand Hop Scotch', 'Balloon Dart', 'Word Guessing', 'Guess the Character', 'Guess the Number', 'Die Art Coin'],
      location: 'Sports Ground',
    },
    {
      id: 'games-3',
      title: 'GAMES - 3',
      category: 'Activities',
      description: 'Additional games and entertainment.',
      icon: Gamepad2,
      color: '#ff00ff',
      borderColor: 'neon-border-purple',
      fullDescription: 'Even more games to enjoy.',
      highlights: ['Roll the Ball', 'Spin the Wheel', 'String Game', 'Ring Game', 'Blowing the Cup', 'Blindfold Drawing', 'Luck Game'],
      location: 'Sports Ground',
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
      if (stall.title.toLowerCase().includes(q)) return true;
      if (stall.description.toLowerCase().includes(q)) return true;
      if (stall.fullDescription?.toLowerCase().includes(q)) return true;
      if (stall.highlights?.some(h => h.toLowerCase().includes(q))) return true;
      if (stall.category.toLowerCase().includes(q)) return true;
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
      <div className="absolute inset-0 opacity-10">
        <div className="arcade-grid absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
