import { folderIconMenu } from '../../../Data/RightClickMenuData';

function appClickHelper(setWrapper, setCntMenu, item, name) {

    setWrapper(item);
    
    switch (name) {
        case 'This PC':
            folderIconMenu[0][5] = "This PC";
            folderIconMenu[folderIconMenu.length-1][5] = "ThisPCProperties";
            break;
        case 'Chrome':
            folderIconMenu[0][5] = "Chrome";
            folderIconMenu[folderIconMenu.length-1][5] = "ChromeProperties";
            break;
        case 'File Explorer':
            folderIconMenu[0][5] = "File Explorer";
            folderIconMenu[folderIconMenu.length-1][5] = "FileExplorerProperties";
            break;
        case 'My Portfolio':
            folderIconMenu[0][5] = "My Portfolio";
            folderIconMenu[folderIconMenu.length-1][5] = "My Portfolio";
            break;
        default:
            folderIconMenu[0][5] = "";
            folderIconMenu[folderIconMenu.length-1][5] = "";
            break;
    }

    setCntMenu(folderIconMenu);
};

export { appClickHelper };