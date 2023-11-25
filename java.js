let countDownDate = new Date ("Dec 12, 2023 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    var distance = countDownDate - now;

    let  days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let  minutes = Math.floor(distance % ((1000 * 60 * 60)) / (1000 * 60));
    let  seconds = Math.floor(distance % ((1000 * 60)) / 1000);


    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;

}, 1000);



