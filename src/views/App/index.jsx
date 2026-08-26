import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FinalizarEventos from "../FinalizarEventos";
import { Home, BookCheck, UserRoundPlus } from "lucide-react";

export default function App() {
      return (
            <Tabs defaultValue="home" className="w-full">
                  <TabsList className="w-full flex justify-center items-center">
                        <TabsTrigger value="home">
                              <Home />
                        </TabsTrigger>
                        <TabsTrigger value="finalizar_eventos">
                              <BookCheck />
                        </TabsTrigger>
                        <TabsTrigger value="inserir_tarefas">
                              <UserRoundPlus />
                        </TabsTrigger>
                  </TabsList>

                  <TabsContent value="finalizar_eventos">
                        <FinalizarEventos />
                  </TabsContent>
                  <TabsContent value="home">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quaerat, sapiente saepe non tempora repudiandae
                        culpa ut ab pariatur atque esse dignissimos iste ad vel
                        nihil omnis ex dolorem iusto voluptate?
                  </TabsContent>

                  <TabsContent value="inserir_tarefas">
                        <div className="flex flex-col space-y-4 p-2">
                              <h1>Inserir nas tarefas</h1>
                              <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quo quia expedita, itaque,
                                    quam, molestias debitis adipisci nesciunt
                                    quae repellat consequatur sed assumenda.
                                    Iusto, est libero obcaecati adipisci odio
                                    sunt rerum.
                              </p>
                              <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quo quia expedita, itaque,
                                    quam, molestias debitis adipisci nesciunt
                                    quae repellat consequatur sed assumenda.
                                    Iusto, est libero obcaecati adipisci odio
                                    sunt rerum.
                              </p>
                        </div>
                  </TabsContent>
            </Tabs>
      );
}
