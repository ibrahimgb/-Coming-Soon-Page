
const countDownDate  =  new Date("Oct 24,2021 00:00:00").getTime();

day = document.getElementById("days");
hour = document.getElementById("hours");
minute = document.getElementById("minuts");
second = document.getElementById("seconds");

let x = setInterval(()=>{
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;

    
},1000) 