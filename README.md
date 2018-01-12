# Flashcard-Generator Command Line App

## Flashcard Generator application is a backend that essentially constitutes an API that allows users to create two types of flashcards:
1. Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").
2. Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

## The flash card has three parts:
1. The full text. This is the entire sentence users need to remember: "George Washington was the first president of the United States."
2. The cloze deletion. This is the text we've chosen to remove: "George Washington".
3. The partial text. This is what we get if we remove the cloze deletion from the full text: "... was the first president of the United States.


<img src="https://github.com/acbrent25/Flashcard-Generator/blob/master/flashcard%20generator.gif?raw=true" alt="Command Line Flashcard Generator">
