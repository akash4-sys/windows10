// module exports
export { default as React, useState, useEffect, useRef } from 'react';
export { useSelector, useDispatch } from 'react-redux';
export { default as styled, keyframes } from 'styled-components';

// functionality exports
export { default as StartMenu } from './StartMenu/StartMenu';
export { default as SearchBar } from './utils/SearchBarStyle';
export { default as Battery } from './utils/Battery';
export { Showtime, Showdate } from './utils/Showtime';
export { default as OutsideClickAlert } from './utils/OutsideClickAlert';
export { setWindowSnapshots, clickTaskbarApp, setShowHoverWindow } from '../../Features/TaskbarSlice/TaskbarSlice';
export { setAppWindow, minimizeAppWindow } from '../../Features/AppWindowSlice/AppWindowSlice';
export { showCxtMenu } from '../../Features/CxtMenuSlice/CxtMenuSlice';
export { default as HoverWindow } from './TaskbarComponents/HoverWindow';
export { TaskbarBtnStyle, TaskbarBtnMouseEnter, TaskbarBtnMouseLeave } from './utils/TaskbarBtnHelper';