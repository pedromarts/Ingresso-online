
function comprar() {
    let tipo = document.getElementById ('tipo-ingresso');
    let qtd = parseInt(document.getElementById ('qtd').value);
    if (tipo.value == 'pista'){
        comprarPista (qtd);

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