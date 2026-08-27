import { useEffect, useState } from "react";

export default function useChromeStorage(storageKey) {
    //Armazenamento em state para que o React possa tratar a informação da forma correta.
    const [data, setData] = useState({});

    //Inicializa assim que for instancia a function
    useEffect(() => {
        //Valida se existe algum dado armazendo já no localstorage do Chrome.
        chrome.storage.local.get([storageKey]).then((result) => {
            if (result[storageKey]) {
                setData(result[storageKey]);
            }
        });

        //Evento para que possa ser acionado assim que o localstorage mudar.
        const listener = (changes, namespace) => {
            if (namespace === "local" && changes[storageKey]) {
                setData(changes[storageKey].newValue);
            }
        };

        //Conectar ao evento criado acima.
        chrome.storage.onChanged.addListener(listener);

        //Mata o evento assim que termina de usar.
        return () => chrome.storage.onChanged.removeListener(listener);
    }, [storageKey]);

    //Retorna o(s) valor(es) de acordo com storageKey
    return data;
}
