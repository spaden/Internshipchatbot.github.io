var elem;
// Class for botchat
class botchat {
    constructor() {

        this.ct();
        this.scrollStyle();
    }

    ct() {
        //whole box main container style
        let stylesMain = `
              border-radius: 20px;
              background-color: #FEFEFE  ;
              margin-top: 9%;
              height: 535px;
              width: auto; 
                
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
            height: 75%;
            overflow-y: scroll;
            overflow-x:hidden;
        `;

        var stylesRw = `
           opacity: 0.7;
        `

        this.outer = document.createElement('div');
        this.outer.className = "container";

        this.outer2 = document.createElement('div');
        this.outer2.className = "row";

        this.dummy = document.createElement('span');
        this.dummy.className = "col-md-7 col-sm-6 col-xs-6 col-lg-7 col-xl-7";

        this.outer2.append(this.dummy);

        this.mainTag = document.createElement("div");
        this.mainTag.className = "col-md-4 col-sm-5 col-xs-5 col-lg-4 col-xl-4";
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

        this.outer2.append(this.mainTag);
        this.outer.append(this.outer2);
        document.body.append(this.outer);



    }


    scrollStyle() {
        var css = `
        ::-webkit-scrollbar {
            width: 3.5px;
          }
          
          
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey; 
            border-radius: 10px;
          }
           
          
          ::-webkit-scrollbar-thumb {
            background: #767373; 
            border-radius: 10px;
          }
          
          
          ::-webkit-scrollbar-thumb:hover {
            background: #7B6F6C; 
          }
        
        `;
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
    }

    //user entered message first goes here after send button click
    usmessage() {
        var group = document.createElement("div");
        group.className = "input-group";

        var styles = `
           margin-top: 1px;
           border-radius: 50px;
           font-size: 0.89em;
           font-family: Arial, Helvetica, sans-serif;
        `;
        group.style = styles;
        var sendMessage = document.createElement('input');
        sendMessage.id = "usInput";
        //sendMessage.placeholder = "Ask the bot!"
        sendMessage.className = "form-control";
        sendMessage.style = styles;

        var but = document.createElement('img');
        but.id = "usButton";
        //but.innerText = "send";
        //but.className = " col-md-2";
        but.src = "send_button.png";
        but.style = "height: 37px; width: 40px; margin-left: 4px; box-shadow: -0.5px 1px 1px 0.5px #F9FAFE;"


        but.onclick = function() {
            var string = document.getElementById('usInput').value;
            // sends user message to server and appends it to the UI
            if (!(string.length) == 0) {
                sendUserMessage(string);
                sendMessage.value = "";
                sendMessage.disabled = true;
            } else {
                console.log('Please enter your message');
            }


        }


        sendMessage.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                but.click();
            }
        });




        group.append(sendMessage);
        group.append(but);
        this.mainTag.append(document.createElement('br'));
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
    opacity: 0;
    border-radius: 30px 25px 10px ;
    width: auto;
    height: auto;
    margin-left: 22%;
    margin-right: 2%;
    padding-left: 5%;
    padding-right: 3%;
    padding-bottom: 0.2%;
    padding-top: 4%;
    float: right;
    clear: left;
    margin-bottom: 5%;
    box-shadow: -1px -1px 2px #888888;
    `;
    var userTyped = document.createElement('div');
    userTyped.style = styles;
    userTyped.id = "usServer";

    var uText = document.createElement("p");
    uText.append(message);
    //sample response comment it out
    userTyped.append(uText);
    //userTyped.append(document.createElement('br'));


    document.getElementById('info').append(userTyped);
    //document.getElementById('info').append(document.createElement('br'));
    elem = document.getElementById('info');
    elem.scrollTop = elem.scrollHeight;
    anim(userTyped, 1);



    /*var userTyped = document.createElement('i');
    userTyped.style = styles;

    userTyped.append(message);
    userTyped.append(document.createElement('br'));
    document.getElementById('info').append(userTyped);
    userTyped.append(document.createElement('br'));
    */

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

//after sending user message to server, it requests the server for a response
//Data needs to be in JSON fromat
function requestMessage() {

    var styles = `
    background-color: #E0E5CF;
    opacity: 0;
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
    userTyped.id = "reServer";

    var uText = document.createElement("p");

    uText.append("We will make sure that you found what you are looking for. Thank You!");
    //sample response comment it out
    userTyped.append(uText);
    //userTyped.append(document.createElement('br'));


    document.getElementById('info').append(userTyped);
    //resource = 1;
    anim(userTyped, who = 2);
    //userTyped.append(document.createElement('br'));
    elem.scrollTop = elem.scrollHeight;

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




var botStyles = `
        position: fixed;
        bottom: 0;
        opacity: 0.7;
        margin-left: 82%;
        width: 4.6em;
        height: 4.6em;
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
        anim(document.getElementById("mainTag"));
    } else if (click == 1) {
        document.getElementById("mainTag").style.display = "none";

        click = 2;
    } else {

        document.getElementById("mainTag").style.display = "block";
        document.getElementById("mainTag").style.opacity = 0;
        anim(document.getElementById("mainTag"));
        //alert(click);
        click = 1;

    }
    console.log(click);
}

function animLag() {
    var myVar = setInterval(myTimer, 200);
    var count = 0;
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
    userTyped.id = "tempRes";
    var uText = document.createElement("p");

    uText.append("....");
    //sample response comment it out
    userTyped.append(uText);
    document.getElementById('info').append(userTyped);
    elem.scrollTop = elem.scrollHeight;

    function myTimer() {
        if (count == 10) {
            myStopFunction();
        } else {
            //console.log("Delaying the server output");
            count++;

        }


    }


    function myStopFunction() {
        //console.log("function stopped");
        document.getElementById('tempRes').remove();

        clearInterval(myVar);
        requestMessage();
    }
}


//userTyped.append(document.createElement('br'));





function anim(which, who) {
    var myVar = setInterval(myTimer, 100);
    var opacity = 0;
    which.style.opacity = 0;
    resource = 1;

    function myTimer() {
        if (opacity == 1.0) {
            myStopFunction();
        } else {
            which.style.opacity = opacity;

            opacity = opacity + 0.2;
        }


    }

    function myStopFunction() {
        which.style.opacity = 1;
        clearInterval(myVar);
        if (who == 1) {
            animLag();
            console.log("Who is " + who)

        } else if (who == 2) {
            console.log("Who is " + who);
            document.getElementById('usInput').disabled = false;
            document.getElementById('usInput').value = "";
            document.getElementById('usInput').focus();
            //document.getElementById('usInput').placeholder = "Ask the bot!";
            //sendUserMessage.disabled = false;
            console.log("Checkin" + sendMessage.disabled);
        }


    }
}


document.body.append(botButton);