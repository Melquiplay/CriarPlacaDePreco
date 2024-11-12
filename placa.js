textoEmFoco = 'NomeDoProduto'

document.getElementById('imageUpload').addEventListener('change', function(event) {
        
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
      const imgElement = document.querySelector('.divImgProduto img');
      imgElement.src = e.target.result;
      }
      reader.readAsDataURL(file);
  }
  
  image = document.querySelector('.divImgProduto');
  checkb = document.querySelector(".ativarimage");
  if (checkb.checked == false){
      checkb.checked = true
      image.style.display = "block"
  }
  });

function moedas(){ const selectedRadio = document.querySelector('input[name="moeda"]:checked');
    if (selectedRadio.parentElement.querySelector('label').textContent == "(R$) Real"){
      document.querySelector(".preco").innerHTML = "R$;"
    } else if(selectedRadio.parentElement.querySelector('label').textContent == "(€) Euro"){
      document.querySelector(".preco").innerHTML = "€;"
    }else if(selectedRadio.parentElement.querySelector('label').textContent == "($) Dolar"){
      document.querySelector(".preco").innerHTML = "$;"
    }
  }
  document.addEventListener('DOMContentLoaded',function(){const radios = document.querySelectorAll('input[name="moeda"]');
  radios.forEach(function(radio) { radio.addEventListener('change', moedas); }); });

moedaStatu = false
imagemjanela = false
function moeda(){
  if (moedaStatu){
    document.querySelector(".moeda").style.display = "none";
  }else{
    document.querySelector(".moeda").style.display = "block";
  }
  moedaStatu = !moedaStatu;
}

function imagemconfig(){
  if (imagemjanela){
    document.querySelector(".controleImg").style.display = "none";
    document.querySelector("#addImg").style.display = "block";
  }else{
    document.querySelector(".controleImg").style.display = "block";
    document.querySelector("#addImg").style.display = "none";
  }
  imagemjanela = !imagemjanela;
}

function EmFoco(foco){

  textoEmFoco = foco;
  if (foco == "tipoDeProduto"){
    retorno = "Tipo De Produto"
  }else if(foco == "NomeDoProduto"){
    retorno = "Destaque"
  }
  else if(foco == "descricao"){
    retorno = "Descrição"
  }
  else if(foco == "imagemProduto"){
    retorno = "Imagem"
  }
  alterar = document.querySelectorAll(".AManipular");
  alterar.forEach(altera => {
      altera.innerHTML = retorno;
  });
}

function check(){

  ativarimage = document.querySelector('.ativarimage');
  camada = document.querySelector('.camada');
  image = document.querySelector('.imgproduto');
  divimage = document.querySelector('.divImgProduto');
  linha = document.querySelector(".linha");
  linhachange = document.querySelector(".divLinha");

  if (camada.checked){
    divimage.style.zIndex = "3";
  }else{
    divimage.style.zIndex = "1";
  }
  if (ativarimage.checked){
    divimage.style.display = "block";
  }else{
    divimage.style.display = "none";
  }
  if (linha.checked){
    linhachange.style.display = "block";
  }else{
    linhachange.style.display = "none";
  }
}



function atualizarImagem(){
  image = document.querySelector('.divImgProduto');
  opcoesImage = document.querySelector('#opcoesImage');

  checkb = document.querySelector(".ativarimage");
  if (checkb.checked == false){
    checkb.checked = true
    image.style.display = "block"
  }

  switch (opcoesImage.value){
    case "banana":
      image.innerHTML = "<img src='./image/produtos/hortifruti/banana.png' alt=''>"
    break;
    case "alho":
      image.innerHTML = "<img src='./image/produtos/hortifruti/alho.png' alt=''>"
    break;
    case "beterraba":
      image.innerHTML = "<img src='./image/produtos/hortifruti/beterraba.png' alt=''>"
    break;
    case "cebola":
      image.innerHTML = "<img src='./image/produtos/hortifruti/cebola.png' alt=''>"
    break;
    case "cenoura":
      image.innerHTML = "<img src='./image/produtos/hortifruti/cenoura.png' alt=''>"
    break;
    case "laranja":
      image.innerHTML = "<img src='./image/produtos/hortifruti/laranja.png' alt=''>"
    break;
    case "maca":
      image.innerHTML = "<img src='./image/produtos/hortifruti/maca.png' alt=''>"
    break;
    case "manga":
      image.innerHTML = "<img src='./image/produtos/hortifruti/manga.png' alt=''>"
    break;
    case "pimentao":
      image.innerHTML = "<img src='./image/produtos/hortifruti/pimentao.png' alt=''>"
    break;
    case "repolho":
      image.innerHTML = "<img src='./image/produtos/hortifruti/repolho.png' alt=''>"
    break;
    case "tomate":
      image.innerHTML = "<img src='./image/produtos/hortifruti/tomate.png' alt=''>"
    break;
    case "chuchu":
      image.innerHTML = "<img src='./image/produtos/hortifruti/chuchu.png' alt=''>"
    break;
    case "batatadoce":
      image.innerHTML = "<img src='./image/produtos/hortifruti/batataDoce.png' alt=''>"
    break;
    case "pepino":
      image.innerHTML = "<img src='./image/produtos/hortifruti/pepino.png' alt=''>"
    break;
    case "limao":
      image.innerHTML = "<img src='./image/produtos/hortifruti/limao.png' alt=''>"
    break;
    case "melao":
      image.innerHTML = "<img src='./image/produtos/hortifruti/melao.png' alt=''>"
    break;
    case "cebolaroxa":
      image.innerHTML = "<img src='./image/produtos/hortifruti/cebolaRoxa.png' alt=''>"
    break;
  }
}


paragraf = true
function paragrafo(){
  if (paragraf){
    document.querySelector('.manipulacaoText').style.display = 'block'
    document.querySelector('#paragrafotxt').style.display = 'none'
    document.querySelector('#paragrafox').style.display = 'block'
    paragraf = false;
  }else{
    document.querySelector('.manipulacaoText').style.display = 'none'
    document.querySelector('#paragrafotxt').style.display = 'block'
    document.querySelector('#paragrafox').style.display = 'none'
    paragraf = true;
  }
}
function gerar(){

  
    tipo = document.getElementById('itipoDeProduto');
    produto = document.getElementById('iNomeDoProduto');
    descrição = document.getElementById('idescricao');
    kilo = document.getElementById('kg');
    const valor = document.getElementById('iValorDoProduto');
    const Virgula = valor.value.indexOf(',');
    if (Virgula < 1){
      alert('você esqueceu de colocar o valor ou a vírgula! Coloque uma virgula para separar o valor em Reais dos Centavos, Exemplo: 10,99')
   }
    document.getElementById('tipoDeProduto').innerHTML = tipo.value;
    document.getElementById('NomeDoProduto').innerHTML = produto.value;
    document.getElementById('descricao').innerHTML = descrição.value;
    document.getElementById('centavos').innerHTML = valor.value.replace(',','').substring(Virgula);
    document.getElementById('Reais').innerHTML = valor.value.substring
    (0, Virgula);
    document.getElementById('peso').innerHTML = kilo.value;
    opcoes = document.getElementById('opcoes');
    switch (opcoes.value){
      case "a1":
        document.getElementById('tpromoção').style.display = "none"
        document.querySelector(".divCab").style.display = "block"
        document.querySelector(".divCab").innerHTML = "<img src='./image/geradorDePreco/promocaoCab.png' alt=''>"
        break;
      case "a2":
        document.querySelector(".divCab").style.display = "block"
        document.querySelector(".divCab").innerHTML = "<img src='./image/geradorDePreco/ofertaCab.png' alt=''>"
        document.getElementById('tpromoção').style.display = "none"
        break;
      case "a3":
        document.querySelector(".divCab").style.display = "none"
        document.getElementById('tpromoção').style.display = "block"
        document.getElementById('promocao').innerHTML = "PROMOÇÃO"
        break;
      case "a4":
        document.querySelector(".divCab").style.display = "none"
        document.getElementById('tpromoção').style.display = "block"
        document.getElementById('promocao').innerHTML = "OFERTA"
        document.getElementById('promocao').style.cssText = 'font-size: 65px; padding: -10 '
        break;
      case "b1":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Anton, sans-serif'
        break;
      case "b14":
        texto = document.getElementById("NomeDoProduto")
        texto.style = 'font-family: "Nerko One", cursive; font-weight: 400; font-style: normal;'
        break;
      case "b15":
        texto = document.getElementById("NomeDoProduto")
        texto.style = 'font-family: "Oleo Script", system-ui;font-weight: 700; font-style: normal;'
        break;
      case "b2":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Cedarville Cursive, cursive'
        break;
      case "b3":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Chelsea Market, cursive'
        break;
      case "b4":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Courier Prime, monospace'
        break;
      case "b5":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Hanalei Fill, cursive'
        break;
      case "b6":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Metal Mania, cursive'
        break;
      case "b7":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Caveat Brush, cursive'
        break;
      case "b8":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Righteous, cursive'
        break;
      case "b9":
        document.getElementById("perscor").innerHTML = "<br><input class='cor' onchange=mudarcor3() id=cor3 type=color>Cor da descrição! <br>"
        break;
      case "b10":
        document.getElementById("perscor").innerHTML = "<br><input class='cor' onchange=mudarcor2() id=cor2 type=color>Cor do tipo de produto! <br>"
        break;  
      case "b11":
        document.getElementById("perscor").innerHTML = "<br><input class='cor' onchange=mudarcor() id=cor type=color>Cor do nome do produto <br>"
        break;
      case "b12":
        document.getElementById("perscor").innerHTML = "<br><input class='cor' onchange=mudarcor4() id=cor4 type=color>Cor do valor do produto <br>"
        break;
      case "c3":
        base = document.getElementById("base");
        document.querySelector(".divimg").style.display = "none";
        document.querySelector("#base").style.display = "block";
        base.style.borderRadius = "70px";
        break;
      case "c2":
        base = document.getElementById("base");
        base.style.display = "block";
        base.style.borderRadius = "0px";
        document.querySelector(".divimg").style.display = "none"; 
        break;
      case "c7":
        document.querySelector(".divimg").style.display = "block";
        document.getElementById("base").style.display = "none";
        document.querySelector(".divimg").innerHTML = "<img class='baseimg' src='./image/geradorDePreco/baseComPontasmelquitech.png' alt=''>"
        break;
      
      case "c6":
        document.querySelector(".divimg").style.display = "block";
        document.getElementById("base").style.display = "none";
        document.querySelector(".divimg").innerHTML = "<img class='baseimg' src='./image/geradorDePreco/basepintura.png' alt=''>"
        break;
      
    }
    
  }
  function mudarcor(){
      cor = document.getElementById("cor")
      texto = document.getElementById("NomeDoProduto")
      texto.style.color = cor.value
  }
  function mudarcor2(){
    cor = document.getElementById("cor2")
    texto = document.getElementById("tipoDeProduto")
    texto.style.color = cor.value
}
  function mudarcor3(){
    cor = document.getElementById("cor3")
    texto = document.getElementById("descricao")
    texto.style.color = cor.value
}
 function mudarcor4(){
    cor = document.getElementById("cor4")
    texto = document.querySelector(".preco")
    texto1 = document.getElementById("Reais")
    texto2 = document.getElementById("centavos")
    texto3 = document.getElementById("virgula")
    texto4 = document.getElementById("peso")
    texto.style.color = cor.value
    texto1.style.color = cor.value
    texto2.style.color = cor.value
    texto3.style.color = cor.value
    texto4.style.color = cor.value
}
function mudarcor5(){
  cor = document.getElementById("cor5")
  document.querySelector(".placaFundo").style.backgroundColor = cor.value
}

um = '40'
dois = '70'
tres = '40'
quatro = '140'

umx = 10
umy = 0

doisx = 52
doisy = 0

tresx = 0
tresy = 0

umesp = 0
doisesp = 0
tresesp = 0

umesp2 = 40
doisesp2 = 40
tresesp2 = 40

posicaoimagemx = 250
posicaoimagemy = 230

function espLinha(comando){
  if (textoEmFoco == 'tipoDeProduto'){
    if (comando == "mais"){
      umesp2 += 10
      document.querySelector("#tipoDeProduto").style.lineHeight = umesp2 + 'px';
    }else if(comando == "menos"){
      umesp2 -= 10
      document.querySelector("#tipoDeProduto").style.lineHeight = umesp2 + 'px';
    }
  }else if(textoEmFoco == 'NomeDoProduto'){
    if (comando == "mais"){
      doisesp2 += 10
      document.querySelector("#NomeDoProduto").style.lineHeight = doisesp2 + 'px';
    }else if(comando == "menos"){
      doisesp2 -= 10
      document.querySelector("#NomeDoProduto").style.lineHeight = doisesp2 + 'px';
    }
  }else if(textoEmFoco == 'descricao'){
    if (comando == "mais"){
      tresesp2 += 10
      document.querySelector("#descricao").style.lineHeight = tresesp2 + 'px';
    }else if(comando == "menos"){
      tresesp2 -= 10
      document.querySelector("#descricao").style.lineHeight = tresesp2 + 'px';
    }
  }
}

function esp(comando){
  if (textoEmFoco == 'tipoDeProduto'){
    if (comando == "mais"){
      umesp += 10
      document.querySelector("#tipoDeProduto").style.wordSpacing = umesp + 'px';
    }else if(comando == "menos"){
      umesp -= 10
      document.querySelector("#tipoDeProduto").style.wordSpacing = umesp + 'px';
    }
  }else if(textoEmFoco == 'NomeDoProduto'){
    if (comando == "mais"){
      doisesp += 10
      document.querySelector("#NomeDoProduto").style.wordSpacing = doisesp + 'px';
    }else if(comando == "menos"){
      doisesp -= 10
      document.querySelector("#NomeDoProduto").style.wordSpacing = doisesp + 'px';
    }
  }else if(textoEmFoco == 'descricao'){
    if (comando == "mais"){
      tresesp += 10
      document.querySelector("#descricao").style.wordSpacing = tresesp + 'px';
    }else if(comando == "menos"){
      tresesp -= 10
      document.querySelector("#descricao").style.wordSpacing = tresesp + 'px';
    }
  }
}

function posicao(comando){
  if (textoEmFoco == 'tipoDeProduto'){
    switch(comando){
      case "d":
        umx += 5;
        document.querySelector("#tipoDeProduto").style.left = umx + 'px';
        break;
      case "e":
        umx -= 5;
        document.querySelector("#tipoDeProduto").style.left = umx + 'px';
        break;
      case "c":
        umy += 5;
        document.querySelector("#tipoDeProduto").style.bottom = umy + 'px';
        break;
      case "b":
        umy -= 5;
        document.querySelector("#tipoDeProduto").style.bottom = umy + 'px';
        break;
  }
  } else if (textoEmFoco == 'NomeDoProduto'){
    switch(comando){
      case "d":
        doisx += 5;
        document.querySelector("#NomeDoProduto").style.left = doisx + '%';
        break;
      case "e":
        doisx -= 5;
        document.querySelector("#NomeDoProduto").style.left = doisx + '%';
        break;
      case "c":
        doisy += 5;
        document.querySelector("#NomeDoProduto").style.bottom = doisy + 'px';
        break;
      case "b":
        doisy -= 5;
        document.querySelector("#NomeDoProduto").style.bottom = doisy + 'px';
        break;
  }
  }else if (textoEmFoco == 'descricao'){
  switch(comando){
    case "d":
      tresx += 5;
      document.querySelector("#descricao").style.left = tresx + 'px';
      break;
    case "e":
      tresx -= 5;
      document.querySelector("#descricao").style.left = tresx + 'px';
      break;
    case "c":
      tresy += 5;
      document.querySelector("#descricao").style.bottom = tresy + 'px';
      break;
    case "b":
      tresy -= 5;
      document.querySelector("#descricao").style.bottom = tresy + 'px';
      break;
   } 
 }else if (textoEmFoco == 'imagemProduto'){
  switch(comando){
    case "d":
      posicaoimagemx += 10;
      document.querySelector(".divImgProduto").style.left = posicaoimagemx + 'px';
      break;
    case "e":
      posicaoimagemx -= 10;
      document.querySelector(".divImgProduto").style.left = posicaoimagemx + 'px';
      break;
    case "c":
      posicaoimagemy -= 10;
      document.querySelector(".divImgProduto").style.top = posicaoimagemy + 'px';
      break;
    case "b":
      posicaoimagemy += 10;
      document.querySelector(".divImgProduto").style.top = posicaoimagemy + 'px';
      break;
   } 
 }
}


function cre(){
  if (textoEmFoco == 'tipoDeProduto'){
    um = parseInt(um) + parseInt('5')
    maior = parseInt(um) + parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }else if(textoEmFoco == 'NomeDoProduto'){
    dois = parseInt(dois) + parseInt('5')
    maior = parseInt(dois) + parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }else if(textoEmFoco == 'descricao'){
    tres = parseInt(tres) + parseInt('5')
    maior = parseInt(tres) + parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }
  else if(textoEmFoco == 'imagemProduto'){
    quatro = parseInt(quatro) + parseInt('5')
    maior = parseInt(quatro) + parseInt('5')
    teste = document.getElementById(textoEmFoco);
    document.querySelector(".divImgProduto").style.width = maior + 'px'
  }
}
function dim(){
  if (textoEmFoco == 'tipoDeProduto'){
    um = parseInt(um) - parseInt('5')
    maior = parseInt(um) - parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }else if(textoEmFoco == 'NomeDoProduto'){
    dois = parseInt(dois) - parseInt('5')
    maior = parseInt(dois) - parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }else if(textoEmFoco == 'descricao'){
    tres = parseInt(tres) - parseInt('5')
    maior = parseInt(tres) - parseInt('5')
    teste = document.getElementById(textoEmFoco);
    teste.style.fontSize = maior + 'px'
  }else if(textoEmFoco == 'imagemProduto'){
    quatro = parseInt(quatro) - parseInt('5')
    maior = parseInt(quatro) - parseInt('5')
    teste = document.getElementById(textoEmFoco);
    document.querySelector(".divImgProduto").style.width = maior + 'px'
  }
}

  //Este código usa o método html2canvas para renderizar a div selecionada em um objeto Canvas e, em seguida, usa o método toDataURL() do objeto Canvas para obter uma representação da imagem em formato de dados de URL. Em seguida, ele cria um elemento de link temporário, configura o atributo download com o nome do arquivo de imagem que você deseja baixar e define o atributo href com a URL da imagem. Finalmente, ele adiciona o link ao corpo da página, clica nele para iniciar o download da imagem e, em seguida, remove o link temporário do DOM.

  function ae(){
    html2canvas(document.querySelector("#placa")).then(canvas => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    tipo = document.getElementById('itipoDeProduto');
    produto = document.getElementById('iNomeDoProduto');
    nomeFinal = tipo.value + " " + produto.value;
    link.download = nomeFinal;
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
  });
 }


 document.addEventListener('DOMContentLoaded', (event) => {
  const tipoDeProdutoo = document.getElementById('itipoDeProduto');
  tipoDeProdutoo.addEventListener('input', () => {
      const valor = tipoDeProdutoo.value; 
      document.getElementById('tipoDeProduto').innerHTML = valor;
  });
  const NomeDoProdutoo = document.getElementById('iNomeDoProduto');
  NomeDoProdutoo.addEventListener('input', () => {
      const valor = NomeDoProdutoo.value; 
      document.getElementById('NomeDoProduto').innerHTML = valor;
  });
  const descricaoo = document.getElementById('idescricao');
  descricaoo.addEventListener('input', () => {
      const valor = descricaoo.value; 
      document.getElementById('descricao').innerHTML = valor;
  });
  var valor = document.getElementById('iValorDoProduto');
valor.addEventListener('input', () => {
    var valorr = valor.value.replace('.',',');

    const Virgula = valorr.indexOf(',');
    
    document.getElementById('centavos').innerHTML = valorr.replace(',','').substring(Virgula);
    document.getElementById('Reais').innerHTML = valorr.substring(0, Virgula);
    carac = valorr.substring(0, Virgula);
    const root = document.documentElement;
    if (carac.length == 1){
      root.style.setProperty('--preal', '280px');
      root.style.setProperty('--prigth', '150px');
      root.style.setProperty('--ptop', '-30px');
      root.style.setProperty('--pvirgula', '17px');
      root.style.setProperty('--pcent', '40px');

      root.style.setProperty('--sreal', '210px');
      root.style.setProperty('--srigth', '135px');
      root.style.setProperty('--stop', '-8px');
      root.style.setProperty('--virgula', '30px');
      root.style.setProperty('--cent', '30px');
    }else if(carac.length == 2){
      root.style.setProperty('--preal', '200px');
      root.style.setProperty('--prigth', '150px');
      root.style.setProperty('--ptop', '40px');
      root.style.setProperty('--pvirgula', '50px');
      root.style.setProperty('--pcent', '75px');

      root.style.setProperty('--sreal', '170px');
      root.style.setProperty('--srigth', '145px');
      root.style.setProperty('--stop', '40px');
      root.style.setProperty('--virgula', '65px');
      root.style.setProperty('--cent', '65px');
    }
    else{
      root.style.setProperty('--preal', '150px');
      root.style.setProperty('--prigth', '150px');
      root.style.setProperty('--ptop', '60px');
      root.style.setProperty('--pvirgula', '50px');
      root.style.setProperty('--pcent', '75px');

      root.style.setProperty('--sreal', '120px');
      root.style.setProperty('--srigth', '145px');
      root.style.setProperty('--stop', '60px');
      root.style.setProperty('--virgula', '65px');
      root.style.setProperty('--cent', '65px');
        
    }
   
});
  const detalhee = document.getElementById('kg');
  detalhee.addEventListener('input', () => {
      const valor = detalhee.value; 
      document.getElementById('peso').innerHTML = valor;
  });
});

document.addEventListener("keydown", function(comando){

  switch (comando.key){
    case "ArrowUp":
      posicao('c')
      break
    case "ArrowDown":
      posicao('b')
      break
    case "ArrowLeft":
      posicao('e')
      break
    case "ArrowRight":
      posicao('d');
      break
    case "+":
      cre();
      break
    case "-":
      dim();
      break
  }
})

