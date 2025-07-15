 function nav1(){
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 =  document.getElementById("img3.0");
    const img3_2 =  document.getElementById("img3.1");
    const img3_3 =  document.getElementById("img3.2");
    const img4 =  document.getElementById("img4");
    const img5_2 = document.getElementById("img5.2");
    const img5 = document.getElementById("img5");
     
    const text = document.getElementById("textarea");
    const demo5 = document.getElementById("demo5");

    const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4,img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });

    setTimeout(() => {
        text.innerHTML = "Dê o primeiro passo rumo à casa do futuro com nosso plano Essencial Smart.\
         Ideal para quem busca praticidade e quer experimentar os benefícios da automação sem grandes\
          investimentos. Conecte o essencial e sinta a diferença no seu dia a dia."
        img1.src = "/segundaPag/img/lampada.png"; 
        img2.src = "/segundaPag/img/fala.png";  
        img3.src = "/segundaPag/img/relogio.png";  
        img3_2.src = "/segundaPag/img/seta.png"
        img3_3.src = "/segundaPag/img/notebook.png"
        img4.src = "/segundaPag/img/celular.png";  
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
    }, 500);
    
   
};

function nav2(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3.0");
   const img3_2 =  document.getElementById("img3.1");
   const img3_3 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   const demo5 = document.getElementById("demo5");

    const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");
  
    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4,img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5]

   elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });

   setTimeout(() => {
        text.innerHTML = "Eleve o nível de conveniência e bem-estar em sua casa com o plano Conforto Smart.\
         Além das funcionalidades essenciais, adicionamos soluções que proporcionam mais comodidade \
         e otimização do seu dia a dia.";
        img1.src = "/segundaPag/img/lampada.png"; 
        img2.src = "/segundaPag/img/ar-condicionado.png";  
        img3.src = "/segundaPag/img/televisao.png";  
        img3_2.style.display = "none"
        img3_3.style.display = "none";  
        img4.src = "/segundaPag/img/tablete.png"; 
        img5.src = "/segundaPag/img/desktop.png"
        img5_2.style.display = "none" 
        demo5.style.display = "flex";   

        pd1.innerHTML = "Tudo dos planos anteriores ";
        pd2.innerHTML = " Climatização Inteligente";
        pd3.innerHTML = "Controle de Áudio e Vídeo";
        pd4.innerHTML = "Sensores de Presença e Abertura";
        pd5.innerHTML = "Criação de Cenas Personalizadas";
        
        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 500);
}
function nav3(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3.0");
   const img3_2 =  document.getElementById("img3.1");
   const img3_3 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   img5_2.style.display = "none"
   const demo5 = document.getElementById("demo5");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");
  
    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4,img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5]

   elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    });  

   setTimeout(() => {
        text.innerHTML = "Para quem busca uma experiência completa e integrada, o Premium Smart oferece um nível superior\
         de automação, segurança e eficiência. Tenha controle total sobre sua casa com soluções avançadas e personalizadas.";
        img1.src = "/segundaPag/img/lampada.png"; 
        img2.src = "/segundaPag/img/cortina.png";  
        img3.src = "/segundaPag/img/irrigacao.png";
        img3_2.style.display = "none"
        img3_3.style.display = "none";   
        img4.src = "/segundaPag/img/camera.png";  
        img5.src = "/segundaPag/img/desktop.png";
        demo5.style.display = "flex";  
        
        pd1.innerHTML = "Tudo dos planos anteriores ";
        pd2.innerHTML = "Automação de Cortinas e Persianas";
        pd3.innerHTML = "Irrigação Automatizada";
        pd4.innerHTML = "Sistema de Segurança Avançado";
        pd5.innerHTML = "Criação de rotinas avançadas";
                
        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 500);
}
function nav4(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("img1");
   const img2 = document.getElementById("img2");
   const img3 =  document.getElementById("img3.0");
   const img3_2 =  document.getElementById("img3.1");
   const img3_3 =  document.getElementById("img3.2");
   const img4 =  document.getElementById("img4");
   const img5 = document.getElementById("img5");
   const img5_2 = document.getElementById("img5.2");
   img5_2.style.display = "none"
   const demo5 = document.getElementById("demo5");

   const pd1 = document.getElementById("pd1");
    const pd2 = document.getElementById("pd2");
    const pd3 = document.getElementById("pd3");
    const pd4 = document.getElementById("pd4");
    const pd5 = document.getElementById("pd5");

    const elementos = [text, img1, img2, img3, img3_2, img3_3, img4,img5_2, img5, demo5, pd1,pd2, pd3, pd4, pd5]

    elementos.forEach(el => {
        el.classList.remove("entrada");
        el.classList.remove("saida");
        void el.offsetWidth; // força reflow
        el.classList.add("saida");
    }); 
   setTimeout(() => {
        text.innerHTML = "O plano Ultra Smart é a solução definitiva para quem deseja uma casa totalmente conectada e automatizada.\
         Uma experiência de moradia sem precedentes, onde cada detalhe é pensado para seu máximo conforto, segurança e conveniência.";
        img1.src = "/segundaPag/img/lampada.png"; 
        img2.src = "/segundaPag/img/casa_TECH.png";  
        img3.src = "/segundaPag/img/sala.png";  
        img3_2.style.display = "none"
        img3_3.style.display = "none";
        img4.src = "/segundaPag/img/dispositivos.png";  
        img5.src = "/segundaPag/img/chat.png"
        demo5.style.display = "flex";  
        
        d1.innerHTML = "Tudo dos planos anteriores ";
        pd2.innerHTML = "Automação de Cortinas e Persianas";
        pd3.innerHTML = "Otimização Máxima de Cenários";
        pd4.innerHTML = "Integração com Dispositivos Avançadosc";
        pd5.innerHTML = "Consultoria Exclusiva e Suporte VIP";

        elementos.forEach(el => {
            el.classList.remove("saida");
            void el.offsetWidth;
            el.classList.add("entrada");
        });
    }, 500);
}
