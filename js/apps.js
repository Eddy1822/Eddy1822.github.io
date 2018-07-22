// Hiding Titles & Years until called upon
$(".stateTitle").hide();
$(".yearTitle").hide();

// Button Functions

// State Button
$(".byStateBtn").click( function(){
  $(".yearTitle").hide();
  $(".stateTitle").show();
});

// Year Button
$(".byYearBtn").click( function(){
  $(".stateTitle").hide();
  $(".yearTitle").show();
});
