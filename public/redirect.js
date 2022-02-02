var url_string = window.location.href; //GET URL AS STRING
var url = new URL(url_string);
var ref = url.searchParams.get('ref');
var decodedref = atob(ref); //BASE64 DECODE THE STRING
const myArray = decodedref.split(':');
token = myArray[0];
let token1 = token.replace("b'", '');
let token2 = token1.replace("'", ''); // CLEAN TOKEN STRING
console.log(token2);
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var raw = JSON.stringify({ token: token2 }); // JSON THE TOKEN STRING

var requestOptions = {
  method: 'POST',
  headers: myHeaders, // POST THE JSON STRING
  body: raw,
  redirect: 'follow',
};

fetch('https://logan007005.pythonanywhere.com/Check_Token', requestOptions) // POST THE JSON STRING
  .then((response) => response.text())
  .then((result) => {
    const obj = JSON.parse(result);
    console.log(obj.Result);
    if (obj.Result != '1') {
      console.log('Not Welcome here');
    }
  }) // GET RESPONSE FROM JSON STRING
  .catch((error) => console.log('error', error));
