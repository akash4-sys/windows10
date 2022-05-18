import { folderIconMenu } from '../../../Data/RightClickMenuData';

function appClickHelper(setWrapper, setCntMenu, item, name) {

    setWrapper(item);
    
    switch (name) {
        case 'This PC':
            folderIconMenu[0][5] = "ThisPC";
            folderIconMenu[folderIconMenu.length-1][5] = "ThisPCProperties";
            break;
        case 'Chrome':
            folderIconMenu[0][5] = "Chrome";
            folderIconMenu[folderIconMenu.length-1][5] = "ChromeProperties";
            break;
        default:
            folderIconMenu[0][5] = "";
            folderIconMenu[folderIconMenu.length-1][5] = "";
            break;
    }

    setCntMenu(folderIconMenu);
};

export { appClickHelper };