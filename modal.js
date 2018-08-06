// $("#start-button").click(function () {
//   var step = -1;
//   fake_elaboration(step);
// });
//
// function fake_elaboration(step) {
//   setTimeout(function () {
//     step++;
//     $(".progress-bar").width(step + "%");
//     $("#progress-description").html(step + "%");
//     if (step != 100) {
//       fake_elaboration(step);
//     } else {
//       setTimeout(function () {
//         $("#progress-description").html("Completed!");
//         $(".progress").removeClass("progress-striped active");
//         $(".progress-bar").addClass("progress-bar-success");
//         $("#start-button").toggleClass("btn-primary btn-default");
//       }, 100);
//     }
//   }, 50);
// }

// Tabela 1 ekran 2

var firstTable = [
    ['θext(°)', 13.018, 11.823, 13.615, 15.683, 19.848, 23.219, 27.253, 27.395, 25.118, 21.505, 17.004, 13.809],
    ['Isol_N(W/m2)', 77.777, 98.029, 139.731, 195.732, 223.434, 250.785, 248.126, 213.287, 171.602, 124.476, 85.626, 77.010],
    ['Isol_E(W/m2)', 122.851, 137.935, 184.485, 240.999, 259.771, 284.148, 287.201, 261.433, 227.367, 174.997, 130.426, 130.719],
    ['Isol_S(W/m2)', 151.192, 156.289, 189.663, 234.259, 237.378, 253.942, 256.582, 242.389, 228.132, 202.431, 161.436, 172.891],
    ['Isol_W(W/m2)', 84.728, 107.612, 151.988, 213.584, 239.842, 266.077, 262.301, 226.337, 188.083, 141.058, 95.084, 85.738],
    ['Isol_Roof(W/m2)', 138.301, 167.398, 235.647, 330.505, 365.526, 409.537, 410.552, 359.975, 299.289, 221.883, 152.107, 143.520]
];
var thText = ['Month', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var maxLength = firstTable.reduce((a, b) => {
    return a.length > b.length ? a : b
}, '');

function createTableOne(width, height) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var th, tr, td, x, y;




    for (y=0; y<1; y+=1) {
        var th = document.createElement("th");
        th.innerText = thText[y][x];


    for (y = 0; y < height; y += 1)
        tr = document.createElement('tr');
        tr.appendChild(th);
        for (x = 0; x < width; x += 1) {
         td = document.createElement('td');
            td.innerText = firstTable[y][x];
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }
    table.appendChild(tbody);
    table.className = "table table-bordered table-responsive-md table-striped text-center";
    table.contentEditable = "true";
    return table;
}

var tableEditableOne = (function () {
    var tableContainer = document.getElementById('tableOne');
    var tableOne = createTableOne(maxLength.length, firstTable.length);
    tableContainer.appendChild(tableOne);
})();
