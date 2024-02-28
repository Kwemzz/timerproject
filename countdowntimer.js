//To set date and time for countdown
var countDownDate = new Date("March 8, 2024 11:30:00").getTime();
//For time to change after each second
var x = setInterval(function(){
    //To find out current date and time
    var now = new Date().getTime();
    //To find deviation between both times
    var distance = countDownDate - now;
    //To find distance in days, hours, minutes and seconds
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance %(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance % (1000*60)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<=0){
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Time Has Elapsed";
    }

},1000);


