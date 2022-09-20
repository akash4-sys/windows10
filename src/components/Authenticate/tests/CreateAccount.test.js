import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from '../../../test-utils/test-utils';
import CreateAccount from '../CreateAccount';
import { CA_TestCases, CA_FailingTestCases } from './tests-utils/TestCases';
import Authenticate from '../Authenticate';

test('Create Account page rendering properly', () => {
    renderWithProviders(<CreateAccount />)
    expect(screen.getByRole('heading', { name: 'Create an account for this PC' })).toBeInTheDocument();
    expect(screen.getByText('Create an account for this PC')).toBeInTheDocument();

    const inputTagPlaceholders = ['Username', 'Password hint', 'Enter Password', 'Email or phone', 'Re-enter Password']
    inputTagPlaceholders.forEach(placeholder => expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument());

    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
});

describe('Create Account page input elements are working properly and data is being submitted', () => {
    test("input is working properly for correct data and submitting", async () => {
        const user = userEvent.setup();
    
        // * Go back to create account page
        renderWithProviders(<Authenticate />)
        user.click(screen.getByText("Create account"));
        await waitFor(()=> {
            expect(screen.queryByText("Let's add your account")).not.toBeInTheDocument();
        });
        
        for (let i = 0; i < 5; i++) {
            const input = screen.getByPlaceholderText(CA_TestCases[i][0]);
            await user.clear(input);
            await user.type(input, CA_TestCases[i][1]);
            expect(input.value).toBe(CA_TestCases[i][1]);
            expect(screen.queryByText(CA_TestCases[i][2])).not.toBeInTheDocument();
        }
        await user.click(screen.getByRole('button', { name: 'Next' }));

        await waitFor(() => { expect(screen.getByAltText("authentication_loader_img")).toBeInTheDocument() });
        await waitFor(() => { expect(screen.getByText('Verification Code')).toBeInTheDocument() });
    });

    test("input is working properly for wrong data", async () => {
        renderWithProviders(<CreateAccount />)
        const user = userEvent.setup();
        for (let i = 0; i < 5; i++) {
            const input = screen.getByPlaceholderText(CA_FailingTestCases[i][0]);
            await user.clear(input);
            await user.type(input, CA_FailingTestCases[i][1]);
            expect(screen.getByText(CA_FailingTestCases[i][2])).toBeInTheDocument();
        }
    });

    test("clicking on send button with invalid data turns first invalid input box yellow", async () => {
        renderWithProviders(<CreateAccount />);
        const user = userEvent.setup();
        const submitBtn = screen.getByRole('button', { name: 'Next' });
        await user.click(submitBtn);
        const Username = screen.getByPlaceholderText('Username');
        expect(Username).toHaveStyle({ borderColor: 'yellow' });

        await user.clear(Username);
        await user.type(Username, 'Alex');
        await user.click(submitBtn);
        expect(Username).toHaveStyle({ borderColor: 'yellow' });
    });
});