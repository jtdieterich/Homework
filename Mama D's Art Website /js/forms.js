$(document).ready(function(){
    event.preventDefault();
    x.classList.toggle("change");
    $('.rightnav').toggle('slow');
  });
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
      $(element).removeClass('error');
    } else {
      $(element).removeClass('filled');
    }
      $('#myform').on('submit', function() {
    var inputs = $('input');
    var selected = $('select');
    errors = "";
    //check each input
    for(i=0; i< inputs.length; i++){
      if($(inputs[i]).hasClass("text") && $(inputs[i]).hasClass("required")){
        if(!$(inputs[i]).val()){
          errors += "" + $(inputs[i]).attr('id') + " is blank" + "<br />";
          $(inputs[i]).addClass('filled');
          $(inputs[i]).addClass('error');
        }
      }
    }
    if(errors){
      $('.error-box').html(errors);
      $('.error-box').show();
    }
    return false;
  });
  });
});