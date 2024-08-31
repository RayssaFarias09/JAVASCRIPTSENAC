function array1() {
    let cidades = ["São Paulo", "Osasco", "Suzano", "Botucatu", "Campinas"]
    // exibir a quantidade de elementos do array
    console.log(cidades.length)
    // exibir os elementos do array
    console.log(cidades)
}
function array2() {
    let cidades = ["São Paulo", "Osasco", "Suzano", "Botucatu", "Campinas"]
    // vamos exibir a primeira e a última cidade
    console.log(cidades[0])
    console.log(cidades[cidades.length - 1])

}
function array3() {
    let frutas = []

    let opt = 1
    while (opt == 1) {
        opt = prompt("Digite:\n1-Para adicionar uma nova fruta\n2-Sair")
        // o comando break faz a parada da execução do while
        if (opt == 2) {
            break
        }
        let f = prompt("Digite o nome da fruta")
        // vamos usar o comando push(empurrar) para adicionar
        // a nova fruta ao array frutas
        frutas.push(f)
        console.log(frutas)
    }





    console.log(frutas)

}