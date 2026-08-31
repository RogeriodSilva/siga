import Button from "@/components/Button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function FinalizarEvento() {

      const [events, setEvents] = useState([])

      const handleTextareaChange = (e)=>{
            setEvents([...new Set(Array.from(e.target.value.split('\n')).filter(e => /^\d{4}-\d{5}$/.test(e)))])
      }

      const handleExecuteEvent = (e)=>{
            if(events.length > 0){

            }
      }

      return (
            <>
                  <section className="flex flex-col space-y-2">
                        <Button onClick={handleExecuteEvent} variant="primary">Finalizar Eventos</Button>
                        <Textarea onBlur={handleTextareaChange} className="text-sm min-h-25 rounded" placeholder="Insira os número dos eventos."></Textarea>
                        
                        <section className="flex flex-col">

                        </section>
                  </section>
            </>
      );
}
