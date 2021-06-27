$('.letter').click(function(){
    $('#Slide').hide(1000)
    $('#tik').hide(1000)
    $('#Quizlet').hide(1000)
    $('#luv').hide(1000)
    $('#Letter').show(1000)
    $('#main').show(1000)
})

$('.video').click(function(){
    $('#Slide').hide(1000)
    $('#tik').hide(1000)
    $('#Letter').hide(1000)
    $('#Quizlet').hide(1000)
    $('#luv').show(1000)
})

$('.quiz').click(function(){
    $('#Slide').hide(1000)
    $('#tik').hide(1000)
    $('#Letter').hide(1000)
    $('#luv').hide(1000)
    $('#Quizlet').show(1000)
    
    
})

$('#main').click(function(){
    $('#Slide').show(1000)
    $('#tik').show(1000)
    $('#Letter').hide(1000)
    $('#main').hide(1000)
})
$('.back').click(function(){
  $('#Slide').show(1000)
  $('#tik').show(1000)
  $('#Quizlet').hide(1000)
  $('.class').hide(1000)
})
var score =0;
function scored(){
if(document.getElementById('F1').checked == true)
{
  score+=2;
}
else{
  score = score;
}
if(document.getElementById('m2').checked == true)
{
  score+=2;
}
if(document.getElementById('r1').checked == true )
{
  score+=2;
}
if(document.getElementById('g1').checked == true)
{
  score+=2;
}
if(document.getElementById('q3').checked == true)
{
  score+=2;
}
document.getElementById('score').value = score;


}