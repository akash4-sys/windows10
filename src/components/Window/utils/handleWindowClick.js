import '../utils/WindowsAnimation.css'

export default function handleWindowClick(e, windowsRef, positionArray, setAppWindow, AppWindow, windowsName) {

    let window = e.currentTarget;
    windowsRef.current = e.currentTarget.id;
    var root = document.querySelector(':root')
    var r = getComputedStyle(root);
    var topWindowIndex = parseInt(r.getPropertyValue("--topWindowIndex"));
    let zindex = parseInt(e.currentTarget.style.zIndex);

    if(zindex < topWindowIndex){
        e.currentTarget.style.zIndex = topWindowIndex;
        root.style.setProperty('--topWindowIndex', topWindowIndex+1);
    }else{
        root.style.setProperty('--topWindowIndex', zindex);
    }

    if(window.querySelector(".closeButton").contains(e.target)){
        let i = parseInt(windowsRef.current.slice(-1));
        positionArray.current.splice(i, 1);
        setAppWindow( { ...AppWindow, [windowsName] : { show: true, count: AppWindow[windowsName].count - 1 }  })
        if(!AppWindow[windowsName].count){
            setAppWindow( { ...AppWindow, [windowsName] : { show: false }  })
        }
        root.style.setProperty('--topWindowIndex', 1);
    }

    if(window.querySelector(".minimize").contains(e.target)){
        window.classList.add('minimizeAnimation');
        setTimeout(() => {
            window.style.top = "100vh";
        }, 130);
    }

    let maximize = window.querySelector(".maximize");
    if(maximize.contains(e.target)){
        window.classList.remove('minimizeAnimation');
        
        if(window.style.height === "100vh" && window.style.width === "100vw"){
            maximize.querySelector("img").src= "Images/maximize.png";
            window.style.width = "70vw";
            window.style.height = "70vh";
            window.style.left = "200px";
            window.style.top = "100px";
            return;  
        }
        
        maximize.querySelector("img").src= "Images/restore.png";  
        window.style.width = "100vw";
        window.style.height = "100vh";
        window.style.left = "0px";
        window.style.top = "0px";
    }
}