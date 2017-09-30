// Sistema de Transição de POSTS da página plus
var count = 1; //Contador de páginas

function pass(command){ //0 Caso o usuário queira voltar e 1 para avançar
  if (command==0){
    if(count > 1){
      count--
    }
    switch(count){
    case 1: //Página 1
    document.getElementById('title-1').innerHTML = "<a href='posts/UP-1-1.html' class='lpost'>#UP-1: Improvement Pill</a>";
    document.getElementById('body-1').innerHTML = "Sentado no computador, me veio em mente. Por que não fazer uma série de posts falando sobre canais do youtube que falam sobre psicologia, ou de pequenos hacks que podem fazer a diferença na nossa vida... <a href='posts/UP-1-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-1').innerHTML = "Publicado em: 25/09/2017 por CMag";

    document.getElementById('title-2').innerHTML = "<a href='posts/UP-2-1.html' class='lpost'>#UP-2: Practical Psychology</a>";
    document.getElementById('body-2').innerHTML = " Continuando a nossa série de Canais para Desenvolvimento Pessoal: Trouxemos o 'Practical Psychology', canal da qualeu pessoalmente admiro muito. Possuí diversos vídeos, todos bem fundamentados e elaborados... O que é perfeito para os interessados em self-development. Portanto, não podia deixar de trazê-lo para esta nossa série. Logo, para quem tiver interesse, recomendo...<a href='posts/UP-2-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-2').innerHTML = "Publicado em: 25/09/2017 por CMag";
    break;
    case 2://Página 2
    document.getElementById('title-1').innerHTML = "<a href='posts/UP-3-1.html' class='lpost'>#UP-3: Freedom in Thought</a>";
    document.getElementById('body-1').innerHTML = "OPA! Saudações para todos os nossos leitores, desta vez temos o Freedom in Thought na nossa seleção de canais para self-development... <a href='posts/UP-3-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-1').innerHTML = "Publicado em: 30/09/2017 por CMag";

    document.getElementById('title-2').innerHTML = "<a href='posts/UP-4-1.html' class='lpost'>#UP-4: The School of Life</a>";
    document.getElementById('body-2').innerHTML = "Saudações a todos os leitores!! Chegamos em fim ao nosso QUARTO post desta <del>amada</del> série de postagens, e desta vez com um canal bastante conhecido. O 'The School of Life'... <a href='posts/UP-4-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-2').innerHTML = "Publicado em: 30/09/2017 por CMag";
    break;
  }
  }
  else{
    if(count<2){//Máximo de Páginas
    count++;
  }
    switch(count){
    case 2://Página 2
    document.getElementById('title-1').innerHTML = "<a href='posts/UP-3-1.html' class='lpost'>#UP-3: Freedom in Thought</a>";
    document.getElementById('body-1').innerHTML = "OPA! Saudações para todos os nossos leitores, desta vez temos o Freedom in Thought na nossa seleção de canais para self-development... <a href='posts/UP-3-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-1').innerHTML = "Publicado em: 30/09/2017 por CMag";

    document.getElementById('title-2').innerHTML = "<a href='posts/UP-4-1.html' class='lpost'>#UP-4: The School of Life</a>";
    document.getElementById('body-2').innerHTML = "Saudações a todos os leitores!! Chegamos em fim ao nosso QUARTO post desta <del>amada</del> série de postagens, e desta vez com um canal bastante conhecido. O 'The School of Life'... <a href='posts/UP-4-1.html' class='lpost'>Ver Mais</a>";
    document.getElementById('date-2').innerHTML = "Publicado em: 30/09/2017 por CMag";
    break;
    case 3:
    document.getElementById('title-1').innerHTML = "P3";
    break
  }
}
}
