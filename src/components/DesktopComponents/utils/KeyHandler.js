export default function handleKey(e){
    switch(e.key){
        case "Meta":
            document.getElementById("windowsButton").click();
            break;
        default:
            break;
    }
}