let prato;
let bebida;
let sobremesa;

function selecionarPrato(elemento) {
    prato = elemento;
    const botaoClicado = document.querySelector(".selecionado");
    if (botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    fecharPedido();
}

function selecionarBebida(elemento) {
    bebida = elemento;
    const botaoClicado = document.querySelector(".bebidas .selecionado");
    if (botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }
    //alert(elemento.querySelector("p").innerHTML)
    elemento.classList.add("selecionado");
    fecharPedido();
}

function selecionarSobremesas(elemento) {
    sobremesa = elemento;
    const botaoClicado = document.querySelector(".sobremesas .selecionado");
    if (botaoClicado !== null) {
        botaoClicado.classList.remove("selecionado");
    }

    elemento.classList.add("selecionado");
    fecharPedido();
}

function fecharPedido() {
    if (prato && bebida && sobremesa) {
        const botao = document.querySelector(".botao");
        botao.classList.add("fechado");
        botao.innerHTML = "<h2>Fechar pedido";
        botao.setAttribute("onclick", "encaminhar()");
    }
}

function encaminhar() {
    let msgPrato =  prato.querySelector("p").innerHTML ;
    let msgBebida = bebida.querySelector("p").innerHTML;
    let msgSobremesa = bebida.querySelector("p").innerHTML;
    let msgTotal = Number(prato.querySelector("h3").innerHTML.replace("R$", "").replace(",", ".")) +
        Number(bebida.querySelector("h3").innerHTML.replace("R$", "").replace(",", ".")) +
        Number(sobremesa.querySelector("h3").innerHTML.replace("R$", "").replace(",", "."));
    msgTotal = msgTotal.toFixed(2);

    let msg = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${msgPrato}
    - Bebida: ${msgBebida}
    - Sobremesa: Pudim
    Total: R$ ${msgTotal}`);

    

    location.assign(`https://wa.me/?text=${msg}`);
}



