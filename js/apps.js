// Hiding Titles & Years until called upon
$(".stateTitle").hide();
$(".yearTitle").hide();

// Button Functions

$(".byStateBtn").click( function(){
  $(".yearTitle").hide();
  $(".stateTitle").show();
});

$(".byYearBtn").click( function(){
  $(".stateTitle").hide();
  $(".yearTitle").show();
});
