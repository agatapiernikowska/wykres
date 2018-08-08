// dodawanie nowego panelu do akordeonu i paneli do ekranu 6 i 7

// akordeon
var $foo = $(".foo");
var hash = 1;
$(".add").on("click", function () {
    var $newPanel = $foo.clone();
    var hashClass = 'zone-panel-' + generateHash();
    $newPanel.find(".collapse").removeClass("in");
    $newPanel.find(".accordion-toggle").data('hash', hashClass).attr("href",  "#" + (++hash)).text("Zone " + hash);
    $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse").removeClass("in");
    $($newPanel).addClass(hashClass);
    $("#accordion").append($newPanel.fadeIn());
    //
    // // panele
    //
    // var $tablesSixScreen = $(".tablesScreenSix");
    // var $tablesSevenScreen = $(".tablesScreenSeven");
    //
    // var nextTab = $('.tabs li').size()+1;
    // $('<li class="' + hashClass + '"><a href="#tab' + nextTab + '" data-toggle="tab">Zone ' + nextTab + '</a></li>').appendTo('.tabs');
    // $('<div class="tab-pane" id="tab'+nextTab+'"></div>').append($tablesSixScreen.clone()).appendTo('.tab-content').addClass(hashClass)
    //
    // var nextTab2 = $('.tabs2 li').size()+1;
    // $('<li class="' + hashClass + '"><a href="#tab' + nextTab2 + '" data-toggle="tab">Zone ' + nextTab2 + '</a></li>').appendTo('.tabs2');
    // $('<div class="tab-pane" id="tab'+nextTab2+'"></div>').append($tablesSevenScreen.clone()).appendTo('.tab-content2').addClass(hashClass);
    //
    // $('.tabs a:last').tab('show');
    // $('.tabs2 a:last').tab('show');
    //
    //
    // // usuwanie stref
    //
    // $('.deleteZone').off('click').on('click', hashClass => {
    //     $('.myModal')
    //         .modal('show');
    // });
    // $('.myModal .removeZone').off('click').on('click', function () {
    //     $('.' + $('#accordion .panel-heading:not(.collapsed)').data('hash') ).detach();
    //     $('.myModal')
    //         .modal('hide');
    // });
});


// screen five sliders
// zone1
var sliderOne = document.querySelector(".ventilation-op-fr");
var outputOne = document.querySelector(".one");
sliderOne.oninput = function() {
    outputOne.innerHTML = sliderOne.value + '%';
}

var sliderTwo = document.querySelector(".oper-fract-per-week");
var outputTwo = document.querySelector(".two");
sliderTwo.oninput = function() {
    outputTwo.innerHTML = sliderTwo.value + '%';
}

var sliderThree = document.querySelector(".heat-rec-rate-fract");
var outputThree = document.querySelector(".three");
sliderThree.oninput = function() {
    outputThree.innerHTML = sliderThree.value + '%';
}






// dodawanie losowego nr do klasy

var panelDefault = document.querySelectorAll('.panel-default');
var exTabFirst = document.querySelectorAll('.exTabFirst');
var exTabSecond = document.querySelectorAll('.exTabSecond');
var addZoneButton = document.getElementById('add');

function generateHash(){
    return Math.random().toString(16).substr(-5);
}

addZoneButton.addEventListener('click', function () {
    var randomNumber = generateHash();
    panelDefault.innerHTML = 'panel panel-default foo template ' + randomNumber;
    exTabFirst.innerHTML = 'exTabFirst ' + randomNumber;
    exTabSecond.innerHTML = 'exTabSecond ' + randomNumber;
});





//
// // tabela 3 ekran 6
//
// var thirdTable = [
//     ['Type', 'Type', 'Type', 'Type', 'Type', 'Type'],
//     ['Type', 1, 1, 1, 1, 1],
//     ['Type', 1, 1, '', '', ''],
//     ['Type', '', '', 1, '', ''],
//     ['Type', '', '', 1, '', ''],
//     ['Type', 1, '', 1, 1, 1],
//     ['Type', '', '', 1, 1, 1],
//     ['Type', '', '', 1, 1, 1],
//     ['Type', 1, 1, 1, 1, 1],
//     ['Type', 1, 1, 1, 1, 1],
//     ['Type', '', 1, '', '', ''],
//     ['Type', 1, 1, 1, 1, 1],
//     ['Type', 1, 1, 1, '', ''],
//     ['Type', 1, 1, 1, 1, 1]
// ];
//
// var maxLengthThree = thirdTable.reduce((a, b) => {
//     return a.length > b.length ? a : b
// }, '');
//
// function createTableThree(width, height) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     var tr, td, x, y;
//
//     for (y = 0; y < height; y += 1) {
//         tr = document.createElement('tr');
//         for (x = 0; x < width; x += 1) {
//             var singleCell = td = document.createElement('td');
//             singleCell = td.innerText = thirdTable[y][x];
//             tr.appendChild(td)
//         }
//         tbody.appendChild(tr)
//     }
//     table.appendChild(tbody);
//     table.className = "table table-bordered table-responsive-md table-striped text-center";
//     table.contentEditable = "true";
//     return table;
// }
//
// var tableEditableThree = (function () {
//     var tableContainer = document.getElementById('tableThree');
//     var tableThree = createTableThree(maxLengthThree.length, thirdTable.length);
//     tableContainer.appendChild(tableThree);
// })();
//
// // tabela 4 ekran 6
//
// var fourthTable = [
//     ['Type', 'Type'], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]
// ];
//
// var maxLengthFour = fourthTable.reduce((a, b) => {
//     return a.length > b.length ? a : b
// }, '');
//
// function createTableFour(width, height) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     var tr, td, x, y;
//
//     for (y = 0; y < height; y += 1) {
//         tr = document.createElement('tr');
//         for (x = 0; x < width; x += 1) {
//             var singleCell = td = document.createElement('td');
//             singleCell = td.innerText = fourthTable[y][x];
//             tr.appendChild(td)
//         }
//         tbody.appendChild(tr)
//     }
//     table.appendChild(tbody);
//     table.className = "table table-bordered table-responsive-md table-striped text-center";
//     table.contentEditable = "true";
//     return table;
// }
//
// var tableEditableFour = (function () {
//     var tableContainer = document.getElementById('tableFour');
//     var tableFour = createTableFour(maxLengthFour.length, fourthTable.length);
//     tableContainer.appendChild(tableFour);
// })();
//
// // tabela 5 ekran 6
//
// var fifthTable = [
//     ['Type', 'Type', 'Type'],
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1],
//     ['', 1, 1],
//     [1, 1, 1],
//     ['', 1, 1],
//     [1, 1, 1],
//     ['', 1, 1],
//     ['', 1, 1]
// ];
//
// var maxLengthFive = fifthTable.reduce((a, b) => {
//     return a.length > b.length ? a : b
// }, '');
//
// function createTableFive(width, height) {
//     var table = document.createElement('table');
//     var tbody = document.createElement('tbody');
//     var tr, td, x, y;
//
//     for (y = 0; y < height; y += 1) {
//         tr = document.createElement('tr');
//         for (x = 0; x < width; x += 1) {
//             var singleCell = td = document.createElement('td');
//             singleCell = td.innerText = fifthTable[y][x];
//             tr.appendChild(td)
//         }
//         tbody.appendChild(tr)
//     }
//     table.appendChild(tbody);
//     table.className = "table table-bordered table-responsive-md table-striped text-center";
//     table.contentEditable = "true";
//     return table;
// }
//
// var tableEditableFive = (function () {
//     var tableContainer = document.getElementById('tableFive');
//     var tableFive = createTableFive(maxLengthFive.length, fifthTable.length);
//     tableContainer.appendChild(tableFive);
// })();
//
//
//
//
//
// var TABLETEN = $('#tableTen');
//
// $('.table-add-ten').click(function () {
//     var $clone = TABLETEN.find('tr.hide').clone(true).removeClass('hide');
//     TABLETEN.find('table').append($clone);
// });
//
// var TABLEELEVEN = $('#tableEleven');
//
// $('.table-add-eleven').click(function () {
//     var $clone = TABLEELEVEN.find('tr.hide').clone(true).removeClass('hide');
//     TABLEELEVEN.find('table').append($clone);
// });
//
//

