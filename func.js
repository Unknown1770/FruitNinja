var play = false;
var score;
var life;
var fts = ['apple', 'banana', 'cherry', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
var step;
var action;
var n;

$(function() {

    // CLICKED ON START BUTTON
    $('#start').click(function() {
        if (play == true) {
            location.reload();
        } // if bracket close here
        else {
            play = true;
            score = 0;
            $('#value').html(score);
            $('#life').show();
            life = 3;
            addHearts(); // Function to display hearts as lives left
            $('#gameover').hide(); //If Game starts Again then hide gameover box
            $('#start').html("Reset Game");
            addfruits();

        } // else bracket close here
    }); //START BUTTON

    $('#frt1').mouseover(function() {
        score += 1;
        $('#value').html(score);
        $('#aud')[0].play();
        //Stopping the fruit from going down
        clearInterval(act);
        $('#frt1').hide();
        addfruits();
    });

    //--------------------FUNCTIONS-------------------------

    function addHearts() {
        $('#life').empty();
        for (i = 0; i < life; i++) {
            $('#life').append('<img  src="images/heart.png" class="lives">');
        }
    }

    function addfruits() {
        $('#frt1').show();
        chooseFruit();
        $('#frt1').css({ 'left': Math.round(550 * Math.random()), 'top': -50 });
        step = 1 + Math.round(5 * Math.random());

        //Moving the fruit down step by step
        act = setInterval(function() {
            $('#frt1').css('top', $('#frt1').position().top + step);
            //Check the positionof the fruit

            if ($('#frt1').position().top > $('#fruit').height()) {
                //Check wether we have any lives left or not
                if (life > 1) {
                    $('#frt1').show();
                    chooseFruit();
                    $('#frt1').css({ 'left': Math.round(550 * Math.random()), 'top': -50 });
                    step = 1 + Math.round(5 * Math.random());
                    //REDUCING LIFE BY 1
                    life--;
                    addHearts();
                } //if Bracket of life is Close
                else {
                    play = false;
                    $('#start').html('Play Again');
                    $("#gameover").show();
                    $("#gameover").html('<p>Game Over!</p> <p> Your Score is ' + score + '</p>');
                    $('#life').hide();
                    stop();
                }
            }
        }, 10)
    }


    function chooseFruit() {
        $('#frt1').attr('src', 'images/' + fts[Math.round(8 * Math.random())] + '.png');
    }

    //Stop Dropping Fruits
    function stop() {
        clearInterval(act);
        $('#frt1').hide();
    }


}); // Main function bracket close