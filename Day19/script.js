$(document).ready(function () {
  // $("#para").html("<h1>Something</h1>")
  $("#para").text("<h1>Something</h1>");

  $("#rmv").click(function () {
    $("#para").hide();
    $("#container").empty();
    $("#container").text("Hi");
  });

  $("#show").click(function () {
    $("#para").show();
  });

  $("#btn").click(function () {
    $("#item2").after("<li>" + $("#inputField").val() + "</li>");
  });

  $("#imageChange").click(function () {
    $("#image").attr(
      "src",
      "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9yZXN0fGVufDB8fDB8fHww"
    );
  });

  $("#add").click(function () {
    $("#para").toggleClass("highlight");
  });
});
