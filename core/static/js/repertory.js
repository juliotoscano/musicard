$(function() {

    //Mostra onde deve ser mostrado o resultado da pesquisa.
    $('#busca').bind('keyup', function(e) {
        $('#resultado div').html('<ul class="list-group res"><li class="list-group-item">Monalisa  \ Jorge Vercillo</li></ul>');
    });

    //Ao selecionar o resultado.
    $('.res').bind('click', function() {
        $('#resultado div').html('<ul class="list-group"><li class="list-group-item">...</li></ul>');
        $('tbody').append('<tr><td>2</td><td>Monalisa</td><td>Jorge Vercillo</td><td>D</td><td>2m10s</td><td><i class="fa fa-trash fa-lg" aria-hidden="true"></i></td>');
    });


});