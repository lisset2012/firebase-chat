function buildSignInScreen(){
    $('#loading-screen, #sign-up-screen, #chat-screen').fadeOut("slow",
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

    <div class="container">

        <div class="logo-container">
            <img src="./img/logo-pollo.png" alt="" class="logo">
        </div>

        <h6 style="margin-top: 56; padding-top:30px;">POLLO CHAT</h6>

        <div class="icons-container">
            <span style="font-size: 3em; color: #f8cd1f;" class="google-icon">
            <i id="google_auth" class="fab fa-google-plus-square"></i></span>     
            <span style="font-size: 3em; color: #f8cd1f;" class="facebook-icon">
            <i id="facebook_auth" class="fab fa-facebook-square"></i></span>     
        </div>     
        
        <div class="input-container">
            <div><input type="email" class="email" placeholder="Email"></div>
            <div><input type="password" class="pass" placeholder="Password"></div>
        </div>

        <div class="btn-container-inscreen">
            <button class="signin-btn">SIGN IN</button>
            <button class="signup-btn">SIGN UP</button>
        </div>

    </div>`;
    return container;
}

function initializeSignInScreenEventListeners(){
    $('#google_auth').on("click", function(){
        createPersistantSession(googleAuth);
    });

    $('#facebook_auth').on("click", function(){
        createPersistantSession(facebookAuth);
    });

    $('#signup-btn').on("click",function(){
        navigate('sign-up-screen');
        
    });

    $('#signin-btn').on("click",function(){
        navigate('sign-in-screen');
        
    });
}