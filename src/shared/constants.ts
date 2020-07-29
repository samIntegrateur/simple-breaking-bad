export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : '';

if (!API_BASE_URL) {
    console.error('No API_BASE_URL found, have you set env variables ?');
}
