// module exports
export { useDispatch } from 'react-redux';
export { default as styled, keyframes } from 'styled-components';
export { nanoid } from 'nanoid';
export { default as html2canvas } from 'html2canvas';

// app exports
export { setAppWindow, minimizeAppWindowDirect } from '../../Features/AppWindowSlice/AppWindowSlice';
export { minimizedTaskbarApp, focusTaskbarApp, deSelectTaskbarApp } from '../../Features/TaskbarSlice/TaskbarSlice';
export { default as ErrorBoundary } from '../Boot/ErrorBoundary';

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