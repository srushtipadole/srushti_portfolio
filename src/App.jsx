import Home from "./pages/Home";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* SNOW LAYER */}
      <div className="absolute inset-0 pointer-events-none z-50">
        {Array.from({ length: 35 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-white opacity-70 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 6}s`,
              fontSize: `${4 + Math.random() * 4}px`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <Home />
    </div>
  );
}
