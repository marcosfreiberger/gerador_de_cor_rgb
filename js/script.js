window.addEventListener('load', change);

function change() {

  var r = document.querySelector('#r');
  var g = document.querySelector('#g');
  var b = document.querySelector('#b');

  var rgb = document.querySelector('#rgb');

  document.querySelector('#r_disabled').value = r.value;
  document.querySelector('#g_disabled').value = g.value;
  document.querySelector('#b_disabled').value = b.value;

  document.querySelector('#box')
    .style
    .background = 'rgb(' + r.value + ', ' + g.value + ', ' + b.value + ')';

  rgb.value = '(' + r.value + ', ' + g.value + ', ' + b.value + ')';

}