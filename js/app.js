
function comprar() {
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);
    if (tipo.value == 'pista'){
        comprarPista (qtd);
    } else if (tipo.value == 'superior'){
        comprarSuperior(qtd);
    } else{
        comprarInferior (qtd);
    }
}

function comprarPista (qtd){
    let qtdPista = parseInt(document.getElementById ('qtd-pista').textContent);

    if (qtd > qtdPista){
        alert (' Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd; //esse é apenas o cálculo
        document.getElementById ('qtd-pista').textContent = qtdPista; // aqui é para atualizar a página, levar o valor
        alert ('Compra realizada com sucesso')
    }

}

function comprarSuperior (qtd){
    let qtdSuperior= parseInt(document.getElementById ('qtd-superior').textContent);

    if (qtd > qtdSuperior){
        alert (' Quantidade indisponível para tipo Superior');
    } else {
        qtdSuperior= qtdSuperior - qtd; //esse é apenas o cálculo
        document.getElementById ('qtd-superior').textContent = qtdSuperior; // aqui é para atualizar a página, levar o valor
        alert ('Compra realizada com sucesso')
    }

}

function comprarInferior (qtd){
    let qtdInferior= parseInt(document.getElementById ('qtd-inferior').textContent);

    if (qtd > qtdInferior){
        alert (' Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior= qtdInferior - qtd; //esse é apenas o cálculo
        document.getElementById ('qtd-inferior').textContent = qtdInferior; // aqui é para atualizar a página, levar o valor
        alert ('Compra realizada com sucesso')
    }

}