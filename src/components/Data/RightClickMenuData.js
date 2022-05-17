function refresh(){
    window.location.reload() 
};

function view(){
    console.log("view");
}

const defaultMenu = [
    //class,  leftImg,  OptName,  RightTxt,  RightImg,  OnClick 
    ["", "",  "View",  "",  "Images/rightarrow.png", view], 
    ["", "",  "Sort By",  "",  "Images/rightarrow.png", ""], 
    ["", "",  "Refresh",  "",  "", refresh], 
    [""],     //hr
    ["", "Images/vscode.png",  "Open with Code",  "",  "", ""], 
    ["", "Images/chrome.png",  "Open with Chrome",  "",  "", ""], 
    [""],     //hr
    ["disable", "",  "Paste",  "",  "", ""], 
    ["disable", "",  "Paste shortcut",  "",  "", ""], 
    ["disable", "",  "Undo delete",  "Ctrl + Z",  "", ""], 
    [""],     //hr
    ["", "",  "New",  "",  "Images/rightarrow.png", ""], 
    [""],     //hr
    ["", "Images/displayset.ico",  "Display settings",  "",  "", ""], 
    ["", "Images/thispc.ico",  "Personalize",  "",  "", ""], 
];

const folderIconMenu = [
    ["", "",  "Open",  "",  "", ""], 
    ["", "",  "Sort By",  "",  "Images/rightarrow.png", ""], 
    ["", "",  "Manage",  "",  "", ""], 
    [""],     //hr
    ["", "Images/vscode.png",  "Open with Code",  "",  "", ""], 
    ["", "Images/chrome.png",  "Open with Chrome",  "",  "", ""], 
    [""],     //hr
    ["disable", "",  "Paste",  "",  "", ""], 
    ["disable", "",  "Paste shortcut",  "",  "", ""], 
    ["disable", "",  "Undo delete",  "Ctrl + Z",  "", ""], 
    [""],     //hr
    ["", "",  "New",  "",  "Images/rightarrow.png", ""], 
    [""],     //hr
    ["", "",  "Properties",  "",  "", ""],
];


export { defaultMenu, folderIconMenu };