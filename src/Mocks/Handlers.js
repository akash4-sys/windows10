import { rest } from 'msw';

export const Handlers = [
    rest.post('http://localhost/auth/create_account', (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json({ created: true, message: "Please check your email or phone number for OTP." })
        );
    }),
    rest.post('http://localhost/auth/login', (req, res, ctx) => {
        const payload = req.json();
        let status = 400;
        if(payload.email === 'nightwing@gmail.com' && payload.password === 'P@ssword')
            status = 200;
        return res(
            ctx.delay(500),
            ctx.status(status),
            ctx.json({ created: true, message: "You are successfully logged in" })
        )
    })
];