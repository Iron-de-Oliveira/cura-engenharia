function nav1(){
   const text = document.getElementById("textarea");
   const img1 = document.getElementById("demo1");
   const img2 = document.getElementById("demo2");
   const img3 =  document.getElementById("demo3");
   const img4 =  document.getElementById("demo4");
   const img5 = document.getElementById("demo5");

    setTimeout(() => {
        text.innerHTML = "Eleve o nível de conveniência e bem-estar em sua casa com o plano Conforto Smart.\
                 Além das funcionalidades essenciais, adicionamos soluções que proporcionam mais comodidade\
                  e otimização do seu dia a dia.";
        img1.src = "/segundaPag/img/"; 
        img2.src = "/segundaPag/img/";  
        img3.src = "/segundaPag/img/";  
        img4.src = "/segundaPag/img/";  
        img5.style.display = "none";           
    }, 500);
};