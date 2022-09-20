import { rest } from 'msw';

export const Handlers = [
    rest.post('http://localhost/auth/create_account', (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({ created: true, message: "Please check your email or phone number for OTP." })
        );
    })
];