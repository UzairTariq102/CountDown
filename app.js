var day = document.getElementById('day')
var hr = document.getElementById('hr')
var min = document.getElementById('min')
var sec = document.getElementById('sec')


var now = new Date().getTime()
var bakraEid = new Date('june 17, 2024, 12:00').getTime()
var diff = bakraEid - now
// console.log(diff)

var interval = setInterval(function () {
    diff = diff - 1000
    // console.log(diff);
    var calDay = Math.floor(diff / 1000 / 60 / 60 / 24)
    // console.log(calDay)
    var calHr = Math.floor(diff / 1000 / 60 / 60)
    // console.log(calHr)
    var calMin = Math.floor(diff / 1000 / 60)
    // console.log(calMin);
    var calSec = Math.floor(diff / 1000)
    // console.log(calSec);

    day.innerHTML = calDay + '<br>' + 'Days'
    hr.innerHTML = calHr + '<br>' + 'Hours'
    min.innerHTML = calMin + '<br>' + 'Minutes'
    sec.innerHTML = calSec + '<br>' + 'Seconds'


}, 1000)
