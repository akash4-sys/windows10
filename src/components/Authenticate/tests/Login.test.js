import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from '../../../test-utils/test-utils';
import userEvent from "@testing-library/user-event";
import Login from '../Login';
import Authenticate from '../Authenticate';
import { Login_RTestCases } from './tests-utils/TestCases';

test('Switching between Login and Reset Password page working properly', async () => {
    renderWithProviders(<Login />);
    const user = userEvent.setup();
    const loginHeading = screen.getByRole("heading", { name: "Let's add your account" });
    expect(loginHeading).toBeInTheDocument();
    await user.click(screen.getByText("Forgot Password?"));
    await waitFor(() => { expect(screen.getByRole("heading", { name: "Reset your password" })).toBeInTheDocument(); });
    await user.click(screen.getByRole("button", { name: "Back" }));
    await waitFor(() => { expect(loginHeading).toBeInTheDocument(); });
});

describe('Login Form working properly', () => {

    test('Input Form working properly for correct data and submitting', async () => {
        renderWithProviders(<Authenticate />);
        const user = userEvent.setup();

        const NextBtn = screen.getByRole("button", { name: "Next" });
        for (let i = 0; i < 2; i++) {
            const input = screen.getByPlaceholderText(Login_RTestCases[i][0]);
            await user.clear(input);
            await user.type(input, Login_RTestCases[i][1]);
            expect(input.value).toBe(Login_RTestCases[i][1]);
            expect(screen.queryByText(Login_RTestCases[i][2])).not.toBeInTheDocument();
            await user.click(NextBtn);
        }

        await waitFor(() => { expect(screen.getByAltText("authentication_loader_img")).toBeInTheDocument() });
        await waitFor(() => { expect(screen.queryByRole('heading', { name: "Let's add your account" })).not.toBeInTheDocument() });
    });

    test('Login form working properly for incorrect data', async () => {
        renderWithProviders(<Login />);
        const user = userEvent.setup();

        const EmailOrPhone = screen.getByPlaceholderText('Enter email or phone number');
        await user.clear(EmailOrPhone);
        await user.type(EmailOrPhone, 'nightwing');
        expect(screen.getByText('Please enter a valid email or phone number.')).toBeInTheDocument();

        await user.click(screen.getByRole("button", { name: "Next" }))
        expect(screen.getByRole('heading', { name: "Let's add your account" })).toBeInTheDocument();
    });
});

describe('Forgot Password page working properly', () => {

    test('Take valid input and submit the data', async () => {
        renderWithProviders(<Authenticate />);
        const user = userEvent.setup();
        await user.click(screen.getByText("Forgot Password?"));
        await waitFor(() => { expect(screen.getByRole("heading", { name: "Reset your password" })).toBeInTheDocument(); });

        const EmailOrPhone = screen.getByPlaceholderText(Login_RTestCases[0][0]);
        await user.clear(EmailOrPhone);
        await user.type(EmailOrPhone, Login_RTestCases[0][1]);
        expect(screen.queryByText(Login_RTestCases[0][2])).not.toBeInTheDocument();

        await user.click(screen.getByRole("button", { name: "Next" }));
        await waitFor(() => { expect(screen.getByAltText("authentication_loader_img")).toBeInTheDocument() });
        await waitFor(() => { expect(screen.getByRole('heading', { name: 'Verification Code' })).toBeInTheDocument() });
    });

});