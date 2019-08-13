
# Code Katas

## The Bee Game

The objective of this exercise is to create a .Net application that performs the following tasks, using C#:

* A web page must be produced as the interface to play the game. Styling is neither expected nor necessary.
* A button must be present to kick off the process of hitting a random bee.
* All code must be submitted to work in a local environment. Hosted solutions will be rejected.
* The game must adhere to the following rules and constraints.

There are three types of bees in this game:

### Queen Bee

* The Queen Bee has a lifespan of 100 Hit Points.
* When the Queen Bee is hit, 8 Hit Points are deducted from her lifespan.
* If/When the Queen Bee has run out of Hit Points, All remaining alive Bees automatically run out of hit points.
* There is only 1 Queen Bee.

### Worker Bee 

* Worker Bees have a lifespan of 75 Hit Points.
* When a Worker Bee is hit, 10 Hit Points are deducted from his lifespan.
* There are 5 Worker Bees.

### Drone Bee

* Drone Bees have a lifespan of 50 Hit Points.
* When a Drone Bee is hit, 12 Hit Points are deducted from his lifespan.
* There are 8 Drone Bees

To play, there must be a button that enables a user to “hit” a random bee. The selection of a bee must be random. When the bees are all dead, the game must be able to reset itself with full life bees for another round. The application must run through a browser.

## Eight Queens

The "eight queens" puzzle is a well-known puzzle, going back to 1848. The problem is to try to place eight queens on a chessboard so that none of them are attacking any of the others - remember that the queen can move as far as she likes vertically, horizontally or diagonally. You can't place two queens in the same row, for example, so on a normal chessboard (8 by 8), you can't put nine or more queens. Eight is the maximum.  

The puzzle below shows an empty 4 by 4 chessboard, all in gray. The 4 by 4 board is easier than the 8 by 8, so it's a good size to start with. Click on a square to place a queen, and the square will turn green. The squares that the queen is attacking will turn blue. See if you can place four queens on the 4 by 4 board! To remove a queen, click on it again.  

## Social Media Lookup Test

Write an application that:

* Takes in a person’s name
* Searches a social media network for that person
* Returns known details for that person

Feel free to connect to any social media site you want (eg. Facebook, Twitter, LinkedIn), or even mock your own. 

Your code should be written in such a way that the application could easily be changed to connect to another social media site or multiple sites, consolidating the responses.

This challenge should only take you a couple of hours.  If you feel that any of your code could be improved but you have run out of time, please comment your code to say what you would have liked to have done.

## Simple Challenge 1

Write a method that takes in the age of a person and displays it on screen, the output of the program should be 'You are {age} years old.'

## Simple Challenge 2  

Write an interactive method that displays the asterisk pattern below: ***** **** *** ** *

## Simple Challenge 3  

Write a method that declares an integer variable, one float variable, and one string variable. The method should take in a Array of type objects with the following value 5, 4.3, "String" and associate the objects to the correct variables and then display them on screen.
