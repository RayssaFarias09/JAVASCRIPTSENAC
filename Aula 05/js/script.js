function verificarcpf(){
let cpf = document.getElementById("cpf")
let msg = document.getElementById("msg")
// verificar se a caixa do cpf está preenchida.
//Caso esteja vazia , exibir uma mensagem 
// para o preenchimento .

if ( cpf.value==""){
    return msg.innerHTML= "Você deve preencher o CPF"

}
let peso10 = 10; //utlizar na primeira parte do calculo
let peso11 = 11; // utlizar na segunda parte do calculo 
let resto = 0; // utlizada para guardar o resto da divisão 
let resultado = 0; 
/*
A variavel cpf_calc foi criada para guaradar os 9 primeiros digitos e realizar os calculos necessários.
utlizamos  o comando substring para quebrar os digitos do cpf, que são, em 9 digitos.
No substring ,o primeiro valor refere-se 
a posição em que começa  a pegar os digitos. 
Já  o segundo valor diz respeito a quantidade de digitos que  queremos pegar .
portanto , pegamos da posição zero(0) a quantidade de 9 números.
*/



let cpf_calc = cpf.value.substring(0,9);
for (let i = 0; i < 9 ; i++){
resultado+=cpf_calc[i] * peso10;
peso10--;



}

resto= resultado % 11;
if (resto < 2 ){
    cpf_calc += 0
}
else{
cpf_calc += 11 - resto 


}


 resultado = 0


for (let i = 0; i < 10 ; i++){
    resultado+=cpf_calc[i] * peso11;
    peso11--;
    
    
    
    }
    
    resto= resultado % 11;
    if (resto < 2 ){
        cpf_calc += 0
    }
    else{
    cpf_calc += 11 - resto 
    
    
    }
    
if (cpf_calc == cpf.value){

msg.innerHTML="CPF Válido"
}

else {

    msg.innerHTML ="CPF Iválido"

}

}









