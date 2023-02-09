import { rest } from 'msw';
import URL from '../components/Authenticate/utils/Urls';

export const Handlers = [
    rest.post(URL.CREATE_ACCOUNT, (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({ created: true, message: "Please check your email or phone number for OTP." })
        );
    }),

    rest.post(URL.LOGIN_ACCOUNT, async (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({ successful: true, message: "You are successfully logged in" })
        )
    }),

    rest.post(URL.RESET_PASSWORD, async (req, res, ctx) => {
        const payload = await req.json();
        let status = 401, successful = false;
        if (payload.email === 'nightwing@gmail.com') {
            status = 200;
            successful = true;
        }
        return res(
            ctx.delay(500),
            ctx.status(status),
            ctx.json({ successful, message: "A new email with your OTP has been sent to your registered email." })
        )
    })
];