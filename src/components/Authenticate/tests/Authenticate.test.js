import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from '../../../test-utils/test-utils';
import Authenticate from '../Authenticate';

test("can render different authentication components", async () => {
    renderWithProviders(<Authenticate />);
    expect(screen.getByText("Let's add your account")).toBeInTheDocument();
    userEvent.click(screen.getByText("Create account"));
    await waitFor(()=> {
        expect(screen.queryByText("Let's add your account")).not.toBeInTheDocument();
    });
    await userEvent.click(screen.getByRole('button', { name: 'Back' }));
    await waitFor(() => {
        expect(screen.queryByText('Create an account for this PC')).not.toBeInTheDocument();
    });
});