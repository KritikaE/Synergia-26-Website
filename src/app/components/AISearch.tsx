import { useState } from "react";

/**
 * This component is fully self-contained.
 * No imports from other project files.
 * Zero risk of path errors.
 */

type Stall = {
  id: number;
  name: string;
  keywords: string[];
};

const STALLS: Stall[] = [
  { id: 1, name: "Biriyani", keywords: ["biriyani", "biryani", "rice", "indian"] },
  { id: 2, name: "Chinese Food", keywords: ["chinese", "noodles", "momos", "fast food"] },
  { id: 3, name: "Burgers & Sandwiches", keywords: ["burger", "sandwich", "fast food"] },
  { id: 4, name: "Milkshakes", keywords: ["milkshake", "shake", "cold drink"] },
  { id: 5, name: "Goli Soda", keywords: ["goli", "soda", "soft drink"] },
  { id: 6, name: "Ice Gola", keywords: ["ice gola", "gola", "cold"] },
  { id: 7, name: "Waffles & Desserts", keywords: ["sweet", "dessert", "waffle", "cake"] },
  { id: 8, name: "Popcorn", keywords: ["popcorn", "snacks"] },
  { id: 9, name: "BBQ", keywords: ["bbq", "grill", "non veg"] },
  { id: 10, name: "Games / DIY / Art", keywords: ["games", "fun", "activities"] }
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
              {r.name} (Stall {r.id})
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
