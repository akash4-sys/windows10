const initialState = {
    ThisPC: {
        name: "This PC",
        show: false,
        count: 0,
        image: "Images/thispc.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            image: "Images/fileexplorer.png",
            default: true,
            open: false,
            selected: false,
            hovering: false,
            windowSnapshots: [],
        },
        startmenu:{
            show:true,
            grid:1
        },
    },
    Chrome: {
        name: "Chrome",
        show: false,
        count: 0,
        image: "Images/chrome.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            image: "Images/fileexplorer.png",
            default: true,
            open: false,
            selected: false,
            hovering: false,
            windowSnapshots: [],
        },
        startmenu:{
            show:true,
            grid:1
        },
    }
}

const arrayForMap = [
    initialState.ThisPC, initialState.Chrome
]

export default arrayForMap;