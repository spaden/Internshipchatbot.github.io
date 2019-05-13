class botchat {
    constructor() {

        this.ct();
    }

    ct() {
        //whole box main container style
        let stylesMain = `
              border-radius: 20px;
              background-color: #FEFEFE  ;
              margin-top: 17%;
              height: 430px;
              width: 25%; 
              margin-left: 58.5%;  
              box-shadow: -1px 2px 10px 2px #888888;
        `;

        // image box styles
        var stylesHd = `
            margin-left: 2%;
            margin-bottom: 6%;
            margin-top: 5%;
            height: 5%;
            width: 20%;
            opacity: 0.8;
            box-shadow: -2px 3px 2px #888888;
            background-color: #CEE8CE;
         `;

        // message box styles
        var stylesMg = `
            margin-left: 1%;
            font-size: 0.79em;
            font-style: normal;
            font-family: Arial, Helvetica, sans-serif;
            height: 63%;
            overflow-y: scroll;
            overflow-x:hidden;
        `;

        var stylesRw = `
           opacity: 0.7;
        `
        this.mainTag = document.createElement("div");
        this.mainTag.className = "container";
        this.mainTag.style = stylesMain;
        this.mainTag.id = "mainTag";

        var main1 = document.createElement('div');
        main1.style = stylesRw;

        var tit = document.createElement("img");
        tit.className = "rounded";
        tit.src = "chatbot.jpg";
        tit.style = stylesHd;


        main1.append(tit);

        this.messagesDiv = document.createElement("div");
        this.messagesDiv.id = "info";
        this.messagesDiv.style = stylesMg;



        this.mainTag.append(tit);
        this.mainTag.append(document.createElement('br'));

        this.mainTag.append(this.messagesDiv);
        this.usmessage();





        document.body.append(this.mainTag);



    }

    //user entered message first goes here after send button click
    usmessage() {
        var group = document.createElement("div");
        group.className = "input-group";

        var styles = `
           border-radius: 50px;
           font-size: 0.89em;
           font-family: Arial, Helvetica, sans-serif;
        `;
        group.style = styles;
        var sendMessage = document.createElement('input');
        sendMessage.id = "usInput";
        sendMessage.className = "form-control";
        sendMessage.style = styles;

        var but = document.createElement('img');
        but.id = "usButton";
        //but.innerText = "send";
        //but.className = " col-md-2";
        but.src = "send_button.png";
        but.style = "height: 37px; width: 40px; box-shadow: -0.5px 1px 1px 0.5px #F9FAFE;"


        but.onclick = function() {
            var string = document.getElementById('usInput').value;
            // sends user message to server and appends it to the UI
            sendUserMessage(string);
        }


        sendMessage.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                but.click();
            }
        });




        group.append(sendMessage);
        group.append(but);
        this.mainTag.append(document.createElement('hr'));
        this.mainTag.append(group);
        //this.mainTag.append(but);
    }






}


//sends the user message to server and updates the UI
function sendUserMessage(message) {
    //alert(message);

    /*var styles = `
    background-color: #A2B1D3;
    opacity: 0.8;
    border-radius: 20px 15px 5px 30px;;
    width: auto;
    height: auto;
    margin-left: 30%;
    margin-bottom: 5px;
    margin-top: 3px;
    padding-left: 16px;
    padding-top: 5px;
    box-shadow: -1px 1px 2px #888888;
    `;*/

    var styles = `
    background-color: #A2B1D3;
    opacity: 0.7;
    border-radius: 30px 25px 10px ;
    width: auto;
    height: auto;
    margin-left: 22%;
    margin-right: 2%;
    padding-left: 5%;
    padding-right: 3%;
    padding-bottom: 0.1%;
    padding-top: 2%;
    float: right;
    clear: left;
    margin-bottom: 5%;
    box-shadow: -1px -1px 2px #888888;
    `;
    var userTyped = document.createElement('p');
    userTyped.style = styles;

    var uText = document.createElement("p");
    uText.append(message);
    //sample response comment it out
    userTyped.append(uText);
    //userTyped.append(document.createElement('br'));


    document.getElementById('info').append(userTyped);



    /*var userTyped = document.createElement('i');
    userTyped.style = styles;

    userTyped.append(message);
    userTyped.append(document.createElement('br'));
    document.getElementById('info').append(userTyped);
    userTyped.append(document.createElement('br'));
    */

    requestMessage();

    //use this code to send user message to server using ajax

    /* var cml;
     if (window.XMLHttpRequest) {
         cml = new XMLHttpRequest();
     } else if (window.ActiveXObject) {
         cml = new ActiveXObject("Microsoft.CMLHTTP");
     }
     cml.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             var myObj = JSON.parse(this.responseText);
             //if the info object contains any text update the UI
             if (myObj.info == "proceed") {
                     var userTyped = document.createElement('div');
                     userTyped.style = styles;

                     userTyped.append(myObj.serverResponse);
                     userTyped.append(document.createElement('br'));
                     document.getElementById('info').append(userTyped);
                     userTyped.append(document.createElement('br'));
                     requestMessage();
  

             }
             //if there is no response from the server alert with a concent message
             else if (myObj.info == "forbid") {


             }
             //appending the messages to UI

             for (var i = 0; i < myObj.messages.length; i++) {
                 //appending the messages to the UI
             }


         }
     };
     cml.open("GET", 'url + usermessage', true);

     cml.send();*/



}

//after sending user message to server, it requests the server for a response
//Data needs to be in JSON fromat
function requestMessage() {

    var styles = `
    background-color: #E0E5CF;
    opacity: 0.7;
    border-radius: 30px 50px 50px 40px;
    width: auto;
    height: auto;
    float: left;
    clear: right;
    padding-left: 6%;
    padding-top: 4%;
    padding-right: 4%;
    padding-bottom: 0.2%;
    margin-right: 22%;
    margin-bottom: 5%;
    box-shadow: -1px -1px -1px #888888;
    `;
    var userTyped = document.createElement('p');
    userTyped.style = styles;

    var uText = document.createElement("p");
    uText.append("We will make sure that you found what you are looking for. Thank You!");
    //sample response comment it out
    userTyped.append(uText);
    //userTyped.append(document.createElement('br'));


    document.getElementById('info').append(userTyped);
    //userTyped.append(document.createElement('br'));

    var elem = document.getElementById('info');
    elem.scrollTop = elem.scrollHeight;
    //comment till here



    //uncomment this, and use it to update the UI
    /*var cml;
    if (window.XMLHttpRequest) {
        cml = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        cml = new ActiveXObject("Microsoft.CMLHTTP");
    }
    cml.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            //if the info object contains any text update the UI
            if (myObj.info == "proceed") {
                     var userTyped = document.createElement('div');
                     userTyped.style = styles;

                     userTyped.append(myObj.serverResponse);
                     userTyped.append(document.createElement('br'));
                     document.getElementById('info').append(userTyped);
                     userTyped.append(document.createElement('br'));
                     requestMessage();

            }
            //if there is no response from the server alert with a concent message
            else if (myObj.info == "forbid") {


            }
            //appending the messages to UI

            for (var i = 0; i < myObj.messages.length; i++) {
                //appending the messages to the UI
            }


        }
    };
    cml.open("GET", 'url + usermessage', true);

    cml.send();  */


}




var botStyles = `
        position: fixed;
        bottom: 0;
        margin-left: 82%;
        width: 2.6em;
        height: 2.6em;
        `;

var botButton = document.createElement('img');
botButton.src = "botbut.png";
botButton.className = "botButton";
botButton.style = botStyles;

var click = 0;
botButton.onclick = function() {
    if (click == 0) {
        var t = new botchat();
        click = 1;
    } else if (click == 1) {
        document.getElementById("mainTag").style.display = "none";
        click = 2;
    } else {

        document.getElementById("mainTag").style.display = "block";
        click = 1;

    }
}

document.body.append(botButton);