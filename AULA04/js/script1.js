for(let i=1; i <= 6 ; i++){
document.getElementById("fotos").innerHTML +="<img src=IMG/FOTO"+i+".jpg>"

}

for(let i =1; i <= 6 ; i++){
  document.getElementById("select_foto").innerHTML+="<option value=FOTO"+ i+ ">  FOTO"+i+"</option>"
}
function abrirFOTO()
{
 let foto= document.getElementById("select_foto")   


 //vamos Abrir uma nova guia no navegador 
 //O primeiro parâmetro do comando window.open é a url
 //, ou seja , a página que será aberta. No nosso caso ,passamos 
 //o caminho da imagem pra abrir. O segundo parâmetro 
 //é onde a imagem deve abrir . Escolhemos,para abrir em uma guia 
 //chamada "exibir ". Mas se você quiser , é possivel 
 //abrir uma guia_blank. Assim o navegador irá abrir uma nova
 //guia para cada página criada.


 window.open("IMG/"+foto.value +".jpg","_exibir")


}
