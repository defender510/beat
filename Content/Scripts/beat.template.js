/*
BEAT Template
*/

/* globals Chart:false, feather:false */
// collapse sidebar start

var collapseBtn = document.querySelector(".btn-collapse");
var sidebar = document.getElementById("sidebarMenu");
var searchBar = document.querySelector(".beat-search");
collapseBtn.addEventListener('click', function handleClick(event) {
  sidebar.classList.toggle("beat-micro-sidebar");
  searchBar.classList.toggle("shift-search");
  init_tooltip();
});
// collapse sidebar end

// initialize tooltips start

function init_tooltip(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  });
  if(sidebar.classList.contains('beat-micro-sidebar')){
    // console.log("Micro sidebar");
    
  }else{
    // console.log("Large Sidebar");
    tooltipList.forEach((tooltip) => {tooltip.dispose()});
  }
  
}
// initialize tooltips end

// fullscreen start
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

var btn_maximize = document.querySelector(".fa-expand");
var btn_minimize = document.querySelector(".fa-minimize");

btn_maximize.addEventListener('click', function handleClick(event) {
  // console.log("fullscreen");
  btn_minimize.classList.remove("d-none");
  btn_maximize.classList.add("d-none");
  openFullscreen();
});

btn_minimize.addEventListener('click', function handleClick(event) {
  // console.log("minimize");
  btn_maximize.classList.remove("d-none");
  btn_minimize.classList.add("d-none");
  closeFullscreen();
});
// fullscreen end

// sidebar toggle start
var beat_hamburger = document.querySelector(".beat-nav-toggler");
var sidebar_mask = document.querySelector(".sidebar-mask");
beat_hamburger.addEventListener('click', function handleClick(event) {
  sidebar_mask.classList.toggle("mask-on");
});
sidebar_mask.addEventListener('click', function handleClick(event) {
  sidebar_mask.classList.toggle("mask-on");
  bootstrap.Collapse.getOrCreateInstance(sidebar).toggle();
});
// sidebar toggle end
feather.replace()

// active menu start

 var path = window.location.pathname;
 path = path.replace(/\/$/, "");
 path = decodeURIComponent(path);
 if (path == '') {
 path = "/";
 }
 // console.log(path);
var navClass = document.querySelectorAll("#sidebarMenu .nav .nav-link");

for (const element of navClass) {
  if(element.href.includes(path) && !element.href.includes("#")){
    element.classList.add("active");
  }
}
// active menu end

var scroll_top = document.querySelector(".back-to-top");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll > 50){
      scroll_top.classList.add("show_top_btn");
    }else{
      scroll_top.classList.remove("show_top_btn");
    }
});

scroll_top.addEventListener('click', function handleClick(event) {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// back to top start

// back to top start end
// (function () {
//   'use strict'

//   feather.replace({ 'aria-hidden': 'true' })

//   // Graphs
//   var ctx = document.getElementById('myChart')
//   // eslint-disable-next-line no-unused-vars
//   var myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//       labels: [
//         'Sunday',
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday'
//       ],
//       datasets: [{
//         data: [
//           15339,
//           21345,
//           18483,
//           24003,
//           23489,
//           24092,
//           12034
//         ],
//         lineTension: 0,
//         backgroundColor: 'transparent',
//         borderColor: '#007bff',
//         borderWidth: 4,
//         pointBackgroundColor: '#007bff'
//       }]
//     },
//     options: {
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: false
//           }
//         }]
//       },
//       legend: {
//         display: false
//       }
//     }
//   })
// })();