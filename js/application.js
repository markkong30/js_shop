var subTotalPrice = function (ele) {
  var price = parseFloat($(ele).find('.price').text());
  var quantity = $(ele).find('.quantity input').val();
  if (quantity.length == 0 || quantity < 0) {
    quantity = 0;
  } else {
    quantity = parseInt($(ele).find('.quantity input').val()
    );
  };

  var subTotal = price * quantity;
  $(ele).find('.subtotal').html(subTotal);
  
  return subTotal;
};

var updateTotal = function () {
  var totalPrice = [];

  $('tbody tr').each(function (i ,ele) {
    totalPrice.push(subTotalPrice(ele));
  });
  var sumDec = totalPrice.reduce(function (a, b) {
    return a + b;
  });
  var sum = sumDec.toFixed(2);

  $('#totalDisplay').html(sum);
};

var addContent = function () {
  var name = $('#addName').val();
  var price = $('#addPrice').val();
  var qty = $('#addQty').val();
  if (name.length == 0 || price.length == 0 || price < 0 || qty < 0 || qty.indexOf('.') !== -1) {
    return;
  };

  var priceDisplay = Number(price).toFixed(2);

  var content = 
    '<tr><td class="name">'+ name + '</td>' + '<td>$<span class="price">' + priceDisplay +'</span></td>' + '<td class="quantity">QTY <input type="number" min="0" value="' + qty + '"/></td>' + '<td><button class="btn btn-sm btn-dark remove">Remove</button></td>' + '<td>$<span class="subtotal">--.--</span></td></tr>';  

  return content;
};



$(document).ready(function () {
  updateTotal();

  $('body').on('input','tr input', function (){
    updateTotal();
  });

  $('body').on('click','button.remove', function () {
    $(this).closest('tr').remove();
    updateTotal();
  });

  $('body').on('submit', '#addItem', function (event) {
    event.preventDefault();
    $('tbody').prepend(addContent());
    $('#addItem').trigger('reset');
    updateTotal();
  });
});