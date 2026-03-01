import { useState } from "react";

/**
 * Self-contained AI-like stall search
 * No external imports
 * Zero path errors
 */

type Stall = {
  id: number;
  name: string;
  location: string;
  keywords: string[];
};

const STALLS: Stall[] = [
  { id: 1, name: "Biriyani", location: "Food Court A", keywords: ["biriyani", "biryani", "rice", "indian"] },
  { id: 2, name: "Chinese Food", location: "Food Court A", keywords: ["chinese", "noodles", "momos"] },
  { id: 3, name: "Burgers & Sandwiches", location: "Food Court B", keywords: ["burger", "burgers", "sandwich", "fast food"] },
  { id: 4, name: "Milkshakes", location: "Drinks Zone", keywords: ["milkshake", "shake", "cold"] },
  { id: 5, name: "Goli Soda", location: "Drinks Zone", keywords: ["goli", "soda", "soft drink"] },
  { id: 6, name: "Ice Gola", location: "Dessert Zone", keywords: ["ice", "gola"] },
  { id: 7, name: "Waffles & Desserts", location: "Dessert Zone", keywords: ["waffle", "dessert", "sweet", "cake"] },
  { id: 8, name: "Popcorn", location: "Snacks Zone", keywords: ["popcorn", "snacks"] },
  { id: 9, name: "BBQ", location: "Food Court C", keywords: ["bbq", "grill", "non veg"] },
  { id: 10, name: "Games / DIY / Art", location: "Activity Zone", keywords: ["games", "fun", "art", "diy"] }
];

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = query.trim()
    ? STALLS.filter(stall =>
        stall.keywords.some(k =>
          k.toLowerCase().includes(query.toLowerCase())
        )
      )
    : [];

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search stalls..."
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(e) => setQuery(e.target.value)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        style={{
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #00ffff",
          background: "#000",
          color: "#fff",
          width: "200px"
        }}
      />

      {open && results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "110%",
            right: 0,
            background: "#0b0b0b",
            border: "1px solid #00ffff",
            borderRadius: "6px",
            width: "260px",
            zIndex: 999
          }}
        >
          {results.map(stall => (
            <div
              key={stall.id}
              style={{
                padding: "8px 10px",
                borderBottom: "1px solid #222",
                cursor: "default"
              }}
            >
              <div style={{ fontWeight: 600 }}>{stall.name}</div>
              <div style={{ fontSize: "12px", color: "#00ffff" }}>
                {stall.location}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
