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
    LOGIN_ACCOUNT: 'https://windows10chrome.herokuapp.com/auth/login',
    CREATE_ACCOUNT: 'http://localhost/auth/create_account',
    RESET_PASSWORD: "https://windows10chrome.herokuapp.com/auth/resetpassword",
    UPDATE_PASSWORD: "https://windows10chrome.herokuapp.com/auth/updatepassword",
    VERIFY_OTP: 'https://windows10chrome.herokuapp.com/auth/verify_otp',
    RESEND_VERIFY_OTP: 'https://windows10chrome.herokuapp.com/auth/verify_otp',
    AUTHORIZED_USER: "https://windows10chrome.herokuapp.com/token/secureRoute",
    REFRESH_TOKEN: "https://windows10chrome.herokuapp.com/token/session",
};

const URL = process.env.NODE_ENV !== 'production' ? dev : prod;
export default URL;