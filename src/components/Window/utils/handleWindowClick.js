import '../utils/WindowsAnimation.css';

function handleTaskBarAppClose(TaskbarApps, setTaskBarApps, windowsName){
    let copyTaskBar = TaskbarApps;
    let index;
    copyTaskBar.forEach((app, i) => {
        if(app[0] === windowsName){
            app[3] ? app[2] = false : index = i;
            return;
        }
    });

    if(index){ copyTaskBar.splice(index, 1); }
    setTaskBarApps(TaskbarApps => [...TaskbarApps], copyTaskBar);
}

export default function handleWindowClick({ e, windowsRef, positionArray, windowSizeArray, setAppWindow, AppWindow, windowsName,
    removeAppfromTaskbar, dispatch, focusTaskbarApp, minimizedTaskbarApp }) {

    let window = e.currentTarget;
    windowsRef.current = e.currentTarget.id;
    var root = document.querySelector(':root')
    var r = getComputedStyle(root);
    var topWindowIndex = parseInt(r.getPropertyValue("--topWindowIndex"));
    let zindex = parseInt(e.currentTarget.style.zIndex);
    dispatch(focusTaskbarApp(windowsName));

    if(zindex < topWindowIndex){
        e.currentTarget.style.zIndex = topWindowIndex;
        root.style.setProperty('--topWindowIndex', topWindowIndex+1);
    }else{
        root.style.setProperty('--topWindowIndex', zindex);
    }

    if(window.querySelector(".closeButton").contains(e.target)){
        let i = parseInt(windowsRef.current.slice(-1));
        positionArray.current.splice(i, 1);
        windowSizeArray.current.splice(i, 1);
        setAppWindow( { ...AppWindow, [windowsName] : { show: true, count: AppWindow[windowsName].count - 1 }  })
        if(!AppWindow[windowsName].count){
            setAppWindow( { ...AppWindow, [windowsName] : { show: false }  });
        }
        dispatch(removeAppfromTaskbar(windowsName))
        root.style.setProperty('--topWindowIndex', 1);
    }

    if(window.querySelector(".minimize").contains(e.target)){
        window.classList.add('minimizeAnimation');
        setTimeout(() => {
            window.style.top = "100vh";
        }, 130);
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