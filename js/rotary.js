// JavaScript 1Document
// isNaN(num)
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

function encodeLowerCase(originalLetter, rot) {
  var tmp = "";
  var tmpascii = originalLetter.charCodeAt(0);
  tmpascii = ((tmpascii - 97 + rot) % 26) + 97; 
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}

function encodeUpperCase(originalLetter, rot) {
  var tmp = "";
  var tmpascii = originalLetter.charCodeAt(0);
  tmpascii = ((tmpascii - 65 + rot) % 26) + 65; 
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}


function encode() {
  var rot = parseInt(document.getElementById("rotary").value, 10);
  //var originalText = document.getElementById("encodetext").value;  
  //var rot = 1;
  //var originalText = "abZ Abz.";
  var originalText = document.getElementById("encodetext").value;
  var encodedText = "";
  var tmp;
  var tmpascii;
  var i;
  if (isNaN(rot)) {
    alert("Please use a valid number");
  } else {
     // alert(originalText);  
     alert("false");
     for (i = 0; i < originalText.length; i++) {
        if ((originalText.charCodeAt(i) >= 97) && (originalText.charCodeAt(i)) <= 122) {
           //tmpascii = originalText.charCodeAt(i) - 32;
           // tmp = String.fromCharCode(tmpascii);
         tmp = encodeLowerCase(originalText[i], rot);  
        } else if ((originalText.charCodeAt(i) >= 65) && (originalText.charCodeAt(i)) <= 90) {
          tmp = encodeUpperCase(originalText[i], rot);
        } else {
          tmp = originalText[i];
        }
        encodedText += tmp;
        }
     alert(encodedText);
     document.getElementById("decodetext").value = encodedText;
  }
}
  
function decodeLowerCase(originalLetter, rot) {
  var tmp = "";
  var tmpascii = originalLetter.charCodeAt(0);
  tmpascii = modulo((tmpascii - 97 - rot),26) + 97; 
  tmp = String.fromCharCode(tmpascii);
  return tmp; 
}

function decodeUpperCase(originalLetter, rot) {
  var tmp = "";
  var tmpascii = originalLetter.charCodeAt(0);
  tmpascii = modulo((tmpascii - 65 - rot),26) + 65; 
  tmp = String.fromCharCode(tmpascii);
  return tmp;
}

function decode() {
  var rot = parseInt(document.getElementById("rotary").value, 10);
  //var originalText = "BCA bca";
  var originalText = "";
  var encodedText = document.getElementById("decodetext").value;
  var tmp;
  var i = 0;
  if (isNaN(rot)) {
    alert("Please use a valid number");
  } else {
     for (i = 0; i < encodedText.length; i++) {
        if ((encodedText.charCodeAt(i) >= 65) && (encodedText.charCodeAt(i)) <= 90) {
           tmp = decodeUpperCase(encodedText.charAt(i), rot);
      } else if ((encodedText.charCodeAt(i) >= 97) && (encodedText.charCodeAt(i)) <= 122) {
           tmp = decodeLowerCase(encodedText.charAt(i), rot);
      } else {
           tmp = encodedText.charAt(i);
      }
      originalText += tmp;
     }
     //alert(encodedText);
     document.getElementById("encodetext").value = originalText;
  }
}
  
