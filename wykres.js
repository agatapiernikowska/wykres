
var dataset = [-10, -20, -28, -24, 55, 47, 14, 16 ,5 , 2, -8, -10];
var chartOne = document.getElementById("weatherChart");
var weatherChart = new Chart(chartOne, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
      label: 'Min',
      data: [-10, -30, -8, -2, 5, 4, 14, 16 ,5 , 2, -8, -10],
      fontSize:'3rem',
      backgroundColor: [
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)'
      ],
      borderColor: [
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)',
        'rgba(5, 8, 60, 0.6)'
      ],
      borderWidth: 1
    },
      {
        label: 'Max',
        data: [5, 4, 12, 23, 27, 26, 38, 42, 27, 18, 12 ,5],
        backgroundColor: [
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)',
          'rgba(252, 2, 15, 0.6)'
        ],
        borderColor: [
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)',
          'rgba(252, 2, 15, 0.7)'
        ],
        borderWidth: 1
      },
      {
        type: 'line',
        label: 'Avg',
        data: [-5, -5, -5, -5, -5, -5, -5, -5, -5, -5, - 5, -5],
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0, 0, 0, 1)",
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        display:false,
        gridLines: {
          display:false
        },
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }],
      xAxes: [{
        display:false,
        gridLines: {
          display:false
        },
        stacked: true,
        ticks: {
          beginAtZero: true
        }
      }]

    }
  }
});
weatherChart.data.datasets[2].data = dataset
weatherChart.update()