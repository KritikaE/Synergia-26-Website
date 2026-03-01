import { useState } from "react";

/**
 * Fully self-contained AI Search
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
  {
    id: 1,
    name: "Biriyani",
    location: "Food Court A",
    keywords: ["biriyani", "biryani", "rice", "indian"]
  },
  {
    id: 2,
    name: "Chinese Food",
    location: "Food Court A",
    keywords: ["chinese", "noodles", "momos", "fast food"]
  },
  {
    id: 3,
    name: "Burgers & Sandwiches",
    location: "Food Court B",
    keywords: ["burger", "sandwich", "fast food"]
  },
  {
    id: 4,
    name: "Milkshakes",
    location: "Drinks Zone",
    keywords: ["milkshake", "shake", "cold", "drink"]
  },
  {
    id: 5,
    name: "Goli Soda",
    location: "Drinks Zone",
    keywords: ["goli", "soda", "soft drink"]
  },
  {
    id: 6,
    name: "Ice Gola",
    location: "Dessert Zone",
    keywords: ["ice", "gola", "cold"]
  },
  {
    id: 7,
    name: "Waffles & Desserts",
    location: "Dessert Zone",
    keywords: ["sweet", "dessert", "waffle", "cake"]
  },
  {
    id: 8,
    name: "Popcorn",
    location: "Snacks Zone",
    keywords: ["popcorn", "snacks"]
  },
  {
    id: 9,
    name: "BBQ",
    location: "Food Court B",
    keywords: ["bbq", "grill", "non veg"]
  },
  {
    id: 10,
    name: "Games / DIY / Art",
    location: "Activity Zone",
    keywords: ["games", "fun", "activities", "art"]
  }
];

export default function AISearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Stall[]>([]);
  const [open, setOpen] = useState(false);

  function handleSearch(value: string) {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const q = value.toLowerCase();

    const matches = STALLS.filter(stall =>
      stall.keywords.some(k => q.includes(k))
    );

    setResults(matches);
  }

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search stalls..."
        value={query}
        onFocus={() => setOpen(true)}
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
            width: "100%",
            zIndex: 999
          }}
        >
          {results.map(r => (
            <div
              key={r.id}
              style={{
                padding: "8px",
                fontSize: "14px",
                borderBottom: "1px solid #222"
              }}
            >
              <div style={{ fontWeight: "600" }}>{r.name}</div>
              <div style={{ fontSize: "12px", color: "#aaa" }}>
                📍 {r.location}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
