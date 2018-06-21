function buildChatScreen(user){
    
    $('#loading-screen, #sign-up-screen, #chat-screen').fadeOut("fast",function(){
        $('#root').html(ChatScreen(user));
        initializeChatScreenEventListeners(user);
    });
}

function ChatScreen(user){
    const container = document.createElement('div');

    container.id = 'chat-screen';
    container.classList.add('chat-screen');

    
    //<!-- chat screen ${user.displayName} -->

    container.innerHTML = `
    
    <div class="chat-header">Hi ${user.displayName.split(' ')[0]}!
        <i id = "sign-out" class="fas fa-sign-out-alt"></i>
    </div>
   `;
    return container;
}

function initializeChatScreenEventListeners(user){
    // $('#google_auth').on('click', googleAuth);
}

//************************************************************** */Jhonny's code
// function buildChatScreen(user){
//     $('#loading-screen, #sign-in-screen').fadeOut("slow", function(){
//         $('#root').html(ChatScreen(user));
//         intializeChatScreenEventListeners(user);
//     });
//  }
//  function ChatScreen(user){
//     const container = document.createElement('div');
//     container.id = 'chat-screen';
//     container.classList.add('chat-screen');
    
    
//     container.innerHTML = `
//     Chat screen user ${user.displayName}
//     `;
    
//     return container;
//  }
 
    
//  function intializeChatScreenEventListeners(user){
//  }