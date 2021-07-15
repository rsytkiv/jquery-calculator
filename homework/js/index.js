const tester = /[+-/*]/;
const testNum = /[4][8]/;
$('.calc-btn').on('click',function(){
    if($(this).attr('data-role') === 'operator'){
        if(tester.test($('.display').val()) && $('.display').val()){
            $('.display').val($('.display').val().substring(0, $('.display').val().length-1));
        }
    }
    if($('.display').val() === '0'){
        $('.display').val($(this).val());
    } else if($(this).attr('data-role')!=='operator'){
      $('.display').val($('.display').val()+$(this).val());
    } else {
      if($('.display').val()!==''){ 
        $('.display').val($('.display').val()+$(this).val());
      }
    }
  });
   
  $('.clear-btn').on('click',function(){
    $('.display').val('0');
  });
  function culc(fn) {
    return new Function('return ' + fn)();
  }
   
  $('.calculate-btn').on('click',function(){
    let expression = $('.display').val();
    if(culc(expression)!== Infinity){
        $('.display').val(culc(expression));
    } else {
       $('.display').val('ERROR'); 
    }
    if(culc(expression) !== Infinity){
    $('.logs').prepend(`
        <div class="log">
            <div class="log-circle" onclick="redCircle()"></div>
            <p class="calc-log">${expression + '=' + culc(expression)}</p>
            <span class="delete-log">&#10006</span>
        </div>`);
    if(testNum.test(expression) || testNum.test(culc(expression))){
        $('.calc-log').toggleClass('numberCheck');
    }
    }
    $('.delete-log').on('click',function(evt){
        $(evt.target).parent().remove();
    });
});
function redCircle(){
    $('.log-circle').css('background-color','red')
}
$('.logs').scroll(function() {
    console.log(`Scroll Top: ${$('.logs').scrollTop()}`);        
});

$('td').css('text-align', 'center');