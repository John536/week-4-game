
    
    //variables to be set.
    var wins = 0;
    var losses = 0;
    //var score = 0;
    var currentScore = 0;
    var rScore = 0;
    var dScore = 0;
    var yScore = 0;
    var eScore = 0;
    var todaysScore = 0;



    //Computer picks a score. 
    var pickAScore = function() {
        todaysScore = Math.floor((Math.random() * 102) + 18); 
        console.log(todaysScore);
        document.querySelector("#score").innerHTML = todaysScore;
    }
    pickAScore();

    //computer assigns random value to crystals.

    //ruby
    var rubyScore = function() {
        rScore = Math.floor(Math.random() * 12);
        console.log("ruby " + rScore);
    }
    rubyScore();

    //diamond
    var diamondScore = function() {
        dScore = Math.floor(Math.random() * 12);
        console.log("diamond " + dScore);
    }
    diamondScore();

    //yellow stone
    var yellowScore = function() {
        yScore = Math.floor(Math.random() * 12);
        console.log("yellow " + yScore);
    }
    yellowScore();

    //emerald
    var emeraldScore = function() {
        eScore = Math.floor(Math.random() * 12);
        console.log("emerald " + eScore);
    }
    emeraldScore();


    //jquery assignments for crystals.	
    $(document).ready(function() {

        $("#ruby").on("click", function() {
            currentScore = currentScore + rScore;
            console.log(currentScore);
            document.querySelector("#currentScore").innerHTML = currentScore;
            conditions();
        })

        $("#diamond").on("click", function() {
            currentScore = currentScore + dScore;
            console.log(currentScore);
            document.querySelector("#currentScore").innerHTML = currentScore;
            conditions();
        })

        $("#yellow").on("click", function() {
            currentScore = currentScore + yScore;
            console.log(currentScore);
            document.querySelector("#currentScore").innerHTML = currentScore;
            conditions();
        })

        $("#emerald").on("click", function() {
            currentScore = currentScore + eScore;
            console.log(currentScore);
            document.querySelector("#currentScore").innerHTML = currentScore;
            conditions();
        })


//comparison operators for wins/losses.
        

//kev says put it in a function outside of the document ready and then call that function with each crystal...  kev says that the doc ready is what is read first and then the computer looks for those, which is why you cannot have the if statement in the doc.ready.

    })

function conditions() {
if (currentScore === todaysScore) {
            wins = wins + 1;
            console.log(wins);
            document.querySelector("#winloss").innerHTML = "Wins: " + wins + "  Losses: " + losses;
            pickAScore();
            rubyScore();
            diamondScore();
            yellowScore();
            emeraldScore();
            currentScore = 0;
            document.querySelector("#currentScore").innerHTML = currentScore;

        } else if (currentScore > todaysScore) {
            losses = losses + 1;
            console.log(losses);
            document.querySelector("#winloss").innerHTML = "Wins: " + wins + "  Losses: " + losses; 
            pickAScore();
            rubyScore();
            diamondScore();
            yellowScore();
            emeraldScore();
            currentScore = 0;
            document.querySelector("#currentScore").innerHTML = currentScore;
        }

}
 