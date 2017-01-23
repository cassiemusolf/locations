//business logic
function Location(location,landmarks,notes,time) {
  this.yourLocation = location;
  this.yourLandmark = landmarks;
  this.yourNotes = notes;
  this.yourTime = time;
}

Location.prototype.totalLocation = function() {
  return this.yourLocation + " " + this.yourLandmark + " " + this.yourNotes + " " + this.yourTime;
}

//user interface logic
$(document).ready(function() {
  $("form#places").submit(function(event){
    event.preventDefault();

    var inputtedYourLocation = $("input#new-location").val();
    var inputtedYourLandmark = $("input#new-landmarks").val();
    var inputtedYourNotes = $("input#new-notes").val();
    var inputtedYourTime = $("input#new-time").val();

    var newLocation = new Location(inputtedYourLocation, inputtedYourLandmark, inputtedYourNotes, inputtedYourTime);

    $("p#location-result").append("<p><span class='allLocations'>" + inputtedYourLocation + "</span></p>");

    $(".allLocations").last().click(function() {
      $("#show-location").show();
      $("#show-loction h2").text(newLocation.yourLocation);
      $(".location").text(newLocation.yourLocation);
      $(".landmarks").text(newLocation.yourLandmark);
      $(".notes").text(newLocation.yourNotes);
      $(".time").text(newLocation.yourTime);
    });

    $("input#locations").val("");
    $("input#landmarks").val("");
    $("input#notes").val("");
    $("input#time").val("");
  });
});
