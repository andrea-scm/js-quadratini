for (var i = 0; i < 65; i++) {
  /*
  con .append ad ogni ciclo aggiungo un <div class = "quadratini"/>
  al div padre con class = ".box_container"
  in modo da creare una griglia di i-1 quadratini
  */
  $('.box_container').append('<div class="quadratini" /> ');
}


var rnd = [];
var red_count = 0;
var green_count = 0;

while (rnd.length < 16){
  var rndNm = rndNum(0, 64);
  if(rnd.includes(rndNm) == false){
    rnd.push(rndNm);
  }
};

//genero i quadratini verdi e rossi
$('.quadratini').each(function() {
  //genero i quadratini rossi
  if( rnd.includes($(this).index()) ){
    $(this).click(function() {
      $(this).addClass('red');
      //conta i rossi
      red_count++;
      document.getElementById('rossi').innerHTML =red_count;
    });
  }else{
    $(this).click(function() {
      $(this).addClass('green');
      //conta i verdi
      green_count++;
      document.getElementById('verdi').innerHTML =green_count;
    });
  }
});

//console.log($('.box_container'));

function rndNum(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
