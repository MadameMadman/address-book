//business logic
function Contact(first, last, age) {
  this.firstName = first;
  this.age = age;
  this.lastName = last;
}

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedAge = $("input#new-age").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAge);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-age").val("");

$(".contact").last().click(function() {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
  $(".age").text(newContact.age);
});
  });
});
