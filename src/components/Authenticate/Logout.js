import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Logout() {
    if (cookies.get('WAC10')) cookies.remove("WAC10", { path: "/" });
    if (cookies.get('WACR10')) cookies.remove("WACR10", { path: "/" });
    window.location.reload();
}