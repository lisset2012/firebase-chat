function signUp(){
    let email = $('#email').val();
    let password = $('#password').val();
    let passConfirmation = $('#pass-confirmation').val();

    // console.log('email',email);
    console.log('password',password);
    console.log('pass-confirmation',passConfirmation);

    if(!isvalidEmail(email)){
        alert('Invalid email');
    }
    else if (!isValidPassword(password)){
        alert('Invalid password');
    }
    else if (password !== passConfirmation){
        alert('Password do not match');
    }
    else{

        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(function(result){

            var user = firebase.auth().currentUser;

            user.updateProfile({
                displayName:name,
            }).then(function(){
                //update succefull
                navigate('chat-screen',user);
            }).catch(function(error){
                //an error happened
            });
        })
        .catch(function(error){
            //Handle error here
            var errorCode = error.code;
            var errorMessage = error.message;

            alert(errorMessage);
        });
    }
}

function emailAndPasswordAuth(){
    let email = $('#email').val();
    let password =  $('#password').val();

    firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
        //handle errors here
        var errorCode = error.code;
        var errorMessage = error.message;

        alert(errorMessage);
    })
}