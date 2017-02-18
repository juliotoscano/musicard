//Bug se alternar as musicas quando estiver passando automaticamente.

function clock(minuto, segundo) {

    var s = 2;
    var m = 0;
    var stop = true;
    var intervalo;

    function nextMusic() {
        $('.panel-collapse').collapse('hide');
        $('#collapseTwo').collapse('show');
    }

    intervalo = window.setInterval(function() {
        if (s == 0) {
            //Verificar quando estamos no minuto zero. O Stop sendo True significa que podemos parar quando
            //os sergundos chegarem a zero.
            if (stop) {
                document.getElementById(segundo).innerHTML = "0"+ s + "s";
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

        if (s < 10) document.getElementById(segundo).innerHTML = "0" + s + "s"; else document.getElementById(segundo).innerHTML = s + "s";
        if (m < 10) document.getElementById(minuto).innerHTML = "0" + m + "m"; else document.getElementById(minuto).innerHTML = m + "m";
        s--;
    },1000);


    //Se houver o evento para esconder o collapse, entao sera acionado para que o evento de intervalo pare.
    $('.panel-collapse').on('hidden.bs.collapse', function () {
        //window.clearInterval(intervalo);
        $(this).find('.panel-body').html(' cifra');
    });
};



$(function() {
    //Esconder todos os collapses antes de mostrar algum outro.
    $('.panel-heading').bind('mousedown', function() {
        $('.panel-collapse').off('show.bs.collapse');
        $('.panel-collapse').collapse('hide');
    });

    //Identifica quando o collapse fechar, primeiro muda o icone depois insere o relogio e chama a funcao.
    //Quando fechar muda o icone. A desativacao do relogio esta sendo feito na propria funcao
    $('.panel-heading').bind('mouseup', function() {
        $('.panel-collapse').on('show.bs.collapse', function () {
            var heading = '#' + $(this).attr('aria-labelledby');
            var minuto = "minuto_" + heading;
            var segundo = "segundo_" + heading;
            $(heading).find('.fa-chevron-down').removeClass('fa-chevron-down').addClass('fa-chevron-up').css('color', '#FFFFFF');
            $(heading).find('.fa-clock-o').css('color', '#76FF03');
            $(heading).find('.fa-chevron-down')
            $(this).find('.panel-body').prepend('<p><span id="minuto_'+heading+'">00m</span> <span id="segundo_'+heading+'">00s</span></p>');
            clock(minuto, segundo);
        });
        $('.panel-collapse  ').on('hidden.bs.collapse', function () {
            var heading = '#' + $(this).attr('aria-labelledby');
            $(heading).find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down').css('color', '#FFFFFF');
            $(heading).find('.fa-clock-o').css('color', '#999');
        });

    });

    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

})