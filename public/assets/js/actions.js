// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newsleep");
  
      var newdevourState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burger/", {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#newBurgerForm").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBrgr = {
        burger_name: $("#newBurger").val().trim(),        
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBrgr
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    
  });