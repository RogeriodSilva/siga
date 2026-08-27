import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useChromeStorage from "@/hooks/useChromeStorage";
import { BookCheck, Menu, User } from "lucide-react";
import FEvento from "../FEvento";

export default function App() {
    const { tab, frames, name } = useChromeStorage("currentTab");

    const MenuList = [
        { value: "home", icon: <Menu />, render: <>Oi</> },
        { value: "teste", icon: <User />, render: <>Oi</> },
        { value: "fevento", icon: <BookCheck />, render: <FEvento /> },
    ];

    return (
        (tab && tab.url.includes("arcoconsultoria") && (
            <div className="select-none flex flex-col space-y-2 w-full">
                <Tabs defaultValue="home" className="w-full">
                    <div className="flex space-x-4 mb-4">
                        <Navbar />
                        <TabsList className="w-full">
                            {MenuList.map((m) => (
                                <TabsTrigger key={m.value} value={m.value}>
                                    {m.icon}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {MenuList.map((m) => (
                        <TabsContent key={`${m.value}`} value={m.value}>
                            {m.render}
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        )) || <Loading text="Aguardando a janela do sistema SIGA..." />
    );
}
