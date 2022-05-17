import { folderIconMenu } from '../../../Data/RightClickMenuData';
import { OpenThisPC, OpenChrome, ThisPCProperties, ChromeProperties } from './CxtMenuFunctions';

function appClickHelper(setWrapper, setCntMenu, item, name) {

    setWrapper(item);

    switch (name) {
        case 'This PC':
            folderIconMenu[0][5] = OpenThisPC;
            folderIconMenu[folderIconMenu.length-1][5] = ThisPCProperties;
            break;
        case 'Chrome':
            folderIconMenu[0][5] = OpenChrome;
            folderIconMenu[folderIconMenu.length-1][5] = ChromeProperties;
            break;
        default:
            folderIconMenu[0][5] = "";
            folderIconMenu[folderIconMenu.length-1][5] = "";
            break;
    }

    setCntMenu(folderIconMenu);
};

function directOpener(name){
    switch (name) {
        case 'This PC':
            OpenThisPC();
            break;
        case 'Chrome':
            OpenChrome();
            break;
        default:
            console.log('default Case');
            break;
    }
}

export { appClickHelper, directOpener };