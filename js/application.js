var subTotalPrice = function (ele) {
  var price = parseFloat($(ele).find('.price').text());
  var quantity;
  if ($(ele).find('.quantity input').val().length == 0) {
    quantity = 0;
  } else {
    quantity = parseInt($(ele).find('.quantity input').val());
  }


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
var addContent1 = function () {
var name = $('#addName').val();
var price = $('#addPrice').val();
var qty = $('#addQty').val();
var addContent = 
  '<tr><td class="name">'+ name + '</td>' + '<td>$<span class="price">' + price +'</span></td>' + '<td class="quantity">QTY <input type="number" value="' + qty + '"/></td>' + '<td><button class="btn btn-sm btn-dark remove">Remove</button></td>' + '<td>$<span class="subtotal">--.--</span></td></tr>';   
  return addContent;
}





$(document).ready(function () {
  updateTotal();


$('body').on('input','tr input', function (){
  updateTotal();
});

$('body').on('click','button.remove', function () {
  $(this).closest('tr').remove();
  updateTotal();
});

$('body').on('click', 'button.add', function () {
  $('tbody').prepend(addContent1());
  updateTotal();
});




});