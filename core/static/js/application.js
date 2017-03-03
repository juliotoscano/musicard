//Bug se alternar as musicas quando estiver passando automaticamente.

function clock(minuto, segundo) {

    var s = 2;
    var m = 0;
    var stop = true;
    var intervalo;

    function nextMusic() {
        var id = $('.musicard').find('.in').attr('id');
        console.log(id);
        $('.panel-collapse').collapse('hide');

        $('#collapse_2').collapse('show');
    }

    intervalo = window.setInterval(function() {
        if (s == 0) {
            //Verificar quando estamos no minuto zero. O Stop sendo True significa que podemos parar quando
            //os sergundos chegarem a zero.
            if (stop) {
                $(segundo).html("0"+ s + "s");
                nextMusic();
                s = 2;
                m = 0;
                stop = true;
            }else{
                //A principio as musicas terao 2m30s de duracao. Dessa forma:
                m--;
                s = 59;
                //Quando minuto for igual a zero então daremos a ordem para quando os segundos voltarem
                //a zero o stop ja estar sendo True.
                if (m=0) {
                    stop = true;
                }
            }
        }

        if (s < 10){
            $(segundo).html("0"+ s + "s");
        }else{
            $(segundo).html(s + "s");
        };
        if (m < 10){
            $(minuto).html("0"+ m + "m");
        }else{
            $(minuto).html(m + "m");
        }; 
        s--;
    },1000);


    //Se houver o evento para esconder o collapse, entao sera acionado para que o evento de intervalo pare.
    $('.panel-collapse').on('hidden.bs.collapse', function () {
        //window.clearInterval(intervalo);
        $(this).find('.panel-body').html(' cifra');
    });
};



$(function() {
    
    //Identifica quando o collapse fechar, primeiro muda o icone depois insere o relogio e chama a funcao.
    //Quando fechar muda o icone. A desativacao do relogio esta sendo feito na propria funcao

    $('.play').on('click',function () {
        var card = $('.musicard').first().find('.collapse').addClass('in');
        $(card).trigger('show.bs.collapse');
    })

    $('.panel-collapse').on('show.bs.collapse', function () {
        var heading = '#' + $(this).attr('aria-labelledby');
        //casa para pegar o id do heading.
        var x = heading.length - 1;
        //id do card.
        var idcard = heading.substr(x);
        var minuto = "#minuto_" + heading.substr(x);
        var segundo = "#segundo_" + heading.substr(x);
        $(heading).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up').css('color', '#FFFFFF');
        $(heading).find('.fa-clock-o').css('color', '#76FF03');
        $(heading).find('.fa-chevron-down');
        $(this).find('.panel-body').prepend('<p><span id="minuto_'+idcard+'">00m</span> <span id="segundo_'+idcard+'">00s</span></p>');
        var min = $(this).find('.panel-body').find('p').find('span').first().attr('id');
        var seg = $(this).find('.panel-body').find('p').find('span').last().attr('id');
        clock(minuto, segundo);
    });

    $('.panel-collapse  ').on('hidden.bs.collapse', function () {
        var heading = '#' + $(this).attr('aria-labelledby');
        $(heading).find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#FFFFFF');
        $(heading).find('.fa-clock-o').css('color', '#999');
    });


    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

})