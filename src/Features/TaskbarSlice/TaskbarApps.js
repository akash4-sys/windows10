import TaskbarImageData from '../../components/Data/WindowTaskbarImage';

const TaskbarApps = [
    {
        name: "File Explorer",
        image: "Images/fileexplorer.png",
        default: true,
        open: false,
        selected: false,
        windowCount: 0,
        alternateNames: TaskbarImageData["Images/fileexplorer.png"],
        windowSnapshots: {
            hovering: false,
            array: []
        }
    },
    {
        name: "Mail",
        image: "Images/mail.png",
        default: true,
        open: false,
        selected: false,
        windowCount: 0,
        alternateNames: false,
        windowSnapshots: {
            hovering: false,
            array: []
        }
    },
    {
        name: "Chrome",
        image: "Images/chrome.png",
        default: true,
        open: false,
        selected: false,
        windowCount: 0,
        alternateNames: false,
        windowSnapshots: {
            hovering: false,
            array: []
        }
    },
    {
        name: "vscode",
        image: "Images/vscode.png",
        default: true,
        open: false,
        selected: false,
        windowCount: 0,
        alternateNames: false,
        windowSnapshots: {
            hovering: false,
            array: []
        }
    },
];

export default TaskbarApps;