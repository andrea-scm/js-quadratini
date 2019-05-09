for (var i = 0; i < 64; i++) {
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
      //conta i rossi
      if (!$(this).hasClass('red')) {
        red_count++;
        document.getElementById('rossi').innerHTML =red_count;
      }

      $(this).addClass('red');
    });
  }else{
    $(this).click(function() {
      //conta i verdi
      if (!$(this).hasClass('green')) {
        green_count++;
        document.getElementById('verdi').innerHTML =green_count;
      }

      $(this).addClass('green');
    });
  }
});

console.log($('.box_container'));

function rndNum(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
