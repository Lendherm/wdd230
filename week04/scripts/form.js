function validatePasswords() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = document.getElementById("password-error");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match. Please try again.";
        document.getElementById("password").value = "";
        document.getElementById("confirm-password").value = "";
        document.getElementById("password").focus();
        return false;
    }
    return true;
}
document.addEventListener("DOMContentLoaded", function () {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const errorMessage = document.getElementById("password-error");

    function validatePasswords() {
        if (password.value !== confirmPassword.value) {
            errorMessage.textContent = "Passwords do not match. Please try again.";
            password.value = "";
            confirmPassword.value = "";
            password.focus();
            return false;
        }
        return true;
    }

    function clearError() {
        errorMessage.textContent = "";
    }

    password.addEventListener("input", clearError);
    confirmPassword.addEventListener("input", clearError);

    document.querySelector("form").addEventListener("submit", function (event) {
        if (!validatePasswords()) {
            event.preventDefault();
        }
    });
});