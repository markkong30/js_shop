
var subTotalPrice = function (ele) {
  var price = parseFloat($(ele).find('.price').text());
  var quantity = parseInt($(ele).find('.quantity input').val());

  var subTotal = price * quantity;
  $(ele).find('.subtotal').html(subTotal);
  return subTotal;
};

var updateTotal = function () {
  var totalPrice = [];

  $('tbody tr').each(function (i ,ele) {
    totalPrice.push(subTotalPrice(ele));
  });
  var sum = totalPrice.reduce(function (a, b) {
    return a + b;
  });

  $('#totalDisplay').html(sum);
};



$(document).ready(function () {
  updateTotal();


$('body').on('input','tr input', function (){
  
})






});