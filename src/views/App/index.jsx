export default function App() {
    const handle = async () => {
        const response = await chrome.runtime.sendMessage({
            event: "queryEvent", // ou "query_eventos"
            param: { value: 1 },
        });

        console.log(response);
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
