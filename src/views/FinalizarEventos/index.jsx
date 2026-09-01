import Button from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function FinalizarEvento() {
    const [rawText, setRawText] = useState("");
    const [eventos, setEventos] = useState([]);
    const [loading, setLoading] = useState(false);

    const validateEvents = (text) => {
        const list = text
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => /^\d{4}-\d{5}$/.test(item));

        return Array.from(new Set(list));
    };

    const handleTextareaChange = (e) => {
        const value = e.target.value;
        setRawText(value);
        setEventos(validateEvents(value));
    };

    const handleExecuteEvent = async () => {
        if (eventos.length == 0 || loading) return;

        setLoading(true);

        try {
            const response = await chrome.runtime.sendMessage({
                event: "queryEvents",
            });

            console.log(response);

            setRawText("");
            setEventos([]);
        } catch (error) {
            console.error(`Finalizar Eventos - ${error}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <section className="flex flex-col space-y-2">
                <Button
                    onClick={handleExecuteEvent}
                    variant="primary"
                    disabled={eventos.length == 0 || loading}
                >
                    Finalizar Eventos
                </Button>

                <Textarea
                    value={rawText}
                    onChange={handleTextareaChange}
                    onBlur={(e) => (e.target.value = eventos.join("\n"))}
                    className="text-sm min-h-25 rounded"
                    placeholder="Insira os número dos eventos."
                ></Textarea>

                <section className="flex flex-col"></section>
            </section>
        </>
    );
}
