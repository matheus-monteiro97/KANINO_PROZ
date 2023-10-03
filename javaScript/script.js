$(document).ready(function(){
    $(`.carousel`).slick({
        //slidesToShow: 1, // Quantidade de itens visíveis ao mesmo tempo
        //slidesToScroll: 3, // Quantidade de itens a serem rolados
        autoplay: true, // Ativar o modo de reprodução automática
        autoplaySpeed: 3000, // Intervalo de tempo entre os slides (em milissegundos)
    });
});

function guardarValor() {
    var inputElement = document.getElementById("meuInput");
    var inputElement2 = document.getElementById("meuInput2");
    var valorInput = inputElement.value;
    var valorinput2 = inputElement2.value;
    var meuValor = valorInput + " - " + valorinput2;
    alert("Valor inserido: " + meuValor);
}
