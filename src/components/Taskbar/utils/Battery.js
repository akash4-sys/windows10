export default function Battery() {
    navigator.getBattery()
    .then((e) =>{
        if(e.charging){
            document.getElementById('batteryicon').innerHTML = "<img src='./Images/charging.png' alt='charging' style={{width:'20px', paddingTop:'3px'}}/>";
        }
        else if(e.level < 0.15){
            document.getElementById("batteryicon").innerHTML = "<i class='fas fa-battery-empty'></i>"
        }
        else if(e.level >= 0.15 && e.level < 0.40){
            document.getElementById("batteryicon").innerHTML = "<i class='fas fa-battery-half'></i>"
        }
        else if(e.level >= 0.40 && e.level < 0.60){
            document.getElementById("batteryicon").innerHTML = "<i class='fas fa-battery-quarter'></i>"
        }
        else if(e.level >= 0.60 && e.level < 0.85){
            document.getElementById("batteryicon").innerHTML = "<i class='fas fa-battery-three-quarters'></i>"
        }
        else if(e.level >= 0.85){
            document.getElementById("batteryicon").innerHTML = "<i class='fas fa-battery-full'></i>"
        }
    })
}