// module exports
export { default as styled, keyframes} from 'styled-components';
export { nanoid } from 'nanoid';

// app exports
export { AppWindowContext } from './../ContextApi/Context';
export { removeAppfromTaskbar, focusTaskbarApp, minimizedTaskbarApp } from '../../Features/TaskbarSlice/TaskbarSlice';

// WindowComponents exports
export { default as ActionBar } from './WindowComponents/ActionBar';
export { default as WindowSearchBar } from './WindowComponents/WindowSearchBar';
export { default as WindowToolBar } from './WindowComponents/Toolbars/WindowToolBar';
export { default as QuickAccessBar } from './WindowComponents/QuickAccessBar';
export { default as WindowFooter } from './WindowComponents/WindowFooter';

// utils exports
export { default as handleWindowClick } from './utils/handleWindowClick';
export { handleWindowResizing, handleWindowMousemove } from './utils/handleWindowResizing';

// window export
export { default as ThispcToolbar } from './ThisPCWindow/components/ThispcToolbar';