let db = firebase.database();//stablishing a conection en Firebase;
let messages = db.ref('messages/');//create a collection

function buildChatScreen(user){
    
    $('#loading-screen, #sign-up-screen, #sign-in-screen').fadeOut("fast",function(){
        $('#root').html(ChatScreen(user));
        initializeChatScreenEventListeners(user);
    });
}

function ChatScreen(user){
    const container = document.createElement('div');

    container.id = 'chat-screen';
    container.classList.add('chat-screen');

    container.innerHTML = `
    
    <div class="header-container">
        <div class="chat-header">Hi  ${user.displayName}!</div>
        <div><i class="fas fa-sign-out-alt sign-out"></i></div> 
    </div>

    <div class="chat-screen-messages-container"></div>

    <div class="chat-screen-input-container">
        <input type="text" class="chat-screen-input"/>
        <div class="chat-screen-send-msg-btn"><i class=" send fas fa-share-square"></i></div>
    </div>
   `;
    return container;
}

function initializeChatScreenEventListeners(user){
    $('.sign-out').on("click",signOut);

    $('.chat-screen-send-msg-btn').on("click",function(){
        sendMessage(user.uid, user.displayName, user.email, user.photoURL);
        
    });
    $('.chat-screen-input').keypress(function(e){
        if(e.keyCode === 13){
            sendMessage(user.uid, user.displayName, user.email, user.photoURL);
        
        }
    
    }).keyup(function(){
        //some cool staff
    });

   messages.on('value', function (snapshot) {
        //console.log(snapshot.val());
        $(".chat-screen-messages-container").html("");
        let msgs = snapshot.val();
    
        for (let id in msgs) {
          let msg = msgs[id];
          let side = user.email === msg.email ? 'right' : 'left';
          let margin = user.email === msg.email ? 'margin-left: 15px;':'margin-right:15px';
          let corner = user.email === msg.email ? 'right-top' : 'left-top'

          $(".chat-screen-messages-container").append(
            `
            <div id="messages_inside">
                <div class="container">
                        <div class="name"><strong>${msg.name}</strong>:</div>
                        <img class="profile-img" src="img/Blank-frame.jpg"/>
                        <div class="msg">${msg.text}</div>
                                            
                        <div class="date">
                            <div>${format.date(new Date(msg.date)).date}</div>
                            <div>${format.date(new Date(msg.date)).time}</div>
                        </div>
                </div>
            </div>
            `
          );
        }
        scroll();
      });
    }

function sendMessage(uid, name, email, img){
    let date = new Date();
    let text = $('.chat-screen-input').val();

    console.log('sending message',text);

    if(text){
        messages.push({
            uid: uid,
            name: name,
            text: text,
            date: date.toString(),
            email: email,
            img: img
        });
        $(".chat-screen-input").val('');
    }
}

function scroll(){
    $('.chat-screen-messages-container').scrollTop($('.chat-screen-messages-container')[0].scrollHeight);
}

let format = {
    date: (date) => {
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
  
      let h = date.getHours();
  
      let hf = (h > 11) ? 'PM' : 'AM';
      let hh = (h > 12) ? h % 12 : h;
      let mm = date.getMinutes();
      let ss = date.getSeconds();
  
      if (d < 10) d = '0' + d;
      if (m < 10) m = '0' + m;
      if (hh < 10) hh = '0' + hh;
      if (mm < 10) mm = '0' + mm;
      if (ss < 10) ss = '0' + ss;
  
      return {
        date: m + '/' + d + '/' + y,
        time: hh + ':' + mm + ':' + ss + ' ' + hf
      };
    }
  }