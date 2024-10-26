

const nome = document.getElementById("txtnome")
const email = document.getElementById("txtemail")
const telefone = document.getElementById("txttelefone")
const endereco = document.getElementById("txtendereco")
const idade = document.getElementById("txtidade")
let idcli = 0

// fazer uma referencia ao botão salvar 
const btnsalvar = document.getElementById("Salvar")

const btnatualizar = document.getElementById("btnatualizar")
//referencia do botão cadastrar cliente 
const btncadastrar = document.getElementById("btncadastrar")
//Quando clicar no botão cadastrar cliente 
//o botão atualizar do modal deve desaparecer .


//Vamos aplicar um estilo css de display none
btncadastrar.onclick = () => {
  btnatualizar.style.display = "none"
  btnsalvar.style.display = "block"
}





btnsalvar.onclick = () => {


  /**
   Para Realizar o cadastro de um novo cliente , iremos usar o comando fetch(buscar),
   Para localizar uma url com endpoint cadastrar.
   passar como parâmetro o método  post e
    dados do formulário para api de cadastro de cliente.
   */

  fetch("http://10.26.49.20:3000/cadastrar",
    {
      method: "POST",
      headers: {
        "accept": "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        nome: nome.value,
        email: email.value,
        endereco: endereco.value,
        telefone: telefone.value,
        idade: idade.value
      })
    })
    .then((resposta) => resposta.json())
    .then((rs) => alert(rs.msg))
    .catch((error) => console.error(`Erro na api -> ${error}`))

  window.location.reload
}
const lista = document.getElementById("lista")
//Quando 0 documento carregar ,´ja deve montar a lista de clientes 
//na tela 
document.body.onload = () => {

  fetch("http://10.26.49.20:3000/listar")
    .then((resposta) => resposta.json())
    .then((rs) => {
      let saida = ""
      rs.dados.map((cli) => {
        saida += `<div class="card col-3" >
               <img src=https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png class="card-img-top tamanho" alt="...">
               <div class="card-body">
                 <h5 class="card-title"><center>${cli.nome}</center></h5>
                 <p class="card-text"></p>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">E-mail: ${cli.email}</li>
                 <li class="list-group-item">Telefone: ${cli.telefone}</li>
                 <li class="list-group-item">End: ${cli.endereco}</li>
                 <li class="list-group-item">Idade: ${cli.idade}</li>
               </ul>
               <div class="card-body">
                 <a href="#" class="btn btn-danger" onclick=apagar(${cli.idcliente})>Excluir</a>
                 <a href="#" class="btn btn-info"data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="atualizar(${cli.idcliente},'${cli.nome}','${cli.endereco}','${cli.telefone}','${cli.email}',${cli.idade})">Atualizar</a>
               </div>
             </div>`
      })
      lista.innerHTML = saida
    })
    .catch((error) => console.error(`Erro na api -> ${error}`))
}



function apagar(id) {
if(confirm("Você deseja realmente apagar?")==1){
 fetch(`http://10.26.49.20:3000/apagar/${id}`, {
    method: "DELETE",
    headers: {
      "accept": "application/json",
      "content-type": "application/json"
    }
  })
    .then((resposta) => resposta.json())
    .then((rs) => {


      if (rs.msg == "Apagou") {
        alert(`O cliente de id: ${id} foi apagado com sucesso `)
        window.location.reload()
      }
      else {
        alert(`Não foi possivel apagar o cliente de id : ${id}/n veja o erro abaixo :\n${rs.msg}`)
      }

    })
    .catch((error) => console.error(`Erro ao carregar a api ${error}`))

}
else{
  return alert("não apagou")
}


  
}
function atualizar(id, no, en, te, em, ida) {
  btnsalvar.style.display = "none"
  btnatualizar.style.display = "block"


  console.log(`${id}\n${no}\n${en}\n${te}\n${em}\n${ida}`)
  nome.value = no
  email.value = em
  telefone.value = te
  endereco.value = en
  idade.value = ida
  idcli = id
}
// Vamos aplicar a função de atualizar os dados do formulario
//ao botão atualizar do modal.
btnatualizar.onclick = () => {

if (confirm("Você realmente quer atualizar ? ")==1){
  fetch(`http://10.26.49.20:3000/atualizar/${idcli}`, {
    method: "PUT",
    headers: {
      "accept": "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
      endereco: endereco.value,
      idade: idade.value
    })
  })
  .then((resposta)=>resposta.json())
  .then((rs)=>{
if(rs.msg=="Atualizado"){
alert(`O Cliente ${nome.value} foi atualizado com sucesso!`)
window.location.reload()
}else{
  alert(`Não foi possivel atualizar o cliente ${nome.value}\n veja o que aconteceu:\n${rs.msg}`)
}
  })
  .catch((er)=> console.error(`Erro ao carregar a api ${er}`))
}
else{
  return
}

}




 