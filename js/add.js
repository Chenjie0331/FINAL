var slideIndex = 0;
              var mytimer = null;
              
              autoplay(true);
              //圓點播放
        
            function currentSlide(n){
              showSlides(slideIndex = n);
            }
        
        
              function plusSlides(n){
                showSlides(slideIndex += n);
              }
        
            function showSlides(n){
              clearTimeout(mytimer);
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("dot");
              /*條件判斷*/
        
              if(n >= slides.length){
                slideIndex = 0;
              }
              if(n < 0){
                slideIndex = slides.length - 1;
              }
        
              for(var i = 0; i < slides.length; i++){
                slides[i].style.display = "none";
              }
        
              slides[slideIndex].style.display = "block";
              
              for (var i = 0; i <dots.length; i++){
                dots[i].className = dots[i].className.replace("active","");
              }
              dots[slideIndex].className += " active";
            }
        
            function autoplay(isFirst){
              var slides = document.getElementsByClassName("mySlides");
              
              /*索引值*/
              if(isFirst){
              slideIndex = 0;
              } else {
                slideIndex ++;
              }
        
              if(slideIndex > slides.length){
                slideIndex = 0;
              }
        
              showSlides(slideIndex);
              mytimer = setTimeout("autoplay()", 2000);
        
            }