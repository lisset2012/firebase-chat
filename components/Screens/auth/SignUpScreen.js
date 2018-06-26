function buildSignUpScreen(){
    // document.getElementById('root').appendChild(SignInScreen());
    $('#sign-in-screen').fadeOut("slow",function(){
        $('#root').html(SignUpScreen());
        initializeSignUpScreenEventListeners();
    });

    // initializeSignUpScreenEventListeners(user);
}

function SignUpScreen(){
    const container = document.createElement('div');

    container.id = 'chat-screen';
    container.classList.add('sign-up-screen');

    container.innerHTML = `
    <div class="container">

    <div class = "backbtn"><i id = "go-back-btn" class="fas fa-chevron-left"></i></div>

    <div class="logo-container">
        <img src="./img/logo-pollo.png" alt="" class="logo">
    </div>

    <h6 color: "">POLLO CHAT</h6>

    <div class="input-container">
         
        <input type="email" id="email-in" placeholder="Email">
        <input type="password" name="" id="pass-in" placeholder="Password">
                
    </div>

    <div class="icons-container">
        <button id="google_auth" class="auth-icon icon ion-logo-google"></button>
        <button id="facebook_auth" class="auth-icon icon ion-logo-facebook"></button>
    </div>

    <div class="btn-container-inscreen">
        <button id="signin-btn" class="btn ">SIGN IN</button>
        <button id="signup-btn" class="btn ">SIGN UP</button>
    </div>
</div>
`;
    return container;
}

function initializeSignUpScreenEventListeners(){
    $('#google_auth').on('click', googleAuth);
    $('#go-back-btn').on('click', goBack);

    $('#sign-up-btn').on('click', signUp)
}

function signUp(){

}