const dev = {
    LOGIN_ACCOUNT: 'http://localhost/auth/login',
    CREATE_ACCOUNT: 'http://localhost/auth/create_account',
    RESET_PASSWORD: "http://localhost/auth/resetpassword",
    UPDATE_PASSWORD: "http://localhost/auth/updatepassword",
    VERIFY_OTP: 'http://localhost/auth/verify_otp',
    RESEND_VERIFY_OTP: 'http://localhost/auth/verify_otp',
    AUTHORIZED_USER: "http://localhost/token/secureRoute",
    REFRESH_TOKEN: "http://localhost/token/session",
};

const prod = {
    LOGIN_ACCOUNT: 'https://windows-10-chrome-server.onrender.com/auth/login',
    CREATE_ACCOUNT: 'http://windows-10-chrome-server.onrender.com/auth/create_account',
    RESET_PASSWORD: "https://windows-10-chrome-server.onrender.com/auth/resetpassword",
    UPDATE_PASSWORD: "https://windows-10-chrome-server.onrender.com/auth/updatepassword",
    VERIFY_OTP: 'https://windows-10-chrome-server.onrender.com/auth/verify_otp',
    RESEND_VERIFY_OTP: 'https://windows-10-chrome-server.onrender.com/auth/verify_otp',
    AUTHORIZED_USER: "https://windows-10-chrome-server.onrender.com/token/secureRoute",
    REFRESH_TOKEN: "https://windows-10-chrome-server.onrender.com/token/session",
};

const URL = process.env.NODE_ENV !== 'production' ? dev : prod;
export default URL;