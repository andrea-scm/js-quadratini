for (var i = 0; i < 65; i++) {
  /*
  con .append ad ogni ciclo aggiungo un <div class = "quadratini" id = "div(i)"/>
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

console.log(rnd.sort());

//genero i quadratini verdi e rossi
$('.quadratini').each(function() {
  //genero i quadratini rossi
  if( rnd.includes($(this).index()) ){
    $(this).click(function() {
      $(this).toggleClass('red');
    });
  }else{
    $(this).click(function() {
      $(this).toggleClass('green');
    });
  }
});


$('.quadratini').each(function(){
  if($('.quadratini').hasClass('red')){
    red_count+=1;
  }else if ($('.quadratini').hasClass('green')) {
    green_count+=1;
  }
});


document.getElementById('contatore').innerHTML ="Rossi: "+red_count+" Verdi: "+red_count;
console.log($('.box_container'));

function rndNum(min, max) {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
