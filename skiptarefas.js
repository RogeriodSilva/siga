const codigos = ["2025-00724",
  "2025-00605", "2025-00595", "2025-00507", "2025-00504", "2025-00473",
  "2025-00451", "2025-00427", "2025-00398", "2025-00308", "2025-00200",
  "2025-00193", "2025-00172", "2025-00137", "2025-00128", "2025-00024",
  "2025-00021", "2025-00018", "2025-00017"
];

let index = 0

const Inputs = (e) => {
    [
        {condi: e.ctrlKey && e.key.toLowerCase() === 'b', func: ()=>{}}
    ].map((input) => {
        if(input.condi) input.func()
    })
}

function executeThis(){
    parent.ebfFlowExecute('Consulta Cronograma do Evento - Evento Ao Modificar', parent.ebfListParamsCreate(codigos[index]));
    
    let elemento = document.querySelector('#select2-evento_select-results li')
    
    if (elemento) {
      elemento.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
      elemento.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
      elemento.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    
    const table = document.querySelector('#tabela_cronograma_evento')
    const tarefa = Array.from(table.querySelectorAll("tr")).filter((tr)=> Array.from(tr.querySelectorAll("td")).find(td => td.textContent.includes("Vistoria de Qualidade")))[0]
    const action = tarefa.querySelector('a[title="Ver usuário(s) da tarefa"]')
    
    action.click()
     index++;
}

document.addEventListener('keydown',(event)=>{
    if(event.ctrlKey && event.key.toLowerCase() === 'b'){
        executeThis()
    }
})