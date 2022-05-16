function refresh(){
    window.location.reload();
}

const defaultMenu = [
    //class,  leftImg,  OptName,  RightTxt,  RightImg,  OnClick 
    ["", "",  "View",  "",  "Images/rightarrow.png", ""], 
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

export { defaultMenu };