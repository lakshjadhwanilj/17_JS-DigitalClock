function showTime(){
    var date = new Date();

    var hrs = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    var ampm = "AM";

    if(hrs == 0){
        hrs = 12;
    }

    hrs = hrs > 12 ? hrs - 12 : hrs;

    ampm = hrs < 12 ? "PM" : "AM";

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    var time = hrs + " : " + mins + " : " + secs + " " + ampm;

    document.querySelector('#my-clock').innerHTML = time;

    setTimeout(showTime, 1000);

}

showTime();