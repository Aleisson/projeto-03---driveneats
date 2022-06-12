let prato;
let bebida;
let sobremesa;

function selecionarPrato(elemento) {
    prato = elemento.innerHTML;
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
        botao.setAttribute("onclick", "teste()");
    }
}

function teste() {
    alert("OI");
}

confirm.log(`${encodeURIComponent("teste")}
${encodeURIComponent("teste")}`)