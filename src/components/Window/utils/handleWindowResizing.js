let panel;
let MARGINS = 4;
let minWidth = 400, minHeight = 200;
let onTopEdge, onLeftEdge, onRightEdge, onBottomEdge, rightScreenEdge, bottomScreenEdge, intialClientX, intialClientY, width, height;
let finalHeight, finalWidth;

function handleWindowMousemove(e) {
    let panel = e.currentTarget;
    let rect = panel.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let TopEdge = y < MARGINS;
    let LeftEdge = x < MARGINS;
    let RightEdge = x >= rect.width - MARGINS;
    let BottomEdge = y >= rect.height - MARGINS;

    if ((RightEdge && BottomEdge) || (LeftEdge && TopEdge)) {
        panel.style.cursor = 'nwse-resize';
    } else if ((RightEdge && TopEdge) || (BottomEdge && LeftEdge)) {
        panel.style.cursor = 'nesw-resize';
    } else if (RightEdge || LeftEdge) {
        panel.style.cursor = 'ew-resize';
    } else if (BottomEdge || TopEdge) {
        panel.style.cursor = 'ns-resize';
    } else {
        panel.style.cursor = 'default';
    }
}

function resizeWindowPanelHelper(e, panel) {
    let rect = panel.getBoundingClientRect();

    if (onRightEdge) {
        let x = e.clientX - rect.left + 10;
        if(x > rightScreenEdge) return
        panel.style.width = Math.max(x, minWidth) + 'px';
        panel.style.cursor = "ew-resize";
        finalWidth = Math.max(x, minWidth) + 'px';
    }

    if (onBottomEdge) {
        let y = e.clientY - rect.top + 10;
        if(y > bottomScreenEdge) return
        panel.style.height = Math.max(y, minHeight) + 'px';
        panel.style.cursor = "ns-resize";
        finalHeight = Math.max(y, minHeight) + 'px';
    };

    if (onLeftEdge) {
        var currentWidth = Math.max(intialClientX - e.clientX + width, minWidth);
        if (currentWidth > minWidth) {
            panel.style.width = currentWidth + 'px';
            panel.style.left = e.clientX + 'px';
        }
        panel.style.cursor = "ew-resize";
        finalWidth = currentWidth + 'px';
    }

    if (onTopEdge) {
        var currentHeight = Math.max(intialClientY - e.clientY + height, minHeight);
        if (currentHeight > minHeight) {
            panel.style.height = currentHeight + 'px';
            panel.style.top = e.clientY + 'px';
        }
        panel.style.cursor = "ns-resize";
        finalHeight = currentHeight + 'px';
    }

}

function rootMouseMove(e) {
    resizeWindowPanelHelper(e, panel);
}

function handleWindowResizing(e, windowSizeArray) {
    panel = e.currentTarget;
    let rect = panel.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    intialClientX = e.clientX;
    intialClientY = e.clientY;
    width = rect.width;
    height = rect.height;

    onTopEdge = y < MARGINS;
    onLeftEdge = x < MARGINS;
    onRightEdge = x >= rect.width - MARGINS;
    onBottomEdge = y >= rect.height - MARGINS;
    rightScreenEdge = window.innerWidth - MARGINS;
    bottomScreenEdge = window.innerHeight - MARGINS;

    if ( onRightEdge || onLeftEdge || onTopEdge || onBottomEdge ) {
        document.getElementById('root').addEventListener('mousemove', rootMouseMove);
        document.getElementById('root').addEventListener('mouseup', stopResizing);
    }

    let i = parseInt(panel.id.slice(-1));
    windowSizeArray.current[i] = saveWindowSize();
}

function saveWindowSize() {
    return [finalHeight, finalWidth];
}

function stopResizing() {
    // onRightEdge = false;
    document.getElementById('root').removeEventListener('mouseup', stopResizing);
    document.getElementById('root').removeEventListener('mousemove', rootMouseMove)
}

export { handleWindowResizing, handleWindowMousemove };