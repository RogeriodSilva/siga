export default function App() {
  const handle = () => {
    chrome.runtime.sendMessage({
      event: "teste",
      param: { value: 1 },
    });
  };

  return (
    <>
      <button
        onClick={() => handle()}
        className="bg-emerald-950 px-4 py-2 rounded-lg text-white font-bold"
      >
        Clicar
      </button>
    </>
  );
}
