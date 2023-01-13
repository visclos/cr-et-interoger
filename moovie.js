console.log (window.location.href);

// lier le .json
// fetch("moovie.json")
//     .then(res=> res.json())
//     .then(indentite=> console.log(JSON.stringify(indentite)))
    

//lier le .json 2

// on a lier le json au serveurs de notre page web
// var requestURL = 'http://localhost:5500/moovie.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.send();

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:5500/moovie.json');
xhr.responseType = 'json';
xhr.send();

// la réponse est {"message": "Hello, world!"}
// xhr.onload = function() {
//   let responseObj = xhr.response;
//   alert(responseObj.message); // Hello, world!
// };


// var req = new XMLHttpRequest();
// req.responseType = 'json';
// req.open('GET', ,);
// // req.onload  = function() {
// //    var jsonResponse = req.response;
// //    // do something with jsonResponse
// // };
// req.send(null);
// console.log(JSON)