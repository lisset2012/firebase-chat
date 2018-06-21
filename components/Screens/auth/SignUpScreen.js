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
        
        <div class="logo-container">
            <img src="./img/logo-whitebg.png" alt="" class="logo">
        </div>

        <div class="input-container-up">
            <input type="email" id="email" placeholder="Email">
            <input type="password" name="" id="password" placeholder="Password">        
            <input type="password" name="" id="pass-confirmation" placeholder="Confirm your password">                   
        </div>

        <div class="btn-container">
            <div id = "go-back-btn"> <i class="icon ion-md-arrow"></i> </div>
            <button id="sign-up-btn" class="btn ">SIGN UP</button>
        </div>
    </div>
`;
    return container;
}

function initializeSignUpScreenEventListeners(){
    // $('#google_auth').on('click', googleAuth);
    $('#go-back-btn').on('click', goBack);

    $('#sign-up-btn').on('click', signUp)
}

function signUp(){

}