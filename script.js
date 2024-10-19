const username = 'customer';
const password = 'crocs123';

let attempts = 0;

function validateLogin() {
    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (inputUsername === username && inputPassword === password) {
        window.location.href = "products.html";
        return false;
    } else {
        attempts++;
        document.getElementById('error-message').textContent = 'Invalid login. Try again.';
        
        if (attempts >= 3) {
            window.location.href = "error.html";
        }
        
        return false;
    }
}
