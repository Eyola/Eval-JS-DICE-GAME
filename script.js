$(() => {

    let globalOne = 0;
    let globalTwo = 0;
    let roundOne = 0;
    let roundTwo = 0;
    let dice = 0;
    $('#playerTwo').removeClass()
    $('.dice div').removeClass('one')
    let currentPlayer = false;
    const win = 100;

    $('#header').click(function newGame() {
        globalOne = 0;
        globalTwo = 0;
        roundOne = 0;
        roundTwo = 0;
        dice = 0;
        $('#roundOne, #globalOne, #roundTwo, #globalTwo').html('0');
        $('#playerOne').addClass('dotPlayer')
        $('#playerTwo').removeClass()
        $('#rollDice, #hold').prop('disabled', false)
        $('#bg-player').removeClass('player1 player2').addClass('player1');
        alert('Nouvelle partie lancée !');
    });

    $('#rollDice').click(function rollDice() {
        dice = Math.ceil(Math.random() * 6);
        console.log(dice)
        if (!currentPlayer) {
            roundOne += dice
            $('#roundOne').html(roundOne)
            if (dice == 1) {
                alert('Vous avez fait 1 : vous passez votre tour et perdez votre score temporaire')
                roundOne = 0;
                $('#roundOne').html('0');
                $('#playerOne').removeClass();
                $('#playerTwo').addClass('dotPlayer')
                $('#bg-player').removeClass('player1 player2').addClass('player2')
            }
        } else {
            roundTwo += dice
            $('#roundTwo').html(roundTwo)
            if (dice == 1) {
                alert('Vous avez fait 1 : vous passez votre tour et perdez votre score temporaire')
                roundTwo = 0;
                $('#roundTwo').html('0');
                $('#playerTwo').removeClass()
                $('#playerOne').addClass('dotPlayer')
                $('#bg-player').removeClass('player1 player2').addClass('player1')
            }
        }
        $('#dice').removeClass().addClass('dice' + dice)
    });

    $('#hold').click(function hold() {
        if (!currentPlayer) {
            globalOne += roundOne;
            $('#globalOne').html(globalOne);
            roundOne = 0;
            $('#roundOne').html('0');
            $('#playerOne').removeClass()
            $('#playerTwo').addClass('dotPlayer')
            $('#bg-player').removeClass('player1 player2').addClass('player2');
        } else {
            globalTwo += roundTwo;
            $('#globalTwo').html(globalTwo);
            roundTwo = 0;
            $('#roundTwo').html('0');
            $('#playerTwo').removeClass()
            $('#playerOne').addClass('dotPlayer')
            $('#bg-player').removeClass('player1 player2').addClass('player1');
        }
        currentPlayer = !currentPlayer
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