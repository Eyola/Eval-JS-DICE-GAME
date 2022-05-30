$(() => {

    let globalOne = 0;
    let globalTwo = 0;
    let roundOne = 0;
    let roundTwo = 0;
    let dice = 0;
    $('#playerTwo').removeClass()
    $('.dice div').removeClass('one')

    const win = 100;

    $('#header').click(function newGame() {
        globalOne = 0;
        globalTwo = 0;
        roundOne = 0;
        roundTwo = 0;
        dice = 0;
        $('#roundOne').html('0');
        $('#globalOne').html('0');
        $('#roundTwo').html('0');
        $('#globalTwo').html('0');
        $('#playerOne').addClass('dotPlayer')
        $('#playerTwo').removeClass()
        $('#rollDice').prop('disabled', false)
        $('#bg-player').removeClass('player1 player2').addClass('player1');
        alert('Nouvelle partie lancée !');
    });

    $('#rollDice').click(function rollDice() {
        dice = Math.ceil(Math.random() * 6);
        console.log(dice)
        if ($('#playerOne').hasClass('dotPlayer')) {
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
        } else if ($('#playerTwo').hasClass('dotPlayer')) {
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
        if (dice == 1) {
            $('.dice div').removeClass()
            $('#one').addClass('one')
        }
        if (dice == 2) {
            $('.dice div').removeClass()
            $('#two').addClass('two')
            $('#three').addClass('three')
        }
        if (dice == 3) {
            $('.dice div').removeClass()
            $('#one').addClass('one')
            $('#two').addClass('two')
            $('#three').addClass('three')
        }
        if (dice == 4) {
            $('.dice div').removeClass()
            $('#two').addClass('two')
            $('#three').addClass('three')
            $('#four').addClass('four')
            $('#five').addClass('five')
        }
        if (dice == 5) {
            $('.dice div').removeClass()
            $('#one').addClass('one')
            $('#two').addClass('two')
            $('#three').addClass('three')
            $('#four').addClass('four')
            $('#five').addClass('five')
        }
        if (dice == 6) {
            $('.dice div').removeClass()
            $('#two').addClass('two')
            $('#three').addClass('three')
            $('#four').addClass('four')
            $('#five').addClass('five')
            $('#six').addClass('six')
            $('#seven').addClass('seven')
        }
        return dice;
    });

    $('#hold').click(function hold() {
        if ($('#playerOne').hasClass('dotPlayer')) {
            globalOne += roundOne;
            $('#globalOne').html(globalOne);
            roundOne = 0;
            $('#roundOne').html('0');
            $('#playerOne').removeClass()
            $('#playerTwo').addClass('dotPlayer font')
            $('#bg-player').removeClass('player1 player2').addClass('player2');
        } else if ($('#playerTwo').hasClass('dotPlayer')) {
            globalTwo += roundTwo;
            $('#globalTwo').html(globalTwo);
            roundTwo = 0;
            $('#roundTwo').html('0');
            $('#playerTwo').removeClass()
            $('#playerOne').addClass('dotPlayer font')
            $('#bg-player').removeClass('player1 player2').addClass('player1');
        }
        if (globalOne >= 100) {
            console.log(globalOne)
            alert('Joueur 1 a gagné !');
            $('#rollDice').prop('disabled', true);
        }
        if (globalTwo >= 100) {
            console.log(globalTwo);
            alert('Joueur 2 a gagné !');
            $('#rollDice').prop('disabled', true);
        }
    });
})