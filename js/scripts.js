function Pizza (size) {
  this.toppings = [];
  this.size = size;
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
    $(".output").text("You have ordered a " + userPizza.size + " pizza. Your toppings are: " + userPizza.toppings);
  });
});
