
// tabela 3 ekran 6

var thirdTable = [
  ['Type of Use','Basement','Ground floor','Ground floor','Second floor','Third floor'],
  ['Offices',193,162,94,19,19],
  ['Medical laboratories',579,70,'','',''],
  ['Operating rooms','','',90,'',''],
  ['Intensive care','','',90,'',''],
  ['Medical offices',35,'',81,17,17],
  ['Hospitalization','','',118,315,315],
  ['Kitchen','','',11,25,25],
  ['Waiting rooms',383,341,47,79,79],
  ['Toilet/changing rooms',392,209,220,119,119],
  ['Conferenzce room','',108,'','',''],
  ['Corridors',184,253,301,269,269],
  ['Technical rooms',104,31,7,'',''],
  ['Totals by Floor',1870,1174,1042,843,843]
];

var maxLengthThree = thirdTable.reduce((a, b) => { return a.length >  b.length ? a : b}, '' );

function createTableThree(width, height) {
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  var tr, td, x, y;

  for (y = 0; y < height; y += 1) {
    tr = document.createElement('tr');
    for (x = 0; x < width; x += 1) {
      var singleCell = td = document.createElement('td');
      singleCell = td.innerText=thirdTable[y][x];
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
  table.appendChild(tbody);
  table.className = "table table-bordered table-responsive-md table-striped text-center";
  table.contentEditable="true";
  return table;
}

var tableEditableThree = (function () {
  var tableContainer = document.getElementById('tableThree');
  var tableThree = createTableThree(maxLengthThree.length, thirdTable.length);
  tableContainer.appendChild(tableThree);
})();

// tabela 4 ekran 6

var fourthTable = [
  ['HVAC','VENTILATION'], [1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]
];

var maxLengthFour = fourthTable.reduce((a, b) => { return a.length >  b.length ? a : b}, '' );

function createTableFour(width, height) {
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  var tr, td, x, y;

  for (y = 0; y < height; y += 1) {
    tr = document.createElement('tr');
    for (x = 0; x < width; x += 1) {
      var singleCell = td = document.createElement('td');
      singleCell = td.innerText=fourthTable[y][x];
      tr.appendChild(td)
    }
    tbody.appendChild(tr)
  }
  table.appendChild(tbody);
  table.className = "table table-bordered table-responsive-md table-striped text-center";
  table.contentEditable="true";
  return table;
}

var tableEditableFour = (function () {
  var tableContainer = document.getElementById('tableFour');
  var tableFour = createTableFour(maxLengthFour.length, fourthTable.length);
  tableContainer.appendChild(tableFour);
})();


$('.table-remove').click(function () {
  $(this).parents('tr').detach();
});

var TABLETEN = $('#tableTen');

$('.table-add-ten').click(function () {
  var $clone = TABLETEN.find('tr.hide').clone(true).removeClass('hide');
  TABLETEN.find('table').append($clone);
});

var TABLEELEVEN = $('#tableEleven');

$('.table-add-eleven').click(function () {
  var $clone = TABLEELEVEN.find('tr.hide').clone(true).removeClass('hide');
  TABLEELEVEN.find('table').append($clone);
});



// ekran 5 zones

function inputScreenFiveZone_1(){

  var form = document.querySelector(".zone_1");
  var labelsNames = ['Zone area AF (m2)', 'Window area (m2)', 'Volume (m3)', 'Specific heat capacity (J/m2K)', 'Heating setpoint (°C)', 'Cooling setpoint (°C)',
    'Ventilation airflow rate (m3/s)', 'Heating system COP', 'Cooling system EER', 'Electrical consumption (kWh/year)', 'Ventilation preheating setpoint',
    'Ventilation precooling setpoint', 'Ventilation heat recovery system', 'Ventilation heat recovery system'];
  var inputsValues = [1870, 142.73, 6358, 1456, 23, 20, 60, 1456, 23];
  for(var i=0; i<14; i++)
  {
    var input = document.createElement('input');
    var label = document.createElement('label');
    input.type = 'number';
    input.className='form-control';
    input.required = true;
    input.contentEditable= "true";
    form.appendChild(label);
    form.appendChild(input);
    label.innerText = labelsNames[i];
    input.value = inputsValues[i];
  }
};
inputScreenFiveZone_1();

function inputScreenFiveZone_2(){

  var form = document.querySelector(".zone_2");
  var labelsNames = ['Heating unit COP', 'Heating distribution network efficiency (%)', 'Heating terminal units efficiency (%)', 'Heating auxillary power (W/m2', 'Cooling unit EER', 'Cooling distribution network efficiency (%)',
    'Cooling terminal units efficiency (%)', 'Cooling auxilliary power (W/m2)'];
  var inputsValues = [3.2, 0.965, 0.85, 5, 2.7, 0.98, 0.93, 5];
  for(var i=0; i<8; i++)
  {
    var input = document.createElement('input');
    var label = document.createElement('label');
    input.type = 'number';
    input.className='form-control';
    input.required = true;
    input.contentEditable= "true";
    form.appendChild(label);
    form.appendChild(input);
    label.innerText = labelsNames[i];
    input.value = inputsValues[i];
  }
};
inputScreenFiveZone_2();

function inputScreenFiveZone_3(){

  var form = document.querySelector(".zone_3");
  var labelsNames = ['Rated power in non Heated/Cooled Areas (W)', 'Total Rated Power (W)', 'Specific Heat Capacity (J/Km2', 'Total height (m)', 'Useful height (m)', 'Cooling unit EER'];
  var inputsValues = [998.4, 394668, 165000, 4.3, 3.4];
  for(var i=0; i<5; i++)
  {
    var input = document.createElement('input');
    var label = document.createElement('label');
    input.type = 'number';
    input.className='form-control';
    input.required = true;
    input.contentEditable= "true";
    form.appendChild(label);
    form.appendChild(input);
    label.innerText = labelsNames[i];
    input.value = inputsValues[i];
  }
};
inputScreenFiveZone_3();

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

var sliderFour = document.querySelector(".heating-system-inter");
var outputFour = document.querySelector(".four");
sliderFour.oninput = function() {
  outputFour.innerHTML = sliderFour.value + '%';
}

var sliderFive = document.querySelector(".cooling-system-inter");
var outputFive = document.querySelector(".five");
sliderFive.oninput = function() {
  outputFive.innerHTML = sliderFive.value + '%';
}

var sliderSix = document.querySelector(".total-loss-fact-for-heating-sys-1");
var outputSix = document.querySelector(".six");
sliderSix.oninput = function() {
  outputSix.innerHTML = sliderSix.value + '%';
}

var sliderSeven = document.querySelector(".total-loss-fact-for-heating-sys-2");
var outputSeven = document.querySelector(".seven");
sliderSeven.oninput = function() {
  outputSeven.innerHTML = sliderSeven.value + '%';
}