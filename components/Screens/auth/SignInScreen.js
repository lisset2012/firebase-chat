function buildSignInScreen(){
    $('#loading-screen, #sifn-up-screen, #chat-screen').fadeOut("fast",
    function(){
        $('#root').html(SignInScreen());
        initializeSignInScreenEventListeners();
    });
    
}

function SignInScreen(){
    const container = document.createElement('div');

    container.id = 'sign-in-screen';
    container.classList.add('sign-in-screen');

    const googleAuthBtn = document.createElement('div');

    container.innerHTML = `

    <i id = "go_back_btn" class="back-btn icon ion-md-arrow"></i>
    
    <div class="container">
    <div class="logo-container">
        <img src="./img/logo-whitebg.png" alt="" class="logo">
    </div>

    <div class="input-container">
                
        <input type="email" id="email-in" placeholder="Email">
                           
        <input type="password" name="" id="pass-in" placeholder="Password">
                   
    </div>

    <div class="icons-container">
        <i id="google_auth" class="auth-icon icon ion-logo-google"></i>
        <i id="facebook_auth" class="auth-icon icon ion-logo-facebook"></i>
    </div>

    <div class="btn-container-inscreen">
        <button id="signin-btn" class="btn ">SIGN IN</button>
        <button id="signup-btn" class="btn ">SIGN UP</button>
    </div>
</div>`;
    return container;
}

function initializeSignInScreenEventListeners(){
    $('#google_auth').on("click", function(){
        createPersistantSession(googleAuth);
    });

    $('#signup-btn').on("click",function(){
        navigate('sign-up-screen');
        
    });
}