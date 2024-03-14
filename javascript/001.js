function caractere(but){
    let bot=but.value

    let texto=document.getElementById("cacul")
    
texto.value+=bot   

    

}
function apagar(){
    let texto=document.getElementById("cacul")
    let caixatexto=texto.value;

    if(caixatexto.length>0){
        //substring => comando para extrair parte de uma string sem modificar a versão original //
        let novastring=caixatexto.substring(0,caixatexto.length-1)
        texto.value=novastring;
    }
}
function calcular(){
    let caracteretex=document.getElementById("cacul")
    let tex=caracteretex.value
    let resul=eval(tex)
    caracteretex.value=resul;
    
    

    




}

