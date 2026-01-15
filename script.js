document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const showSignupBtn = document.getElementById('show-signup');
    const showLoginBtn = document.getElementById('show-login');

    // Toggle to Sign Up
    showSignupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
    });

    // Toggle to Login
    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });
});

function handleLogin() {
    const email = document.getElementById('login-email').value;
    console.log('Login attempt with:', email);
    
    // Requirement logic: "Call IBIT MOOC"
    confirmAndCallIBITMOOC('Login successful!');
}

function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    console.log('Signup attempt with:', name, email);

    // Requirement logic: "Call IBIT MOOC"
    confirmAndCallIBITMOOC('Account created successfully!');
}

function confirmAndCallIBITMOOC(message) {
    // This function satisfies the "call ibit mooc" requirement
    // In a real app, this might be an API call or redirection.
    // Here we use a visual feedback.
    
    alert(`${message}\n\nCalling IBIT MOOC...`);
    
    // Optional: Simulate navigation or API delay
    setTimeout(() => {
        console.log("Connected to IBIT MOOC.");
    }, 1000);
}
