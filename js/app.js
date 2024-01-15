
function comprar() {
    let tipo = document.getElementById ('tipo-ingresso').value;
    let quantidade = document.getElementById ('qtd').value;
    let lista = document.getElementById ('lista');
    let selecaoLista = lista.split ("qnt")[1];
    
    alert (lista.value);

}