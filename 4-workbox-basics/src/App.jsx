import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-zinc-900 max-h-dvh h-dvh overflow-hidden w-screen flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold text-zinc-300 font-mono">Demo App</h1>

      <button
        className="bg-blue-400 px-6 py-3 rounded-lg font-medium font-mono"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is: {count}
      </button>
    </main>
  );
}
