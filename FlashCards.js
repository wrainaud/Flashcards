// William Rainaud
// Rutgers Coding Bootcamp
// Homework Assignment #9

var fun = require("shitsandgrins");
var BasicCard = require("./BasicCard");

// Basic Flashcard
var firstcard = BasicCard("Who was the first president of the United States?", "George Washington");

console.log("\n====================================\n");
console.log("Basic Flashcard\n");
console.log("Front: " + firstcard.front + "\n"); 
console.log("Back: " + firstcard.back + "\n"); 
console.log("\n====================================\n");

// Cloze Flashcard
var secondcard = fun("George Washington was the first president of the United States.", "George Washington");

console.log("\n====================================\n");
console.log("Cloze Flashcard\n");
console.log("Cloze: " + secondcard.cloze + "\n"); 
console.log("Partial: " + secondcard.part + "\n");
console.log("Full: " + secondcard.full + "\n");
console.log("\n====================================\n");

// Cloze Flashcard Error

console.log("\n====================================\n");
console.log("Cloze Flashcard Error\n");
var brokenCloze = fun("No Fun Not Ever!", "oops");
console.log("\n====================================\n");