$(document).ready(function(){
  $("#pizza").submit(function(event){
    event.preventDefault();
    var toppings = [];
    $("input:checkbox[name=topping]:checked").each(function(){
      var checked = $(this).val();
      toppings.push(checked);
    });
    alert(toppings);
  });
});
