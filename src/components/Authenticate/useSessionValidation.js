import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "universal-cookie";
import URL from './utils/Urls';

function useSessionValidation() {

    const cookies = new Cookies();
    const navigate = useNavigate();

    let [online, isOnline] = useState(navigator.onLine);

    async function validateSession() {
        const refresh_Token = cookies.get('WACR10');
        const access_Token = cookies.get('WAC10');
        if (!refresh_Token || !access_Token) navigate('/authenticate');

        const configuration = {
            method: "get",
            url: URL.REFRESH_TOKEN,
            headers: {
                Authorization: `Bearer ${refresh_Token}`,
            },
        };

        try {
            let response = await axios(configuration);
            cookies.set("WAC10", response.data.access_Token, { path: "/" });
            cookies.set("WACR10", response.data.refresh_Token, { path: "/" });
        } catch (error) {
            console.log("Try logging in again");
            if (refresh_Token) cookies.remove("WACR10", { path: "/" });
            navigate('/authenticate');
        }

    }

    async function authorized() {
        const access_Token = cookies.get('WAC10');
        const configuration = {
            method: "get",
            url: URL.AUTHORIZED_USER,
            headers: {
                Authorization: `Bearer ${access_Token}`,
            },
        };

        try {
            return await axios(configuration);
        } catch (e) {
            if (access_Token) cookies.remove("WAC10", { path: "/" });
            navigate('/authenticate')
        }
    }

    useEffect(() => {
        let sessionInterval;
        if(online) authorized().then(() => sessionInterval = setInterval(validateSession, 240000) ).catch((e) => console.log(e) );
        return () => { 
            clearInterval(sessionInterval);
        };
    }, [online]);

    
    const setOnline = () => { isOnline(true); };
    const setOffline = () => { isOnline(false); };

    useEffect(() => {
        window.addEventListener('offline', setOffline);
        window.addEventListener('online', setOnline);

        return () => {
            window.removeEventListener('offline', setOffline);
            window.removeEventListener('online', setOnline);
        }
    }, []);

    return;
}

export default useSessionValidation;