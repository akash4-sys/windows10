export function Showtime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    
    if(h === 0){
        h = 12;
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    
    var time = h + ":" + m;
    document.getElementById("ClockDisplay").innerText = time;
    document.getElementById("ClockDisplay").textContent = time;
    
    setTimeout(Showtime, 59000);
}

export function Showdate(){
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    
    var todaydate = d + '-0' + m + '-' + y;
    document.getElementById("DateDisplay").innerText = todaydate;
}