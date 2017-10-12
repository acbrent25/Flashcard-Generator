var inquirer = require('inquirer');
var fs = require("fs");

var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var basicCardArr = [];
var basicCardFront;
var basicCardBack;
var basicCard;
var partial;

/************************
  CHOOSE CARD TYPE
*************************/
inquirer.prompt([
    
      {
        type: "list",
        name: "chooseCardType",
        message: "What Kind of Flashcard Do You Want to Make?",
        choices: ["Basic", "Cloze"]
      }
    
    ]).then(function(card) {
    
      if (card.chooseCardType === "Basic") {
    
        console.log("==============================================");
        console.log("Basic Card");
        console.log("==============================================");

        createBasicCard();
        
      }
    
      else {
    
        console.log("==============================================");
        console.log("Cloze Card");
        console.log("==============================================");

        createClozeCard();
    
      }
    });
    
/************************
    CREATE BASIC CARD
************************/

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
           
            var newBasicCard = new BasicCard (basicText.cardFront, basicText.cardBack)
            fs.appendFile("basiccard.txt", "Flashcard front: " + basicText.cardFront + ", "  + " Flashcard Back: " +  basicText.cardBack + "\r\n", function(err) {
              if (err) {
                return console.log(err);
              }
            })
            // Print out current card
            console.log("==============================================");
            console.log("Current Card");
            console.log("------------");
            console.log("Flashcard front: " + basicText.cardFront + ", "  + " Flashcard Back: " +  basicText.cardBack);
            console.log("\n\r");
            console.log("==============================================");
            
            readCards();
            
          }
        )
      };

/************************
    CREATE BASIC CARD
************************/
    function createClozeCard(){
      inquirer.prompt([
          
          {
              type: "input",
              name: "text",
              message: "Please enter the full text"
          },
          {
              type: "input",
              name: "cloze",
              message: "Please enter the cloze"
          },
          ]).then(function(clozeText) {
              console.log(clozeText.text)
              var newClozeCard = new ClozeCard (clozeText.text, clozeText.cloze)
              
              partial = clozeText.text.replace(clozeText.cloze, "_____________");
              
              
              fs.appendFile("basiccard.txt", "Full Text: " + clozeText.text + ", "  + " Cloze: " +  clozeText.cloze + "\r\n", function(err) {
                if (err) {
                  return console.log(err);
                }
              })
              // Print out current card
              console.log("==============================================");
              console.log("Current Card");
              console.log("------------");
              console.log("Flashcard front: " + partial + ", "  + "\n\r" + " Flashcard Back: " +  clozeText.text);
              console.log("\n\r");
              console.log("==============================================");
              
              readCards();
              
            }
          )
        };

    function readCards() {
      
        // Read the existing bank file
        fs.readFile("basiccard.txt", "utf8", function(err, cardData) {
          if (err) {
            return console.log(err);
          }
          // Print out all cards
          console.log("==============================================");
          console.log("All Cards");
          console.log("----------");
          console.log(cardData);
          console.log("==============================================");

        });
      }
