  /*Código para da feito na galeria de foto inicio*/ 
  $(document).ready(function(){
    $(".fancybox").fancybox({
          openEffect: "none",
          closeEffect: "none"
      });
      
      $(".zoom").hover(function(){
      
      $(this).addClass('transition');
    }, function(){
          
      $(this).removeClass('transition');
    });
  });
    
  /*Fim da código de feito na galeria de imagem*/ 