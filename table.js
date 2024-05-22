$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "table.xml",
        dataType: "xml",
        
        success: function(xml){
              $(xml).find('row').each(function(){
                  var image = $(this).find('image').text();
                  var imagee = $(this).find('imagee').text();
                  var imageee = $(this).find('imageee').text();
                  var num = $(this).find('num').text();
                  var name = $(this).find('name').text();
                  var disc = $(this).find('disc').text();
                  if (window.matchMedia('(min-width: 1001px)').matches) {
                  $('.row-append').append('<div style="' + image + '">' + '<div class="font01">' + num + '<div class="font02">' + name + '<div class="font03">' + disc + '</div></div></div></div> ');
                  };
                  if (window.matchMedia('(min-width: 421px) and (max-width: 1000px)').matches) {
                    $('.row-append').append('<div style="' + imagee + '">' + '<div class="fontt01">' + num + '<div class="fontt02">' + name + '<div class="fontt03">' + disc + '</div></div></div></div> ');
                  };
                  if (window.matchMedia('(max-width: 420px)').matches) {
                    $('.row-append1').append('<div style="' + imageee + '">' + '<div class="fonttt01">' + num + '<div class="fonttt02">' + name + '<div class="fonttt03">' + disc + '</div></div></div></div> ');
                  };
              });
        }
    });
}); 