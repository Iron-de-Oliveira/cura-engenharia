 function nav1(){
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 =  document.getElementById("img3");
    const img3_2 =  document.getElementById("img3.2");
    const img4 =  document.getElementById("img4");
    const img4_2 = document.getElementById("img4.2");
    const img5_2 = document.getElementById("img5.2");
    const img5 = document.getElementById("img5");
     
    const text = document.getElementById("textarea");
    const demo5 = document.getElementById("demo5");

    const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const foto = document.getElementById("foto");

    const elementos = [text, img1, img2, img3, img3_2, img4,img4_2, img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5, foto]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });

    setTimeout(() => {
        foto.src = "/cura-engenharia/segundaPag/img2/casa6.png";

        text.innerHTML = "Dê o primeiro passo rumo à casa do futuro com nosso plano Essencial Smart.\
         Ideal para quem busca praticidade e quer experimentar os benefícios da automação sem grandes\
          investimentos. Conecte o essencial e sinta a diferença no seu dia a dia."
        img1.className = "fi fi-rr-bulb"; 
        img2.className = "fi fi-ts-user-speaking";  
        img3.className = "fi fi-rs-alarm-clock";  
        img3_2.className = "fi fi-ts-desk";
        img4.className = "fi fi-tr-mobile-button"; 
        img4_2.style.display= "none"; 
        img5_2.style.display = "none"
        demo5.style.display = "none";   
        

        pd1.innerHTML = "Controle de Iluminação";
        pd2.innerHTML = "Assistente de Voz";
        pd3.innerHTML = "Rotinas Simplificadas";
        pd4.innerHTML = "Acesso Remoto via App";
        pd5.style;display = "none";
        
         elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
    
   
};

function nav2(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3");
   const img3_2 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
    const img4_2 = document.getElementById("img4.2");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   const demo5 = document.getElementById("demo5");

    const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const foto = document.getElementById("foto");
  
    const elementos = [text, img1, img2, img3, img3_2, img4,img4_2, img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5, foto]

   elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });

   setTimeout(() => {
       foto.src = "/cura-engenharia/segundaPag/img2/casa2.png";

        text.innerHTML = "Eleve o nível de conveniência e bem-estar em sua casa com o plano Conforto Smart.\
         Além das funcionalidades essenciais, adicionamos soluções que proporcionam mais comodidade \
         e otimização do seu dia a dia.";
        img1.className = "fi fi-rr-bulb"; 
        img2.className = "fi fi-ts-air-conditioner";  
        img3.className = "fi fi-ts-screen";  
        img3_2.style.display = "none"
        img4.className = "fi fi-ss-running"; 
        img4_2.style.display= "none"; 
        img5.className = "fi fi-rs-bed-alt"
        img5_2.style.display = "none" 
        demo5.style.display = "flex";   

        pd1.innerHTML = "Planos anteriores ";
        pd2.innerHTML = " Climatização Inteligente";
        pd3.innerHTML = "Controle de Áudio e Vídeo";
        pd4.innerHTML = "Sensores de Presença";
        pd5.innerHTML = "Cenários Personalizadas";
        
        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
}
function nav3(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3");
   const img3_2 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
   const img4_2 = document.getElementById("img4.2");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   img5_2.style.display = "none"
   const demo5 = document.getElementById("demo5");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const foto = document.getElementById("foto");
  
    const elementos = [text, img1, img2, img3, img3_2, img4,img4_2,img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5, foto]

   elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });  

   setTimeout(() => {

        foto.src = "/cura-engenharia/segundaPag/img2/casa4.png";

        text.innerHTML = "Para quem busca uma experiência completa e integrada, o Premium Smart oferece um nível superior\
         de automação, segurança e eficiência. Tenha controle total sobre sua casa com soluções avançadas e personalizadas.";
        img1.className = "fi fi-rr-bulb"; 
        img2.className = "fi fi-ts-stage-theatre";  
        img3.className = "fi fi-ts-sprinkler";
        img3_2.style.display = "none"  
        img4.className = "fi fi-ts-camera-cctv";
        img4_2.style.display= "none";   
        img5.className = "fi fi-rs-desk";
        demo5.style.display = "flex";  
        
        pd1.innerHTML = "Tudo dos planos anteriores ";
        pd2.innerHTML = "Automação de Cortinas";
        pd3.innerHTML = "Irrigação Automatizada";
        pd4.innerHTML = "Segurança Avançada";
        pd5.innerHTML = "Rotinas Avançadas";
                
        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
}
function nav4(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3");
   const img3_2 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
   const img4_2 = document.getElementById("img4.2");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   const demo5 = document.getElementById("demo5");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const foto = document.getElementById("foto");

    const elementos = [text, img1, img2, img3, img3_2, img4,img4_2, img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5, foto]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    }); 
   setTimeout(() => {
        foto.src = "/cura-engenharia/segundaPag/img2/casa5.png";
        
        text.innerHTML = "O plano Ultra Smart é a solução definitiva para quem deseja uma casa totalmente conectada e automatizada.\
         Uma experiência de moradia sem precedentes, onde cada detalhe é pensado para seu máximo conforto, segurança e conveniência.";
        img1.className = "fi fi-rr-bulb"; 
        img2.className = "fi fi-ts-smart-home-chip";  
        img3.className = "fi fi-tr-couch";  
        img3_2.style.display = "none"
        img4.className = "fi fi-rs-mp3-player";  
        img4_2.className = "fi fi-rs-devices";
        img5.className = "fi fi-rr-crown"
        img5_2.className = "fi fi-rs-messages"
        demo5.style.display = "flex";  
        
        pd1.innerHTML = "Contem Tudo dos Planos Anteriores ";
        pd2.innerHTML = "Automação Residencial Completa";
        pd3.innerHTML = "Otimização Máxima de Cenários";
        pd4.innerHTML = "Integração com Dispositivos Avançados";
        pd5.innerHTML = "Consultoria Exclusiva e Suporte VIP";

        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
}

function voltar(){
    window.location.href = "/cura-engenharia/index.html";
}

function nav5(){
    const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3.0");
   const img3_2 =  document.getElementById("img3.1");
   const img3_3 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");

    const foto = document.getElementById("foto");

    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4, pd1,pd2, pd3, pd4, foto]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    }); 
   setTimeout(() => {
        foto.src = "/segundaPag/img2/casa5.png";
        
        text.innerHTML = " ";
        img1.class = ""; 
        img2.class = "/segundaPag/img/casa_TECH.png";  
        img3.class = "/segundaPag/img/sala.png";  
        img3_2.style.display = "none"
        img3_3.style.display = "none";
        img4.class = "/segundaPag/img/dispositivos.png";  

        
        pd1.innerHTML = "Contem Tudo dos Planos Anteriores ";
        pd2.innerHTML = "Automação Residencial Completa";
        pd3.innerHTML = "Otimização Máxima de Cenários";
        pd4.innerHTML = "Integração com Dispositivos Avançados";

        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
}

function nav6(){
    const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3.0");
   const img3_2 =  document.getElementById("img3.1");
   const img3_3 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");

    const foto = document.getElementById("foto");

    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4, pd1,pd2, pd3, pd4, foto]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    }); 
   setTimeout(() => {
        foto.src = "/segundaPag/img2/casa5.png";
        
        text.innerHTML = " Construir uma casa ecológica é pensar no futuro e no seu bolso.\
                 Com soluções sustentáveis, você reduz o consumo de energia e água, diminui o impacto ambiental e ainda economiza.\
                  É qualidade de vida com responsabilidade e inteligência.";
        img1.class = "/segundaPag/img/lampada.png"; 
        img2.class = "/segundaPag/img/casa_TECH.png";  
        img3.class = "/segundaPag/img/sala.png";  
        img3_2.style.display = "none"
        img3_3.style.display = "none";
        img4.class = "/segundaPag/img/dispositivos.png";  

        
        pd1.innerHTML = "Contem Tudo dos Planos Anteriores ";
        pd2.innerHTML = "Automação Residencial Completa";
        pd3.innerHTML = "Otimização Máxima de Cenários";
        pd4.innerHTML = "Integração com Dispositivos Avançados";

        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 400);
}