var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var ref = url.searchParams.get('ref');
var decodedref = atob(ref);
const myArray = decodedref.split(':');
token = myArray[0];
let token1 = token.replace("b'", '');
let token2 = token1.replace("'", '');
console.log(token2);
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var raw = JSON.stringify({ token: token2 });

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

fetch('https://logan007005.pythonanywhere.com/Check_Token', requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log('error', error));