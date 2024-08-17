function calcular() {
    let preco = document.getElementById("preco")
    let forma = document.getElementById("forma_pagamento");
    let valor_pagar = document.getElementById("valor_pagar")

    /*
    Se a forma de pagamento for pix , o desconto sobre o preço do produto será de 10%. 
    Caso seja dinheiro a forma de pagamento então o desconto será de 5% .
    Caso seja o pagamento em cartão será acrescentado 5% ao preço .
     Caso não seja selecionada nenhuma das opções será apresentado uma mensagem ao usuário 
    */
    let resultado = 0

    if (forma.value == "pix") {
        resultado = preco.value * 0.9

    } else if (forma.value == "dinheiro") {
        resultado = preco.value * 0.95

    }
    else if (forma.value = "cartao") {
        resultado = preco.value * 1.05;

    }
    else {
        alert("Por favor,selecione uma forma de pagamento")
    }
    valor_pagar.value = "R$" + resultado


}

function pagamento() {
    let forma = document.getElementById("forma_pagamento");
    if (forma.value == "cartão") {
        document.getElementById("parcelas").style.display = "block"
    }
    else {

        document.getElementById("parcelas").style.display = "none"
    }

}
function parcelamento() {

    let qtd_par = document.getElementById("qtd_par")
    let valor_par = document.getElementById("valor_par")
    let valor_pagar = document.getElementById("valor_pagar")


    switch (qtd_par.value) {
        case "1":
            valor_par.value=valor_pagar.value.substring(2,10)
break 
        case "2":


            valor_par.value=valor_pagar.value.substring(2,10)/2
            break

        case "3":

           valor_par.value=valor_pagar.value.substring(2,10)/3

            break

        case "4":
            valor_par.value=valor_pagar.value.substring(2,10)/4
            break

    }


}