import React from 'react';
import { render } from '@testing-library/react'
import { store } from '../ReduxStore/Store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

export function renderWithProviders(
    ui,
    { ...renderOptions } = {}
) {
    function Wrapper({ children }) {
        return (
            <Provider store={store}><Router>{children}</Router></Provider>
        )
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}