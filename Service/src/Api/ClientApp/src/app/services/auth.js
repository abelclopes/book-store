
const TOKEN_KEY = "TOKEN_KEY";
const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);
const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
const logout = () => {
    localStorage.removeItem('TOKEN_KEY');
    
};
module.exports = {TOKEN_KEY, isAuthenticated, getToken, login, logout};
