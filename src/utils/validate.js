export function checkValidateData(email, password) {
    // Improved regex for email validation
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    // Strong password validation
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character";

    return null;
}
