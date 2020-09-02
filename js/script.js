// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

const shootButton = $("#shoot");
const inputField = $("#input");
const userChoiceP = $("#userChoice");
shootButton.click(function() {
  userChoiceP.text(inputField.val());
});