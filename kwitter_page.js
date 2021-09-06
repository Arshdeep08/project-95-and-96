var firebaseConfig = {
      apiKey: "AIzaSyDy5bpQ7v0I-Ry8pZkovhG9QwA8mU8DOYo",
      authDomain: "kwitter-8b0c5.firebaseapp.com",
      databaseURL: "https://kwitter-8b0c5-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b0c5",
      storageBucket: "kwitter-8b0c5.appspot.com",
      messagingSenderId: "508558184130",
      appId: "1:508558184130:web:a8fc63b154e6392097755b"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like +"</span></button><hr>";

         row = name_with_tag + message_with_tag +like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}