import '../utils/WindowsAnimation.css';

export default function handleWindowClick({ e, windowsRef, positionArray, windowSizeArray, setAppWindow, windowsName,
    removeAppfromTaskbar, dispatch, focusTaskbarApp, minimizedTaskbarApp, minimizeAppWindowDirect }) {

    let window = e.currentTarget;
    windowsRef.current = e.currentTarget.id;
    var root = document.querySelector(':root')
    var r = getComputedStyle(root);
    var topWindowIndex = parseInt(r.getPropertyValue("--topWindowIndex"));
    let zindex = parseInt(e.currentTarget.style.zIndex);
    
    if(zindex < topWindowIndex){
        e.currentTarget.style.zIndex = topWindowIndex;
        root.style.setProperty('--topWindowIndex', topWindowIndex+1);
    }
    else {
        root.style.setProperty('--topWindowIndex', zindex);
    }

    dispatch(focusTaskbarApp(windowsName));

    let i = parseInt(e.currentTarget.id.slice(-1));
    if(window.querySelector(".closeButton").contains(e.target)){
        positionArray.current.splice(i, 1);
        windowSizeArray.current.splice(i, 1);
        dispatch(setAppWindow({ windowName: windowsName, windowCount: -1, windowIndex:i }));
        dispatch(removeAppfromTaskbar(windowsName))
        root.style.setProperty('--topWindowIndex', 1);
    }

    if(window.querySelector(".minimize").contains(e.target)){
        dispatch(minimizeAppWindowDirect({windowsName, windowIndex:i }));
        dispatch(minimizedTaskbarApp(windowsName));
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