var ws = new WebSocket("ws://localhost:8000/sendVote");
pollingChart;

function setUpChart(dataVotes) {
var ctx_live = document.getElementById("mycanvas");
         var myChart = new Chart(ctx_live, {
         type: 'bar',
           data: {
             labels: ['Pizza', 'Burger'],
             datasets: [{
               label: 'Pizza Vs Burger',
               data: dataVotes,
               fill: false,
               backgroundColor: ['#00eefa','#37dbff'],
               borderColor: '#000',
               borderWidth: 1
             }]
           },
           options: {
             plugins: {
               labels: {
                 render: 'image',
                 textMargin: -130,
                 images: [
                   {
                     src: 'https://image.freepik.com/free-vector/cute-pizza-cartoon-vector-icon-illustration-fast-food-icon-concept-flat-cartoon-style_138676-2588.jpg',
                     width: 120,
                     height: 120
                   },
                   {
                     src: 'https://image.freepik.com/free-vector/cute-burger-holding-knife-fork-cartoon-fast-food-icon-concept-isolated-flat-cartoon-style_138676-2204.jpg',
                     width: 120,
                     height: 120
                   }
                 ]
               }
             },
             scales: {
               yAxes: [{
                 ticks: {
                   beginAtZero: true
                 }
               }]
             }
           }
         });

pollingChart = myChart;
}

function myVote(voteTo) {
    var vote = voteTo === 'pizza' ? 0 : 1;
    pollingChart.data.datasets[0].data[vote] += 1;
    pollingChart.update();
    sendMessage(voteTo);
}


function sendMessage(votedTo) {
    ws.send(votedTo);
    event.preventDefault();
}