var inquirer = require('inquirer');
var fs = require("fs");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCardArr = [];
var basicCardFront;
var basicCardBack;
var basicCard;


inquirer.prompt([
    
      {
        type: "list",
        name: "chooseCardType",
        message: "What Kind of Flashcard Do You Want to Make?",
        choices: ["Basic", "Cloze"]
      }
    
    ]).then(function(card) {
    
      // If the user guesses the password...
      if (card.chooseCardType === "Basic") {
    
        console.log("==============================================");
        console.log("Basic Bitch");
        console.log("==============================================");

        createBasicCard();
        
      }
    
    
      // If the user doesn't guess the password...
      else {
    
        console.log("==============================================");
        console.log("Not so Basic");
        console.log("==============================================");
    
      }
    });
    

/*********************
    CREATE BASIC CARD
**********************/

function createBasicCard(){
    inquirer.prompt([
        
        {
            type: "input",
            name: "cardFront",
            message: "Please enter the Flashcard front text"
        },
        {
            type: "input",
            name: "cardBack",
            message: "Please enter the Flashcard back text"
        },
        ]).then(function(basicText) {
           
            console.log("card front: " + basicText.cardFront);
            console.log("card Back: " + basicText.cardBack);
            basicCardFront = basicText.cardFront;
            basicCardBack = basicText.cardBack;
            // basicCard = "Front: " + basicCardFront + " Back: "  + basicCardBack;           
            addBasicText();

        });
}

function addBasicText() {

      // We will add the value to the bank file.
      fs.appendFile("basiccard.txt", basicCardFront, function(err) {
        if (err) {
          return console.log(err);
        }
      });

    
      // We will then print the value that was added (but we wont print the total).
      // console.log("FlashCard " + basicCardArr + ".");
      readBasicCard();
    }

    function readBasicCard() {
      
        // We will read the existing bank file
        fs.readFile("basiccard.txt", "utf8", function(err, cardData) {
          if (err) {
            return console.log(err);
          }
      
          // Break down all the numbers inside
          // flashcard = cardData.split("|");
          console.log(cardData);

        });
      }
