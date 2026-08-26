import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinalizarEventos from "../FinalizarEventos";
import { Home, BookCheck, UserRoundPlus } from "lucide-react";
import Welcome from "../Welcome";

export default function App() {
      const MenusList = [
            { icon: <Home />, value: "home", render: (<Welcome />) },
            {
                  icon: <BookCheck />,
                  value: "finalizarEvento",
                  render: (<FinalizarEventos />),
            },
      ];

      return (
            <Tabs  className="w-full">

                  <TabsList className="w-full flex justify-center items-center">
                        {MenusList.map((m)=> (
                              <TabsTrigger key={m.value} value={m.value}>{m.icon}</TabsTrigger>
                        ))}
                  </TabsList>

                  {MenusList.map((m)=>{(
                        <TabsContent key={m.value.concat("_content")} value={m.value}>{m.render}</TabsContent>
                  )})}
            </Tabs>
      );
}
