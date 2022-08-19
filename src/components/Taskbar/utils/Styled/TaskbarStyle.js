import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width:100%;
    height:2.5rem;
    position: absolute;
    bottom: 0.5px;
    background-color: var(--primary-color);
    display:flex;
    justify-content: space-between;
    z-index:10000;
`

export const LeftSection = styled.div`
    display:flex;
    position:relative;
`

export const RightSection = styled.div`
    display:flex;
    font-size: var(--windowsFontSize);

    #eng{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-top:11px;
    }
    #batteryicon{
        font-size:1rem;
        padding-top:4px;
    }
`

const Visible = keyframes`
    to{
        visibility:visible;
        opacity:1;
    }
`

export const WindowsButton = styled.button`
    font-size: 1.3rem;
    padding: 0px 15px;
    background-color: grey;
    border: none;
    transition: all 250ms;
    position: relative;
    
    span{
        font-size: var(--windowsFontSize);
    }
    &:hover{
        color:#357EC7;
        background-color: var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
    &:focus-visible{
        outline: none;
    }
`

export const TaskbarButton = styled.div`
    padding: 6px 11px;
    transition: all 250ms;
    color:var(--textcolor);
    position: relative;

    img{
        width: 29px;
    }

    &:hover{
        background-color:var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }

    i{
        padding-top: 6px;
        padding-left: 6px;
        padding-right: 6px;
    }

    .Notificationtooltip{
        left:unset;
        right:0%;
    }
`

export const UtilityIcons = styled(TaskbarButton)`
    padding-left: 2px;
    padding-right: 2px;
    position: relative;
      
    &:hover{
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
`

export const Breaker = styled.div`
    font-size: 1.5rem;
    padding: 4px 15px;
    color: #646363;
    display: flex;
    gap: 2px;
    div, span{
        border: 0.1px solid black;
        height: -webkit-fill-available;
    }
`

export const Tooltip = styled.span`
    opacity:0;
    width: max-content;
    background-color:#FBFBF8;
    color:black;
    text-align: center;
    padding: 2px 5px;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -20px;
    visibility:hidden;
`

export const DateAndTime = styled.div`
    color: var(--textcolor);
    text-align: center;
    padding: 3px 8px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 250ms;
    position: relative;

    span{
        width:fit-content;
        left: 0%;
        margin-left: -1px;
    }

    &:hover{
        background-color:var(--hover-color);
        span{
            animation: ${Visible} 10ms linear 500ms forwards;
        }
    }
`