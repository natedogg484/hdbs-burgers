// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      Devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      console.log("changed devoured to", newDevour);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#burgerNew").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if (
      $("#newBurger").val().trim().length > 0) {
      var newBrgr = {
        burger_name: $("#newBurger")
          .val()
          .trim()
      };

      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBrgr
      }).then(function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });
});
