
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

    function addRoom()
    {
        room_name = document.getElementById("room_name").value;
    
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
    
        localStorage.setItem("room_name" , room_name);
    
        window.location = "kwitter_page.html"
    }

    function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
