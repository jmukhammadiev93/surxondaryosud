/**
 * Created by Azamat Mirvosiqov on 24.11.2014.
 */

$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/css/jqvmap.css'));
$('head').append($('<script type="text/javascript"></script>').attr('src', '/js/jquery.vmap.js'));
$('head').append($('<script type="text/javascript"></script>').attr('src', '/js/vmap.uzbekistan.js'));

$(document).ready(function () {
    $('#vmap').css(
        {
            'width': '600px',
            'height': ' 400px',
            'margin-top': '10px',
            'float': 'left'
        }
    );


    $('.color_box .colorArea').hover(
        function () {
            $(this).find('p').fadeOut(0);
        },
        function () {
            $(this).find('p').fadeIn(200);
        }
    );

    $('.color_box .colorArea span').hover(
        function () {
            $('.color_box .colorArea span').fadeTo(0, 0.4);
            $(this).fadeTo(0, 1);
            filterRegions($(this).index());
        },
        function () {
            $('.color_box span').fadeTo(0, 1);
            filterRegions();
        });

    /*$('.jqvmap_pin').hover(function(){
     $(this).addClass('map_hover_contnet');
     $(this).find('.jqpin span').html(messages[$(this).attr('for')]);
     },
     function(){
     $(this).removeClass('map_hover_contnet');
     $(this).find('.jqpin span').html('');
     }
     );*/
});

var pin = "<div class='jqpin'><span></span></div>";

//if (typeof(colors) == "undefined") {
//    var colors = ['#00a2e0'];
//}
//
//if (typeof(regions) == "undefined") {
//    var regions = {
//        to: 0,
//        qo: 0,
//        an: 0,
//        bu: 0,
//        qa: 0,
//        no: 0,
//        gu: 0,
//        sa: 0,
//        fa: 0,
//        ji: 0,
//        na: 0,
//        te: 0,
//        xo: 0
//    };
//}

var id = null;
function filterRegions(id) {
    var regionsList = {};
    $.each(regions, function (key, value) {
        var elementColor = '#cdf3ff';
        if (id == value || id == null) {
            elementColor = colors[value];
        }
        regionsList[key] = elementColor;
    });
    $('#vmap').vectorMap('set', 'colors', regionsList);
    return false;
}

function makeMap(regions, messages, colors) {
    $('#vmap').html('');
    $('.jqvmap-label').remove();
    $('#vmap').vectorMap({
        map: 'uzbekistan',
        backgroundColor: '',
        color: '#00b7fb',
        hoverOpacity: 0.7,
        enableZoom: false,
        showTooltip: true,
        borderColor: '#fff',
        borderWidth: 1,
        borderOpacity: 1,
        colors: {
            to: colors[regions['to']],
            qo: colors[regions['qo']],
            an: colors[regions['an']],
            bu: colors[regions['bu']],
            qa: colors[regions['qa']],
            no: colors[regions['no']],
            gu: colors[regions['gu']],
            sa: colors[regions['sa']],
            fa: colors[regions['fa']],
            ji: colors[regions['ji']],
            na: colors[regions['na']],
            te: colors[regions['te']],
            xo: colors[regions['xo']]
        },
        //normalizeFunction: 'polynomial',
        //pins: {
        //	"bu":pin,
        //	"sa":pin,
        //	"qo":pin,
        //	"an":pin
        //	},
        onLabelShow: function (event, label, code) {
            label.html(messages[code]);
        },
        //onRegionClick: function (element, code, region) {
        //    document.location.href = '/regions/' + code;
        //}
    });
}

function strToArray(html){
    var arData = {};
    arData['name'] = {};
    arData['type'] = {};
    $(html + ' li').each(function(){
        var arName = $(this).attr('regName');
        var arType = $(this).attr('regType');
        var arVal = $(this).html();
        arData['name'][arName] = arVal;
        arData['type'][arName] = parseInt(arType) -1;
    });
    return arData;
}