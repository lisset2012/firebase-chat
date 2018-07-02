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

    container.id = 'sign-up-screen';
    container.classList.add('sign-up-screen');

    container.innerHTML = `
    <div class="container">

        <span style="font-size: 2em; color: black; margin: 25px;" class="back-icon">
            <i class="fas fa-chevron-left"></i>
        </span>
            
        <div class="logo-container">
            <img src="./img/logo-pollo.png" alt="" class="logo">
        </div>

        <h6 style="margin-top: 56; padding-top:30px;">POLLO CHAT</h6>

        <div class="input-container">
            <div><input type="text" class="name" placeholder="Name"></div>
            <div><input type="email" class="email" placeholder="Email"></div>
            <div><input type="password" class="pass" placeholder="Password"></div>
            <div><input type="password" class="pass-conf" placeholder="Password"></div>
        </div>

        <div class="btn-container">
            <button id="" class="signup-btn ">SIGN UP</button>
        </div>

    </div>
`;
    return container;
}

function initializeSignUpScreenEventListeners(){
    $('#google_auth').on('click', googleAuth);

    $('#facebook_auth').on('click', facebookAuth);
    
    $('#go-back-btn').on('click', goBack);

    $('#sign-up-btn').on('click', signUp)
}

function signUp(){

}