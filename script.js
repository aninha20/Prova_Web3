const frm = document.querySelector("form");
const respList = document.querySelector("pre");

const numeros = []; //declara um vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    //tem como função adicionar os números escritos pelo usuário em uma lista
    const numero = frm.inNumero.value;
    numeros.push(numero); 
    console.log(numero);
    let lista = "";

    for(let i = 0; i< numeros.length; i++){
        lista += `${numeros[i]}\n`
    }
    

    //ordenando 
    const lista_ordenada = numeros.sort();


    respList.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();

})

frm.idOrganizar.addEventListener("click", () => {
    if(!frm.checkValidity()){
        alert("Por favor, insira um número antes");
        frm.inNumero.focus();
        return;
    }
    const numero = frm.inNumero.value;
    numeros.push(numero); 
    
    let lista = "";

    for(let i = 0; i< numeros.length; i++){
        lista += `${numeros[i]}\n`
    }
    
    let list = "";

    let lista_ordenada = numeros.sort();
   
    for(let i = 0; i< lista_ordenada.length; i++){
        list += `${numeros[i]}\n`
    }

    respList.innerText = lista;
    frm.inNumero.value = "";
    frm.inNumero.focus();
    
})


