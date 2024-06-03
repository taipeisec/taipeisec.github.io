document.addEventListener('DOMContentLoaded', function() {
    // 取得登入表單、註冊表單、重設密碼表單以及切換按鈕的參考
    const loginForm = document.getElementById('loginForm'); // 登入表單的參考
    const signupForm = document.getElementById('signupForm'); // 註冊表單的參考
    const forgotForm = document.getElementById('forgotForm'); // 重設密碼表單的參考
    const showSignupBtn = document.getElementById('showSignup'); // 顯示註冊表單的按鈕
    const showLoginBtn = document.getElementById('showLogin'); // 顯示登入表單的按鈕
    const showForgotBtn = document.getElementById('showForgot'); // 顯示重設密碼表單的按鈕

    // 點擊「註冊」按鈕時切換至註冊表單
    showSignupBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden'); // 隱藏登入表單
        signupForm.classList.remove('hidden'); // 顯示註冊表單
        forgotForm.classList.add('hidden'); // 隱藏重設密碼表單
    });

    // 點擊「登入」按鈕時切換至登入表單
    showLoginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden'); // 顯示登入表單
        signupForm.classList.add('hidden'); // 隱藏註冊表單
        forgotForm.classList.add('hidden'); // 隱藏重設密碼表單
    });

    // 點擊「忘記密碼」按鈕時切換至重設密碼表單
    showForgotBtn.addEventListener('click', () => {
        loginForm.classList.add('hidden'); // 隱藏登入表單
        signupForm.classList.add('hidden'); // 隱藏註冊表單
        forgotForm.classList.remove('hidden'); // 顯示重設密碼表單
    });
    
});

