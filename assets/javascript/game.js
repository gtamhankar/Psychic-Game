
    // <!-- LOGIC
    //     set tie, win, loss to 0
    //     check for keyup
    //     generate random key
    
    //     compare random key and keypress
    //        if equal
    //            win variable adds 1
    //            start new game by - 
    //                 generate new random letter
    //                 clean guesses so far
    //                 reset guesses left
    //        else 
    //                 check if gessesleft > 0 
    //                     append guesses so far
    //                     reduce 1 from guesses left
    //                 if guessesleft == 0 
    //                      loose variable adds 1
    //                     start new game by - 
    //                         generate new random letter
    //                         clean guesses so far
    //                         reset guesses left

    // -->                    
           

// <!-- variable declaration -->
var cntWins = 0;
var cntLosses = 0;
var text = "";
var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var randomKey = "";
var ttlGuesses = 5;
var guessesLeft = 5;
var GuessesSoFar = "";
var userInp = document.getElementById("varUser");

function randomG()
{
  for (var i = 0; i < 100; i++)
  randomKey = possible.charAt(Math.floor(Math.random() * possible.length));
}

function resetGame()
{
    guessesLeft = ttlGuesses;
    GuessesSoFar = "";
}

document.onkeyup = function(event) {
userInp.textContent = event.key;

    if (randomKey === userInp.textContent)
    {
        cntWins++;
        randomG();
        resetGame();
    }
    else 
    {
        if (guessesLeft > 0 )
        {
            guessesLeft--;
            if (GuessesSoFar.length > 0 )
            {
                GuessesSoFar = GuessesSoFar + "," + userInp.textContent;
            }
            else
            {
                GuessesSoFar = userInp.textContent;
            }
        }
        else
        {
            cntLosses++;
            randomG();
            resetGame();
        }
    }

// for testing purpose only
// document.getElementById("varRandom").textContent = randomKey;
document.getElementById("varLosses").textContent = cntLosses;
document.getElementById("varWins").textContent = cntWins;
document.getElementById("varGuessesLeft").textContent = guessesLeft;
document.getElementById("varUser").textContent = GuessesSoFar;
      };
