window.visited = [];

function navigate(screen, props){

    console.log(window);

    if(screen === 'sign-up-screen'){
        window.visited.push('sign-up-screen')
        return buildSignUpScreen();
    }
    if(screen === 'chat-screen' && window.user){
        window.visited.push('screen');
        return buildChatScreen(props);
    }
    else{
        window.visited.push('sign-in-screen');
        return buildSignInScreen();
    }
}

function goBack(){
    let screen = window.visited.pop();

    navigate(window.visited[window.visited.length-1])

    return screen;
}