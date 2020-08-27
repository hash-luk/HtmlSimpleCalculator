function insert (num) {
  document.form.display.value = document.form.display.value + num
}

function clearall() {
  document.form.display.value = '';
}


function backspace() {
  var display = document.form.display.value;
  document.form.display.value = display.substring(0,display.lenght - 1);
}

function equal() {
  var exp = document.form.display.value;

  if(exp){
    document.form.display.value = eval(exp);
  }
}

