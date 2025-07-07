function animação(){
const textos = ["Casas inteligentes","Casas ecológicas"];

let index = 0;

setInterval(() => {
  index = (index + 1) % textos.length; // volta para 0 no final
  document.getElementById("text_js").textContent = textos[index];
}, 7500); 
}animação();

let alternado = false;

function alternarConteudo() {
  const p = document.getElementById("info_js");
  const categoria = document.getElementById('categoria');
  const tipo = document.getElementById('tipo');
  const img = document.getElementById('img_js_p2');
  const link  = document.getElementById('saiba_mais');

  const elementos = [p, categoria, tipo, img, link];

  // Remove "entrada" e aplica "saida" com reflow forçado
  elementos.forEach(el => {
    el.classList.remove("entrada");
    el.classList.remove("saida");
    void el.offsetWidth; // força reflow
    el.classList.add("saida");
  });

  // Após a animação de saída (500ms), trocar conteúdo e animar entrada
  setTimeout(() => {
    // Alternar imagem (corrigido: 'src', não 'scr')
    img.src = alternado ? `img/casa_tech_p2.png` : `img/casa_eco_p2.png`;

    // Alternar categoria
    categoria.innerHTML = alternado
      ? `Categoria: Casas inteligentes`
      : `Categoria: Casas ecológicas`;

    // Alternar tipo
    tipo.innerHTML = alternado
      ? `Tipo: Instalação`
      : `Tipo: Reforma e Construção`;

    // Alternar texto
    p.innerHTML = alternado
      ? `Imagine uma vida onde sua casa antecipa suas necessidades. \
Com uma casa inteligente, você tem o controle total na palma da sua mão. \
Apagar as luzes, ligar o ar-condicionado antes de chegar e até mesmo trancar a porta, \
tudo isso pode ser feito com um toque no celular ou um simples comando de voz. \
Troque o 'eu preciso' pelo 'já está pronto'. É a praticidade que você merece, \
transformando seu dia a dia em uma experiência muito mais fluida e confortável.`
      : `Construindo sua casa utilizando materiais ecológicos, \
como o tijolo solo-cimento, que proporcionam redução significativa nos custos da obra e conforto \
térmico natural, mantendo o ambiente mais fresco no verão e mais aquecido no inverno. \
Essa é uma solução inteligente, econômica e sustentável para quem busca qualidade, \
eficiência e respeito ao meio ambiente desde a fundação do seu lar.`;


    link.onclick = alternado
    ? () => segunda_pag()
    : () => segunda_pag_2();

    // Reaplica a animação de entrada com reflow
    elementos.forEach(el => {
      el.classList.remove("saida");
      void el.offsetWidth;
      el.classList.add("entrada");
    });

    // Inverte o estado
    alternado = !alternado;
  }, 500);
}

function alternarConteudo2(){
  const texto = document.getElementById('sobre_js');
  const img = document.getElementById('sobre_img_js');


  elementos = [img, texto]

  elementos.forEach(elm =>{
    elm.classList.remove("entrada2");
  elm.classList.remove("saida2");
  void elm.offsetWidth;
  elm.classList.add("saida2");
  })
  

  setTimeout(() => {
    texto.innerHTML = alternado ? `A Cura Engenharia nasceu com o propósito de transformar a maneira como vivemos, construímos e cuidamos dos nossos lares. Atuando com excelência e inovação, oferecemos soluções integradas nas áreas de automação residencial,\
     engenharia diagnóstica e construção sustentável,\
      sempre com foco em eficiência, economia e bem-estar.`:
       ` Atuamos na implementação de casas inteligentes, unindo automação residencial,\
        eficiência energética e conforto personalizado.\
         Nossa tecnologia transforma o cotidiano dos nossos clientes,\
          oferecendo mais segurança, praticidade e controle na palma da mão.\
      Também somos especialistas na construção de casas ecológicas,\
      que aliam design moderno a soluções sustentáveis.\
      Utilizamos materiais ecológicos, técnicas construtivas que reduzem\
      impactos ambientais e priorizamos o conforto térmico e a economia de recursos,\ como água e energia.`;
  
    img.src = alternado ? `img/sobre_tech.png`:`img/sobre_eco.png`;
      
    elementos.forEach( elm =>{
     elm.classList.remove("saida2");
     void elm.offsetWidth;
     elm.classList.add("entrada2") ; 
    })
    
  
  alternado = !alternado;
  }, 500);
}

// link para segunda página
function segunda_pag(){
  window.location.href = "/segundaPag/index.html#parte1"
}
function segunda_pag_2(){
  window.location.href = "/segundaPag/index.html#parte2"
}