import TaskbarImageData from '../../components/Data/WindowTaskbarImage';

const TaskbarApps = [
    {
        name:"File Explorer",
        image:"Images/fileexplorer.png",
        default:true,
        open:false,
        selected:false, 
        windowCount:0,
        alternateNames:TaskbarImageData["Images/fileexplorer.png"]
    },
    {
        name:"Mail",
        image:"Images/mail.png",
        default:true,
        open:false,
        selected:false,
        windowCount:0,
        alternateNames:false
    },
    {
        name:"Chrome",
        image:"Images/chrome.png",
        default:true,
        open:false,
        selected:false,
        windowCount:0,
        alternateNames:false
    },
    {
        name:"vscode",
        image:"Images/vscode.png",
        default:true,
        open:false,
        selected:false,
        windowCount:0,
        alternateNames:false
    },
];

export default TaskbarApps;