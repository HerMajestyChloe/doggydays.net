$(function(){
  var topOfOthDiv = $(".hideshare").offset().top;
  $(window).scroll(function() {
      if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
          $(".share").hide(); //reached the desired point -- show div
      }
      else{
        $(".share").show();
      }
  });
});



// JavaScript code
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('breeds');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

// JavaScript code



