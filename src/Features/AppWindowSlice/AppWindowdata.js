const appData = {
    "This PC": {
        name: "This PC",
        showWindow: false,
        windowCount: 0,
        image: "Images/thispc.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName: "File Explorer",
            subWindow:true,
            defaultSnap:"Images/Snapshots/thispcsnap.png"
        },
        startmenu:{
            show:true,
            gridID:0
        },
    },
    "Chrome": {
        name: "Chrome",
        showWindow: false,
        windowCount: 0,
        image: "Images/chrome.png",
        minimized: [false],
        showInDekstopWindow: true,
        showInAppListWindow:true,
        taskbar: {
            mainWindowName:null,
            default: true,
            open: false,
            defaultSnap:"Images/Snapshots/chromesnap.png"
        },
        startmenu:{
            show:true,
            gridID:0
        },
    },
    "File Explorer": {
        name: "File Explorer",
        showWindow: false,
        windowCount: 0,
        image:"Images/fileexplorer.png",
        minimized: [false],
        showInDekstopWindow: true,
        showInAppListWindow:true,
        taskbar: {
            mainWindowName:null,
            hasSubWindow:"This PC",
            subWindowCount:0,
            default: true,
            open: false,
            defaultSnap:"Images/Snapshots/explorersnap.png"
        },
        startmenu:{
            show:false,
            gridID:0
        },
    },
    "My Portfolio": {
        name: "My Portfolio",
        showWindow: false,
        windowCount: 0,
        image:"Images/myportfolio.png",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:"Images/Snapshots/portfoliosnap.png"
        },
        startmenu:{
            show:true,
            gridID:2
        }
    },
    "Notepad": {
        name: "Notepad",
        showWindow: false,
        windowCount: 0,
        image:"Images/notepad.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:"Images/Snapshots/notepadsnap.png"
        },
        startmenu:{
            show:true,
            gridID:0
        }
    },
    "VSCode": {
        name: "VSCode",
        showWindow: false,
        windowCount: 0,
        image:"Images/vscode.png",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: true,
            open: false,
            defaultSnap:""
        },
        startmenu:{
            show:true,
            gridID:0
        }
    },
    "Mail": {
        name: "Mail",
        showWindow: false,
        windowCount: 0,
        image:"Images/mail.png",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: true,
            open: false,
            defaultSnap:""
        },
        startmenu:{
            show:true,
            gridID:0
        }
    },
    "Pictures": {
        name: "Pictures",
        showWindow: false,
        windowCount: 0,
        image:"Images/imgFolder.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:""
        },
        startmenu:{
            show:true,
            gridID:1
        }
    },
    "Documents": {
        name: "Doucments",
        showWindow: false,
        windowCount: 0,
        image:"Images/docFolder.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:""
        },
        startmenu:{
            show:true,
            gridID:1
        }
    },
    "Video": {
        name: "Video",
        showWindow: false,
        windowCount: 0,
        image:"Images/vidFolder.ico",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:""
        },
        startmenu:{
            show:true,
            gridID:1
        }
    },
    "Pokemon Adventures": {
        name: "Pokemon Adventures",
        showWindow: false,
        windowCount: 0,
        image:"Images/pokemonadventures.png",
        minimized: [false],
        showInDekstop: true,
        showInAppList:true,
        taskbar: {
            mainWindowName:null,
            default: false,
            open: false,
            defaultSnap:"Images/Snapshots/pokemonadventures.png"
        },
        startmenu:{
            show:true,
            gridID:1
        }
    },
};

export default appData;