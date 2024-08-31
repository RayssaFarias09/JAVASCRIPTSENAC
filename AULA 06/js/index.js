function array1() {
    let cidades = ["São paulo", "Osasco", "Suzano", "Botucatu", "Campinas"]
    // Exibir a quantidade de elementos do array
    console.log(cidades.length)
    //Exibir os elementos  do array 
    console.log(cidades)

}

function array2() {
    let cidades = ["São paulo", "Osasco", "Suzano", "Botucatu", "Campinas"]
    // Vamos exibir a primeira e a ultima cidade
    console.log(cidades[0])
    console.log(cidades[cidades.length - 1])

}


function array3() {

    let frutas = []

    let opt = 1
    while (opt == 1) {

        opt = prompt("Digite:\n1-Para adicionar uma nova fruta\n2-Sair")
        // O comando break faz a arada da exeução do while
        if (opt == 2) {

            break
        }

        let f = prompt("Digite o nome da fruta ")

        // Vamos usar o comando push (empurrar),
        //para adicionar a nova fruta ao "array frutas". 

        frutas.push(f)

        document.getElementById("saida").innerHTML = frutas


    }

}

function array4() {
    let anobissexto = []
    for (let i = 1930; i <= 2024; i++) {
        if (i % 4 == 0) {
            anobissexto.push(i)
        }

    }

    document.getElementById("saida").innerHTML = anobissexto

}


function array5() {

    let n = [13, 21, 16, 4, 58, 111, 27, 38]
    let pares = []
    for (let i = 0; i <= n.length - 1; i++) {

        if (n[i] % 2 == 0) {
            pares.push(n[i])

        }
    }
    document.getElementById("saida").innerHTML = pares
}

function array6() {

    let a1 = [0, 45, 8, 13,87, 50]

    let a2 = [17, 10, 8, 15, 45, 50, 110, 30]





let a3 = []

for (let i = 0; i <= a1.length - 1; i++) {

    for (let n = 0; n <= a2.length - 1; n++) {
        if (a1[i] == a2[n]) {

            a3.push(a1[i])
            break
        }
    }
}
document.getElementById("saida").innerHTML= a3

}