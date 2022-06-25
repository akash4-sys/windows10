import { Component } from 'react';
import styled from 'styled-components';

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    handleRestart() {
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <Error>
                    Error!!! Window could not load properly. Please
                    <span onClick={this.handleRestart}> restart </span>
                    the Window or <span> Troubleshoot </span>.
                </Error>
            )
        }

        return this.props.children;
    }
}

const Error = styled.div`
    height: 5rem;
    width: 25rem;
    position: absolute;
    top: calc(50% - 2.3rem);
    left: calc(50% - 12.5rem);
    background: white;
    box-sizing: border-box;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    z-index:1000;

    span{ color:var(--windowsBlue); }
    span:active{ color:darkblue; }
    span:hover{ cursor:pointer; }
`