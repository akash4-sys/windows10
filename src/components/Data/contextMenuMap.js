function refresh(){
    window.location.reload() 
};

function view(){
    console.log("view");
}

// A 2D array of onclick and row no. also be used for onClicks

const defaultMenu = [
    //class,  leftImg,  OptName,  RightTxt,  RightImg,  OnClick
    ["", "",  "View",  "",  "Images/rightarrow.png", view], 
    ["", "",  "Sort By",  "",  "Images/rightarrow.png", ""], 
    ["", "",  "Refresh",  "",  "", refresh], 
    [""],     //hr
    ["", "Images/vscode.png",  "Open with Code",  "",  "", ""], 
    ["", "Images/chrome.png",  "Open with Chrome",  "",  "", ""], 
    [""],
    ["disable", "",  "Paste",  "",  "", ""], 
    ["disable", "",  "Paste shortcut",  "",  "", ""], 
    ["disable", "",  "Undo delete",  "Ctrl + Z",  "", ""], 
    [""],
    ["", "",  "New",  "",  "Images/rightarrow.png", ""], 
    [""],
    ["", "Images/displayset.ico",  "Display settings",  "",  "", ""], 
    ["", "Images/thispc.ico",  "Personalize",  "",  "", ""], 
];

const desktopAppsMenu = [
    ["", "",  "Open",  "",  "", ""], 
    ["", "",  "Sort By",  "",  "Images/rightarrow.png", ""], 
    ["", "",  "Manage",  "",  "", ""], 
    [""],
    ["", "Images/vscode.png",  "Open with Code",  "",  "", ""], 
    ["", "Images/chrome.png",  "Open with Chrome",  "",  "", ""], 
    [""],
    ["disable", "",  "Paste",  "",  "", ""], 
    ["disable", "",  "Paste shortcut",  "",  "", ""], 
    ["disable", "",  "Undo delete",  "Ctrl + Z",  "", ""], 
    [""],
    ["", "",  "New",  "",  "Images/rightarrow.png", ""], 
    [""],
    ["", "",  "Properties",  "",  "", ""],
];

const windowFoldersMenu = [
    ["", "",  "Open",  "",  "", ""], 
    ["", "",  "Open in new window",  "",  "", ""], 
    ["", "",  "Sort By",  "",  "Images/rightarrow.png", ""], 
    ["", "",  "Manage",  "",  "", ""], 
    [""],
    ["", "Images/vscode.png",  "Open with Code",  "",  "", ""], 
    ["", "Images/chrome.png",  "Open with Chrome",  "",  "", ""], 
    [""],
    ["disable", "",  "Paste",  "",  "", ""], 
    ["disable", "",  "Paste shortcut",  "",  "", ""], 
    ["disable", "",  "Undo delete",  "Ctrl + Z",  "", ""], 
    [""],
    ["", "",  "Send to",  "",  "Images/rightarrow.png", ""], 
    [""],
    ["", "",  "Create Shortcut",  "",  "", ""], 
    [""],
    ["", "",  "Properties",  "",  "", ""],
];

const taskbarMenu = [
    ["", "",  "Toolbars",  "",  "Images/wrightarrow.png", ""],
    [""],
    ["", "",  "Search",  "",  "Images/wrightarrow.png", ""],
    ["", "",  "News and Interest",  "",  "Images/wrightarrow.png", ""],
    ["", "Images/check.png",  "Show Cortana button",  "",  "", ""],
    ["", "Images/check.png",  "Show Task View button",  "",  "", ""],
    ["", "",  "Show People on taskbar",  "",  "", ""],
    [""],
    ["", "",  "Cascade windows",  "",  "", ""],
    ["", "",  "Show windows stacked",  "",  "", ""],
    ["", "",  "Show windows side by side",  "",  "", ""],
    ["", "",  "Show the desktop",  "",  "", ""],
    [""],
    ["", "",  "Task Manager",  "",  "", ""],
    [""],
    ["", "",  "Lock the taskbar",  "",  "", ""],
    ["", "Images/DarkStartmenu/settings.png",  "Taskbar settings",  "",  "", ""],
]

const contextMenuMap = {
    "defaultMenu": defaultMenu,
    "desktopAppsMenu": desktopAppsMenu,
    "windowFoldersMenu": windowFoldersMenu,
    "taskbarMenu": taskbarMenu,
}

export default contextMenuMap;