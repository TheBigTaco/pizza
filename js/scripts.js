function Pizza (size) {
  this.toppings = [];
  this.size = size;
}

Pizza.prototype.price = function(){
  var toppingsPrice = this.toppings.length * 2;
  var sizePrice = this.size * 2;
  var finalPrice = toppingsPrice + sizePrice;
  return finalPrice;
}

$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var size = $("#size").val();
    var userPizza = new Pizza(size);
    $("input:checkbox[name=topping]:checked").each(function(){
      var checked = $(this).val();
      userPizza.toppings.push(checked);
    });
    var price = userPizza.price();
    $(".output").text("That will be $" + price + ".99");
  });
});
