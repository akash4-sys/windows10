import { screen } from "@testing-library/react";
import { renderWithProviders } from '../../../test-utils/test-utils'
import CreateAccount from '../CreateAccount';
import userEvent from "@testing-library/user-event";

test('Create Account page rendering properly', () => {
    // render(<Provider store={store}><CreateAccount authMode={'createAccount'} /></Provider>);
    renderWithProviders(<CreateAccount />)
    expect(screen.getByRole('heading', { name: 'Create an account for this PC' })).toBeInTheDocument();
    expect(screen.getByText('Create an account for this PC')).toBeInTheDocument();
    expect(screen.getByText(/Your Microsoft account opens a world of benefits. Use Microsoft account for your personalized/i)).toBeInTheDocument();
    expect(screen.getByText(/If you want to use a password, choose something that will be easy for you to remember but hard for/i)).toBeInTheDocument();

    const inputTagPlaceholders = ['Username', 'Password hint', 'Enter Password', 'Email or phone', 'Re-enter Password']
    inputTagPlaceholders.forEach(placeholder => expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument());

    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
});

describe('Create Account page input elements are working properly', () => {
    const TestCases = [
        ['Username', 'NightWing', "Username should be more than 5 characters long and less than 17 characters."],
        ['Email or phone', 'nightwing@gmail.com', "Please enter a valid email or phone number."],
        ['Email or phone', '7846841345', "Please enter a valid email or phone number."],
        ['Enter Password', 'P@ssW0rd', "Password should with of length 5 with digits, symbols, lowercase and uppercase characters."],
        ['Password hint', 'Random pass', 'Random pass', "no warnings in this case"],
    ];

    test.each(TestCases)("%s input is working properly for correct data", async (element, userdata, warning) => {
        renderWithProviders(<CreateAccount />)
        const user = userEvent.setup();
        const input = screen.getByPlaceholderText(element);
        await user.clear(input);
        await user.type(input, userdata);
        expect(input.value).toBe(userdata);
        expect(screen.queryByText(warning)).not.toBeInTheDocument();
    });

    const FailingTestCases = [
        ['Username', 'Sam', "Username should be more than 5 characters long and less than 17 characters."],
        ['Email or phone', 'nightwing@.com', "Please enter a valid email or phone number."],
        ['Email or phone', '784', "Please enter a valid email or phone number."],
        ['Enter Password', 'PW0rd', "Password should with of length 5 with digits, symbols, lowercase and uppercase characters."],
        ['Re-enter Password', 'PW0rd', "Please enter same password as above."]
    ];

    test.each(FailingTestCases)("%s input is working properly for wrong data", async (element, userdata, warning) => {
        renderWithProviders(<CreateAccount />)
        const user = userEvent.setup();
        const input = screen.getByPlaceholderText(element);
        await user.clear(input);
        await user.type(input, userdata);
        expect(screen.getByText(warning)).toBeInTheDocument();
    });
});