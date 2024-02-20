export function App() {
  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await response.json();
    return console.log(json);
  }

  return (
    <main className="bg-zinc-900 max-h-dvh h-dvh overflow-hidden w-screen flex flex-col justify-center items-center gap-12">
      <h1 className="text-5xl font-bold text-zinc-300 font-mono">Demo App</h1>

      <button
        className="bg-blue-400 px-6 py-3 rounded-lg font-medium font-mono"
        onClick={fetchData}
      >
        Fetch Data
      </button>
    </main>
  );
}
