// JavaScript Document
function popUpClose() {
document.getElementById("popup").style.visibility="hidden";
}

function popUpOpen(what) {
  document.getElementById("popup").style.visibility="visible";
  if (what == "about") {
    document.getElementById("popuptext").innerHTML="<h1>Cypher your text or find out what the message was!</h1> <h3>First of all, welcome to my website!</h3><p> This website is my coursework for Web Tech module at Edinburgh Napier. We've been asked to code a website with a few simple cyphers to show ourunderstanding of HTML, CSS, and JavaScript.  </p> <p>If you are my lecturer, please do enjoy your experience here and mark me well. :)  <br>If you are a random visitor, enjoy your time here and try some of the offered cyphers.</p>"
  }
  if (what=="help") {
    document.getElementById("popuptext").innerHTML="<p> Please use buttons encode and decode for using cypher for original text and converting the cyphered text to the original message respectively. The field between buttons is for key.</p>"
  }
  if (what == "contact") {
    document.getElementById("popuptext").innerHTML="<p> If you'd like to contact me, you can use my universtiy email 40286967(at) live (dot) na p ier.co(dot)(uk)</p> <p> If you already know me, please feel free to give me feedback on social media. Thank you.</p>"
  }
}

function modulo(a, b) {
	return ((a % b) + b) % b;      // apparently JS is weird when you use mod for negative numbers
}

function numberLetter(letter) { 
 var ascii = letter.charCodeAt(0);
 return ascii - 64;
}

function checkKey(key) {

}

function capitals(key) {
   // if checkKey(key);
   var result = "";
   var tmp;
   for (i = 0; i < key.length; i++) {
    if (  ((key.charCodeAt(i) >= 97) && ((key.charCodeAt(i)) <= 122)) || ((key.charCodeAt(i) >= 65) && ((key.charCodeAt(i)) <= 90)) ) {
      if ((key.charCodeAt(i) >= 97) && (key.charCodeAt(i)) <= 122) {
           tmp = key.charCodeAt(i) - 32;
           result += String.fromCharCode(tmp);
      } else {
        result += key.charAt(i);
        
      }
    } else {
    
    }
   } 
   return result;   
}

function encodeLowerCase(letter, rot) {
  var tmp = "";
  var tmpascii = letter.charCodeAt(0);
  tmpascii = ((tmpascii - 97 + rot) % 26) + 97;
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}

function encodeUpperCase(letter, rot) {
  var tmp = "";
  var tmpascii = letter.charCodeAt(0);
  tmpascii = ((tmpascii - 65 + rot) % 26) + 65;
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}

function encode() {
  var rot = 0;
  var key = capitals(document.getElementById("keytext").value);
  var message = document.getElementById("encodetext").value;
  var tmp;
  var code = "";
  var i = 0;
  var k = 0;
  var tempcode = 0;
  while (i < message.length) {
    if (  ((message.charCodeAt(i) >= 97) && ((message.charCodeAt(i)) <= 122)) || ((message.charCodeAt(i) >= 65) && ((message.charCodeAt(i)) <= 90)) ) {
      if (k == key.length) {
      k = 0;
      }
      rot = numberLetter(key.charAt(k));
      if ((message.charCodeAt(i) >= 97) && ((message.charCodeAt(i)) <= 122)) {
        tempcode = encodeLowerCase(message.charAt(i), rot);    
      } else if ((message.charCodeAt(i) >= 65) && ((message.charCodeAt(i)) <= 90)) {
        tempcode = encodeUpperCase(message.charAt(i), rot);
      } else {
        tempcode = message.charAt(i);   
      }
      code +=  tempcode;
      k++;
    }
    else {
      code += message.charAt(i);
    } 
    i++; 
  }
  document.getElementById("decodetext").value = code;
}

function decodeLowerCase(letter, rot) {
  var tmp = "";
  var tmpascii = letter.charCodeAt(0);
  tmpascii = modulo((tmpascii - 97 - rot), 26) + 97;
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}

function decodeUpperCase(letter, rot) {
  var tmp = "";
  var tmpascii = letter.charCodeAt(0);
  tmpascii = modulo((tmpascii - 65 - rot), 26) + 65;
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}


function decode() {
  var rot = 0;
  var key = capitals(document.getElementById("keytext").value);
  var code = document.getElementById("decodetext").value;
  var message = "";
  
  
  
  var i = 0;
  var k = 0;
  var tempcode = 0;
  while (i < code.length) {
    if (  ((code.charCodeAt(i) >= 97) && ((code.charCodeAt(i)) <= 122)) || ((code.charCodeAt(i) >= 65) && ((code.charCodeAt(i)) <= 90)) ) {
      if (k == key.length) {
      k = 0;
      }
      rot = numberLetter(key.charAt(k));
      if ((code.charCodeAt(i) >= 97) && ((code.charCodeAt(i)) <= 122)) {
        tempmessage = decodeLowerCase(code.charAt(i), rot);    
      } else if ((code.charCodeAt(i) >= 65) && ((code.charCodeAt(i)) <= 90)) {
        tempmessage = decodeUpperCase(code.charAt(i), rot);
      } else {
        tempmessage = code.charAt(i);   
      }
      message +=  tempmessage;
      k++;
    }
    else {
      message += code.charAt(i);
    } 
    i++; 
  }
  document.getElementById("encodetext").value = message;
}                                                                                                    