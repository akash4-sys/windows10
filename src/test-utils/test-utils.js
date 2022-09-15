import React from 'react';
import { render } from '@testing-library/react'
import { store } from '../ReduxStore/Store'
import { Provider } from 'react-redux';

export function renderWithProviders(
    ui,
    { ...renderOptions } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}