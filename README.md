# Let's Play Rock, Paper, Scissors, Lizard and Spoke

Rock Paper Scissors Lizard Spock is an extension of the classic game of chance, Rock Paper Scissors, created by Sam Kass and Karen Bryla.

Sam Kass explains he created the expanded game because it seemed like most games of Rock Paper Scissors with people you know would end in a tie.

Rock Paper Scissors Lizard Spock was first mentioned in the Season 2 episode, The Lizard-Spock Expansion, the title of which references the game. It was last mentioned in The Rothman Disintegration.

As Sheldon explains, "Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors."

To play you must choose one of the available elements and the machine will choose another randomly. Then the result of your play will be shown according to the rules on the next screen.

[You can access the page through this link](https://alopmel.github.io/Portfolio2-Let-sPlay/)

<img src="assets\images\responsive.png" width="800">

## FEATURES

* **HEADER**

    * The header is at the top and shows the name of the and the score that the user has, which starts at 0.

    * The name of the page corresponds to the name of the game.

    * The score will add a point when the user wins, it will remain the same when it draws and it will subtract one when it loses. If the user has reached zero, he does not continue subtracting but remains at zero until he wins again.

<img src="assets\images\header.png" width="500">

* **Game Board**

    * On the game board, we find five images forming a pentagon.

    * Each of the images is of a different colour and corresponds to the different elements that we have to choose from.

    * When we pass over each image it has an animation that makes the image stand out from the others.

<img src="assets\images\elements-section.png" width="500">

* **Result Board**

    * This section shows the winner after the user chooses one of the options they have.
    * In the first place, a descriptive text is shown below the header of why it has won, lost or tied.

    * Below are the images of what the user and the CPU have chosen.

    * In the middle of the two images, the user's result is shown and a button that allows him to return to the initial game board in case he wants to play again.

<img src="assets\images\result.png" width="500">

* **Footer**

    * This part shows a button that opens a modal window with the rules of the game.

<img src="assets\images\rules.png" width="500">

## TESTING 
 
* I have tested the game on Firefox, Microsoft Edge, and Chrome.
    
* In all search engines, it works correctly, it also maintains the same font and
dimensions to adapt to various devices. So it is confirmed to be responsive.

* Tested on mobile devices, the game works. The user can interact with the game on a
touch screen.
    
* The dimensions are also correct. The letters are the right size for reading, the
rules are explained simply and clearly. 
    
* The button images are clear and intuitive and they are the correct size. On mobile,
you can interact and press buttons with ease and space.

* I used the lighthouse test to confirm that the page is responsive, accessible and
complies with the established standards for its correct operation.

<img src="assets\images\lighthouse.png" width="800">

## BUGS

* I ran into the following error in console:
**Failed to load resource: the server responded with a status of 400 ()**

* It occurred because in the imported link for the font when putting the weight I
separated it with a quotation mark.

<img src="assets\images\fonts.png" width="500">

* I solved it by putting **"&"** between 600 and 700 to separate both thicknesses.

## VALIDATOR TESTING

* HTML
    *  I passed the W3C HTML Validator but with several warnings.

<img src="assets\images\validation.png" width="500">

* CSS
    *  No errors were found when passing the W3C CSS Validator (Jigsaw)

<img src="assets\images\css-validator.png" width="500">

## UNFIXED BUGS

No unfixed bugs

## DEPLOYMENT 

* I deploy the site on GitHub pages. The steps to do it were the following:

    * Firs in our GitHub repository, you must got to Settings tab

    * Once there, I from the source section drop-down menu and selected my main branch.

    * Finally, selecting the branch creates a link that takes me to my web page.

     * [You can access the page through this link](https://alopmel.github.io/Portfolio2-Let-sPlay/)

## CREDITS

**Images**

* The images were cropped from an image downloaded from google. I cut them on the following online page: 

    * [You can access the page through this link](https://crop-circle.imageonline.co/es/)

**Media**

* To understand and be inspired by a different logic of the game I relied on the following tutorial:

    * [You can access to the tutorial through this link](https://www.youtube.com/watch?v=_LpFG9VlTAY)
* I was also inspired by this other tutorial to deconstruct the code and reorder it. I was also inspired by the design.

    * [You can access to the tutorial through this link](https://www.youtube.com/watch?v=HcppIYQLTxY&t=3072s)


