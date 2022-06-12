function selecionarPrato(elemento){
    const botaoClicado = document.querySelector(".selecionado");
    if(botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    } 

    elemento.classList.add("selecionado");
}

function selecionarBebida(elemento){
    const botaoClicado = document.querySelector(".bebidas .selecionado");
    if(botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    } 

    elemento.classList.add("selecionado");
}

function selecionarSobremesas(elemento){
    const botaoClicado = document.querySelector(".sobremesas .selecionado");
    if(botaoClicado !== null){
        botaoClicado.classList.remove("selecionado");
    } 

    elemento.classList.add("selecionado");
}