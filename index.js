function animação(){
const textos = ["Casas inteligentes","Casas ecológicas"];

let index = 0;

setInterval(() => {
  index = (index + 1) % textos.length; // volta para 0 no final
  document.getElementById("text_js").textContent = textos[index];
}, 7500); 
}animação();

function next1(){
    const categoria = ["Categoria: Casas inteligentes", "Categoria: Casas ecológicas"];
    const tipo = ["Tipo: Instalação", "Tipo: Reforma e Construção"]
    const texto = [
        "Imagine uma vida onde sua casa antecipa suas necessidades. \
        Com uma casa inteligente, você tem o controle total na palma da sua mão.\
         Apagar as luzes, ligar o ar-condicionado antes de chegar e até mesmo trancar a porta\
         , tudo isso pode ser feito com um toque no celular ou um simples comando de voz.\
          Troque o 'eu preciso' pelo 'já está pronto'. É a praticidade que você merece,\
           transformando seu dia a dia em uma experiência muito mais fluida e confortável.",

        "Construindo sua casa utilizando materiais ecológicos,\
         como o tijolo solo-cimento, que proporcionam redução significativa nos custos da obra e conforto \
         térmico natural, mantendo o ambiente mais fresco no verão e mais aquecido no inverno.\
        Essa é uma solução inteligente, econômica e sustentável para quem busca qualidade,\
         eficiência e respeito ao meio ambiente desde a fundação do seu lar."   
    ]

    let contador = 0;

    
}

let alternado = false;

function alternarConteudo() {
  const p = document.getElementById("info_js");
  const categoria = document.getElementById('categoria');
  const tipo = document.getElementById('tipo');
  const img = document.getElementById('img_js_p2');

  const elementos = [p, categoria, tipo, img];

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
