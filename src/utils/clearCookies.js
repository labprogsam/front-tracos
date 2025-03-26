import Cookies from 'js-cookie';

export function clearCookies() {
    Cookies.remove('access_token', { path: '' });
    Cookies.remove('refresh_token', { path: '' });
    Cookies.remove('client_id', { path: '' });
    Cookies.remove('email', { path: '' });
    Cookies.remove('fullName', { path: '' });
}
