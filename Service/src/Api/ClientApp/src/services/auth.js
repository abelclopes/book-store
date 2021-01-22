
const TOKEN_KEY = "@bookstore-Token";
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
    localStorage.removeItem('TOKEN_KEY');
    localStorage.removeItem('@bookstore-Token');    
    localStorage.removeItem('PHARMACY_ID');
    localStorage.removeItem('PHARMACY_EMAIL');
    
};
module.exports = {TOKEN_KEY, isAuthenticated, getToken, login, logout};
