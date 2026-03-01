import { useState } from "react";
import { useNavigate } from "react-router";

/**
 * Smart AI Search for Stalls
 * Searches through all stall names, categories, and descriptions
 */

type Stall = {
  id: string;
  name: string;
  category: string;
  keywords: string[];
};

const STALLS: Stall[] = [
  // Food Stalls - Main Dishes
  {
    id: "biriyani",
    name: "BIRIYANI",
    category: "Food",
    keywords: ["biriyani", "biryani", "rice", "chicken", "veg", "indian", "spicy", "aromatic"]
  },
  {
    id: "chinese",
    name: "CHINESE",
    category: "Food",
    keywords: ["chinese", "noodles", "fried rice", "manchurian", "hakka", "spring rolls", "fast food"]
  },
  {
    id: "mexican",
    name: "MEXICAN",
    category: "Food",
    keywords: ["mexican", "tacos", "burritos", "nachos", "quesadilla", "salsa", "spicy"]
  },
  {
    id: "italian",
    name: "ITALIAN",
    category: "Food",
    keywords: ["italian", "pasta", "pizza", "spaghetti", "garlic bread", "cheese"]
  },
  {
    id: "indian",
    name: "INDIAN",
    category: "Food",
    keywords: ["indian", "curry", "paneer", "dal", "roti", "naan", "south indian", "north indian"]
  },
  {
    id: "korean",
    name: "KOREAN",
    category: "Food",
    keywords: ["korean", "kimchi", "fried chicken", "tteokbokki", "kpop", "bbq", "korean food"]
  },
  {
    id: "bbq",
    name: "BBQ",
    category: "Food",
    keywords: ["bbq", "barbecue", "grill", "grilled", "chicken", "skewers", "smoky"]
  },
  {
    id: "burgers-sandwiches",
    name: "BURGERS & SANDWICHES",
    category: "Food",
    keywords: ["burger", "sandwich", "club sandwich", "veg burger", "chicken burger", "fast food"]
  },
  {
    id: "twisters",
    name: "TWISTERS",
    category: "Food",
    keywords: ["twister", "wrap", "roll", "chicken wrap", "veg wrap", "paneer roll"]
  },
  {
    id: "fritters",
    name: "FRITTERS",
    category: "Food",
    keywords: ["fritters", "pakora", "bhaji", "fried", "snacks", "crispy", "chutney"]
  },
  // Beverages
  {
    id: "goli-soda",
    name: "GOLI SODA",
    category: "Beverages",
    keywords: ["goli soda", "soda", "marble soda", "soft drink", "fizzy", "traditional", "lemon"]
  },
  {
    id: "milkshakes",
    name: "MILKSHAKES",
    category: "Beverages",
    keywords: ["milkshake", "shake", "chocolate", "vanilla", "strawberry", "oreo", "thick shake", "cold"]
  },
  {
    id: "iced-teas",
    name: "ICED TEAS",
    category: "Beverages",
    keywords: ["iced tea", "ice tea", "lemon tea", "peach tea", "green tea", "cold", "refreshing"]
  },
  // Snacks
  {
    id: "popcorn",
    name: "POPCORN",
    category: "Snacks",
    keywords: ["popcorn", "butter", "caramel", "cheese", "masala", "snacks"]
  },
  {
    id: "fruit-bowls",
    name: "FRUIT BOWLS",
    category: "Snacks",
    keywords: ["fruit", "fruit bowl", "fruit salad", "healthy", "fresh", "seasonal"]
  },
  // Desserts
  {
    id: "ice-gola",
    name: "ICE GOLA",
    category: "Desserts",
    keywords: ["ice gola", "gola", "shaved ice", "kala khatta", "ice", "cold", "syrup"]
  },
  {
    id: "waffles",
    name: "WAFFLES",
    category: "Desserts",
    keywords: ["waffle", "belgian waffle", "chocolate", "nutella", "ice cream", "dessert"]
  },
  {
    id: "brownies-cupcakes",
    name: "BROWNIES & CUPCAKES",
    category: "Desserts",
    keywords: ["brownie", "cupcake", "cake", "muffin", "chocolate", "baked", "dessert"]
  },
  {
    id: "cookies-cheesecakes",
    name: "COOKIES & CHEESECAKES",
    category: "Desserts",
    keywords: ["cookie", "cheesecake", "churros", "chocolate chip", "baked", "sweet"]
  },
  {
    id: "chocolate-covered",
    name: "CHOCOLATE COVERED EVERYTHING",
    category: "Desserts",
    keywords: ["chocolate", "chocolate covered", "strawberry", "pretzel", "oreo", "dipped"]
  },
  // Activities
  {
    id: "games-diy-art",
    name: "GAMES / DIY / ART",
    category: "Activities",
    keywords: ["games", "diy", "art", "craft", "activities", "fun", "board games"]
  },
  {
    id: "make-chip-bag",
    name: "MAKE YOUR OWN CHIP BAG",
    category: "Activities",
    keywords: ["chip bag", "chips", "custom", "make your own", "snacks", "diy"]
  }
];

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Stall[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleSearch(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const q = value.toLowerCase();

    // Search through stall names, categories, and keywords
    const matches = STALLS.filter(stall =>
      stall.name.toLowerCase().includes(q) ||
      stall.category.toLowerCase().includes(q) ||
      stall.keywords.some(k => k.includes(q))
    );

    setResults(matches);
  }

  function handleStallClick(stallId: string) {
    // Navigate to stalls page with the stall ID
    navigate('/stalls');
    setOpen(false);
    setQuery("");
    setResults([]);
    
    // Scroll to the stall after navigation
    setTimeout(() => {
      const element = document.getElementById(stallId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.click(); // Open the modal
      }
    }, 100);
  }

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search stalls..."
        value={query}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #555",
          background: "#000",
          color: "#fff",
          width: "180px"
        }}
      />

      {open && results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "#111",
            border: "1px solid #333",
            borderRadius: "6px",
            width: "220px",
            maxHeight: "300px",
            overflowY: "auto",
            zIndex: 999
          }}
        >
          {results.map(r => (
            <div
              key={r.id}
              onClick={() => handleStallClick(r.id)}
              style={{
                padding: "8px",
                fontSize: "14px",
                borderBottom: "1px solid #222",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "#222"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ fontWeight: "600", color: "#00d9ff" }}>{r.name}</div>
              <div style={{ fontSize: "12px", color: "#aaa" }}>
                📍 {r.category}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
