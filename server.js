/**
 * Created by Mohit Gir on 2017-01-27.
 */
//link to express
let connect = require('connect');
let url = require('url');
//create a new connect object
let app = connect();



//tax calculator
let lab3 = function (req, res, next) {

    //full querystring
    let qs = url.parse(req.url, true).query;

    //get method from querystring
    let method = qs.method;

    //get x from querystring
    let x = parseFloat(qs.x);

    //get y from querystring
    let y = parseFloat(qs.y);
    let answer;
    let validation = true;
switch (method){
    case 'add': answer=x+y;
        method='+';
        break;
    case 'subtract': answer=x-y;
        method='-';
        break;
    case 'multiply': answer=x*y;
        method='*';
        break;
    case 'divide': answer=x/y;
        method='/';
        break;
    default: validation=false;

}

    //display
    if(validation){
    res.end('<h1>Simple Calculator</h1>'+x+' '+method+' '+y+' '+'='+' '+answer);}
    else {
        res.end('<h1>Error</h1>'+'Invalid Input');}
};



//map the url's to correct virtual pages
app.use('/lab3', lab3);


//start the connect http server

app.listen(3000);
console.log('Connect server running on 3000');