//closed or open?
let toggleNavStatus = false;
//cosi è chiusa
//devo selezionare cosa verrà modificato 
let toggleNav = function() {
  let getSidebar = document.querySelector("#element-one");

  let getSecond = document.querySelector("#element-two");

  

  if (toggleNavStatus === false) {
    getSidebar.style.width = "92%";
    getSecond.style.width = "92%"

    toggleNavStatus = true;
    
  }
  else if (toggleNavStatus === true) {
    getSidebar.style.width = "0";
    getSecond.style.width = "0"

    toggleNavStatus = false;
    
  }

 
};


var myChart = document.getElementById('myChart').getContext('2d');

var totFlowChart = new Chart(myChart, {
  type:'line',//bar, horizontalBar, pie, line, daughnout, radar, polarArea.
  data:{
    labels:['1', '2', '3', '4', '5',  '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',],
    datasets:[{
       label: 'MONEY EARNED IN 1 MONTH',
      data:[1, 2],
      backgroundColor:'#FFA805',
      borderColor: '#053259',
      borderWidth:1.5,
      fill:'origin',
     
     

    }]
    
  },
   options: {
    scales: {
      y: {
       ticks: {
        color:'#053259'
       }
      },
      x: {
        ticks: {
          color:'#053259'
        }
      }
    }
   },






});
 
function updateChart() {
  const money = document.getElementById('money-data');
  console.log(money.value);
  totFlowChart.data.datasets[0].data.push(money.value);
  totFlowChart.update()
};
     
var form = document.getElementById('formo');
  form.addEventListener('click', function(e){
  e.preventDefault()
  });

console.log(totFlowChart.data.datasets[0].data[0])



let showChartStatus = false

let displayChart = function() {
  let getChart = document.querySelector('#myChart');

  if (showChartStatus === false) {
    getChart.style.visibility = 'hidden'
    showChartStatus = true;
  }
  else if (showChartStatus === true) {
    getChart.style.visibility = 'visible'
  };
} 

let reset = document.getElementById('money-data');

reset.addEventListener('click', function handleClick(e){
  e.preventDefault();

  reset.value = ''



})

