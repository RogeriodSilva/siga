import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinalizarEventos from "../FinalizarEventos";
import { BookCheck } from "lucide-react";
import { useState } from "react";
import Loading from "../Loading";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
      const [local, setLocal] = useLocalStorageState("localStorage", {
            defaultValue: {},
      });

      chrome.tabs.onActivated.addListener(async ({ tabId }) => {
            const tab = await chrome.tabs.get(tabId);
            setLocal({ tab });
      });

      return (
            <>
                  <Loading></Loading>
            </>
      );

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
