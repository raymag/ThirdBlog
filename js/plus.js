// Sistema de Transição de POSTS da página plus
var count = 1; //Contador de páginas

function pass(command){ //0 Caso o usuário queira voltar e 1 para avançar
  if (command==0){
    if(count > 1){
      count--
    }
    switch(count){
    case 1: //Página 1
    document.getElementById('title-1').innerHTML = "P1";
    break;
    case 2://Página 2
    document.getElementById('title-1').innerHTML = "P2"
    break;
  }
  }
  else{
    if(count<3){//Máximo de Páginas
    count++;
  }
    switch(count){
    case 2://Página 2
    document.getElementById('title-1').innerHTML = "P2";
    break;
    case 3:
    document.getElementById('title-1').innerHTML = "P3";
    break
  }
}
}
