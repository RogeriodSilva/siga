import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinalizarEventos from "../FinalizarEventos";
import { BookCheck } from "lucide-react";
import { useState } from "react";
import Loading from "../Loading";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
      const [items, setItems] = useState(["Comprar leite", "Estudar React"]);
      const [line, setLine] = useState("");

      const addItem = (item) => {
            setItems([...items, item]);
      };

      const submitTarefa = () => {
            if (line.trim() === "") return;
            addItem(line);
            setLine("");
      };

      return (
            <div>
                  <textarea
                        value={line}
                        onChange={(e) => setLine(e.target.value)}
                  ></textarea>

                  <button
                        onClick={submitTarefa}
                        className="mb-4 rounded-lg border px-4 py-2"
                  >
                        Adicionar
                  </button>

                  <div className="flex flex-col space-y-1">
                        {items.map((e, index) => (
                              <span key={index}>{e}</span>
                        ))}
                  </div>
            </div>
      );

      // const [local, setLocal] = useLocalStorageState("localStorage", {
      //       defaultValue: {},
      // });

      // chrome.tabs.onActivated.addListener(async ({ tabId }) => {
      //       const tab = await chrome.tabs.get(tabId);
      //       setLocal({ tab });
      // });

      // return (
      //       <>
      //             <Loading></Loading>
      //       </>
      // );

      // const MenusList = [
      //       // { icon: <Home />, value: "home", render: <Welcome /> },
      //       {
      //             icon: <BookCheck />,
      //             value: "finalizarEvento",
      //             render: <FinalizarEventos />,
      //       },
      // ];

      // return (
      //       <Tabs defaultValue="home" className="w-full">
      //             <TabsList className="w-full flex justify-center items-center">
      //                   {MenusList.map((m) => (
      //                         <TabsTrigger key={m.value} value={m.value}>
      //                               {m.icon}
      //                         </TabsTrigger>
      //                   ))}
      //             </TabsList>

      //             {MenusList.map((m) => (
      //                   <TabsContent key={`${m.value}_content`} value={m.value}>
      //                         {m.render}
      //                   </TabsContent>
      //             ))}
      //       </Tabs>
      // );
}
