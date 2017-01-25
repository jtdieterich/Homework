$(document).ready(function(){
  //remove styling from select
  var labels = $('.form-row > select').siblings();
  for(i=0; i < labels.length; i++){
    $(labels[i]).addClass('no-display');
  }
  //save values in form
  $("input").on('blur', function(){
    var element = $(this);
    if(element.val()){
      $(element).addClass('filled');
    } else {
      $(element).removeClass('filled');
    }
  });
});