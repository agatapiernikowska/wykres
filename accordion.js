// dodawanie nowego panelu do akordeonu i paneli do ekranu 6 i 7

var $foo = $(".foo");
var hash = 1;
$(".add").on("click", function () {
  var $newPanel = $foo.clone();
  var hashClass = 'zone-panel-' + generateHash();
  $newPanel.find(".collapse").removeClass("in");
  $newPanel.find(".accordion-toggle").attr("href",  "#" + (++hash)).text("Zone " + hash);
  $newPanel.find(".panel-collapse").attr("id", hash).addClass("collapse").removeClass("in");
  $($newPanel).addClass(hashClass);
  $("#accordion").append($newPanel.fadeIn());
  var nextTab = $('.tabs li').size()+1;
  $('<li><a href="#tab'+nextTab+'" data-toggle="tab">Zone '+nextTab+'</a></li>').appendTo('.tabs');
  $('<div class="tab-pane" id="tab"></div>').appendTo('.tab-content').addClass(hashClass);
  var nextTab2 = $('.tabs2 li').size()+1;
  $('<li><a href="#tab'+nextTab2+'" data-toggle="tab">Zone '+nextTab2+'</a></li>').appendTo('.tabs2');
  $('.tabs a:last').tab('show');
  $('.tabs2 a:last').tab('show');
  $('.deleteZone').click(function () {
    $newPanel.remove(hashClass);

  });
});


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





