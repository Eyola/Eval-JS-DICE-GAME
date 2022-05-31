$(() => {

    const win = 100;
    let globalOne = 0;
    let globalTwo = 0;
    let roundOne = 0;
    let roundTwo = 0;
    let dice = 0;
    let isPlayer1 = false;
    $('#playerTwo').removeClass()
    $('.dice div').removeClass('one')
    $('#hold').prop('disabled', true);



    $('#header').click(function newGame() {
        globalOne = 0;
        globalTwo = 0;
        roundOne = 0;
        roundTwo = 0;
        dice = 0;
        isPlayer1 = false;
        $('#roundOne, #globalOne, #roundTwo, #globalTwo').html('0');
        $('#playerOne').addClass('dotPlayer')
        $('#playerTwo').removeClass()
        $('#rollDice, #hold').prop('disabled', false)
        $('#bg-player').removeClass('player1 player2').addClass('player1');
        alert('Nouvelle partie lancée !');
        $('#hold').prop('disabled', true);
    });

    $('#rollDice').click(function rollDice() {
        dice = Math.ceil(Math.random() * 6);
        console.log(dice)
        if (!isPlayer1) {
            roundOne += dice
            $('#roundOne').html(roundOne)
            $('#hold').prop('disabled', false);
            if (dice == 1) {
                alert('Vous avez fait 1 : vous passez votre tour et perdez votre score temporaire')
                roundOne = 0;
                isPlayer1 = !isPlayer1;
                $('#roundOne').html('0');
                $('#playerOne').removeClass();
                $('#playerTwo').addClass('dotPlayer')
                $('#bg-player').removeClass('player1 player2').addClass('player2')
                $('#hold').prop('disabled', true);
            }
        } else {
            roundTwo += dice
            $('#roundTwo').html(roundTwo)
            $('#hold').prop('disabled', false);
            if (dice == 1) {
                alert('Vous avez fait 1 : vous passez votre tour et perdez votre score temporaire')
                roundTwo = 0;
                isPlayer1 = !isPlayer1;
                $('#roundTwo').html('0');
                $('#playerTwo').removeClass()
                $('#playerOne').addClass('dotPlayer')
                $('#bg-player').removeClass('player1 player2').addClass('player1')
                $('#hold').prop('disabled', true);
            }
        }
        $('#dice').removeClass().addClass('dice' + dice)
    });

    $('#hold').click(function hold() {
        if (!isPlayer1) {
            globalOne += roundOne;
            $('#globalOne').html(globalOne);
            roundOne = 0;
            $('#roundOne').html('0');
            $('#playerOne').removeClass()
            $('#playerTwo').addClass('dotPlayer')
            $('#bg-player').removeClass('player1 player2').addClass('player2');
            $('#hold').prop('disabled', true);
        } else {
            globalTwo += roundTwo;
            $('#globalTwo').html(globalTwo);
            roundTwo = 0;
            $('#roundTwo').html('0');
            $('#playerTwo').removeClass()
            $('#playerOne').addClass('dotPlayer')
            $('#bg-player').removeClass('player1 player2').addClass('player1');
            $('#hold').prop('disabled', true);
        }
        isPlayer1 = !isPlayer1
        if (globalOne >= 100) {
            console.log(globalOne)
            alert('Joueur 1 a gagné !');
            $('#rollDice').prop('disabled', true);
            $('#hold').prop('disabled', true);
        }
        if (globalTwo >= 100) {
            console.log(globalTwo);
            alert('Joueur 2 a gagné !');
            $('#rollDice').prop('disabled', true);
            $('#hold').prop('disabled', true);
        }
    });
})