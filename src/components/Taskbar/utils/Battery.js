export default function Battery() {

    let battery = document.getElementById('batteryicon');
    battery.removeChild(battery.lastElementChild);

    let tip = document.getElementById("batterytip");
    tip.style.fontSize = "12.5px";

    navigator.getBattery().then((e) => {

        let per = (e.level * 100);
        tip.innerHTML = per + "%" + " " + "remaining";

        if (e.charging) {
            battery.insertAdjacentHTML("beforeend", "<img id='bicon' src='./Images/chargingb.png' alt='charging' style='width:20px; padding-top:4px'/>");
            tip.innerHTML = per + "%" + " " + "available (plugged in)";
        }
        else if (e.level < 0.15) {
            battery.insertAdjacentHTML("beforeend" ,"<i class='fas fa-battery-empty'></i>")
        }
        else if (e.level >= 0.15 && e.level < 0.40) {
            battery.insertAdjacentHTML("beforeend" ,"<i class='fas fa-battery-quarter'></i>")
        }
        else if (e.level >= 0.40 && e.level < 0.60) {
            battery.insertAdjacentHTML("beforeend" ,"<i class='fas fa-battery-half'></i>")
        }
        else if (e.level >= 0.60 && e.level < 0.85) {
            battery.insertAdjacentHTML("beforeend" ,"<i class='fas fa-battery-three-quarters'></i>")
        }
        else if (e.level >= 0.85) {
            battery.insertAdjacentHTML("beforeend" ,"<i class='fas fa-battery-full'></i>")
        }

    });

}