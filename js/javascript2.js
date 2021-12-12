
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Health', 'Mhl'],
    ['Proteins',54.8],
    ['Healthy Oils',48.6],
    ['Vegetables',44.4],
    ['Fruits',23.9],
    ['Carbs',14.5]
    ]);

    var options = {
    title:'IMPORTANT ELEMENTS',
    is3D:true
    };

    var chart = new google.visualization.PieChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }


      function weightConverter(valNum) {
    document.getElementById("outputGrams").innerHTML=valNum/0.001;
  }
