function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num1;
}

$(":radio").on("change", function(){
    var total = 0;
    $(":radio:checked").each(function(){
        total += Number(this.value);
    });
    
    $("#total").text(total);
});

function toggler(divId) {
    $("#" + divId).toggle();
}

$(document).ready(function() {
    //this calculates values automatically 
    sum();
    $("#num1, #num2").on("keydown keyup", function() {
        sum();
    });
});





function sum() {
            var num1 = document.getElementByName('radio1').value;
            var num2 = document.getElementByName('radio2').value;
			var result = parseInt(num1) + parseInt(num2);
			var result1 = parseInt(num2) - parseInt(num1);
            if (!isNaN(result)) {
                document.getElementById('sum').value = result;
				document.getElementById('subt').value = result1;
            }
        }
        






        
document.getElementById('price').addEventListener('click', function(event) {
  if (event.target.name === 'tab' || event.target.name === 'discount') {
    var tabValue = 0,
      discountValue = 0,
      totalPrice = 0,
      tab = document.getElementsByName('tab'),
      discount = document.getElementsByName('discount');

    if (event.target.name === 'tab') {
      tabValue = parseInt(event.target.value);

      for (i = 0; i < discount.length; i++) {
        if (discount[i].checked) {
          discountValue = parseInt(discount[i].value);
        }
      }
    }

    if (event.target.name === 'discount') {
      for (i = 0; i < tab.length; i++) {
        if (tab[i].checked) {
          tabValue = parseInt(tab[i].value);
        }
      }
      discountValue = parseInt(event.target.value);
    }


    totalPrice = tabValue - (tabValue / 100 * discountValue);
    document.getElementById('price_tab').innerHTML = tabValue;
    document.getElementById('price_discount').innerHTML = discountValue;
    document.getElementById('price_discount_calculation').innerHTML = totalPrice;

  } else {
    return;
  }


});