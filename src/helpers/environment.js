let APIURL = '';

switch (window.location.hostname){
    case 'localhost' || '127.0.0.1' :
        APIURL = 'http://localhost:3000'
        break;

    case 'grocery-client.herokuapp.com';
        APIURL = 'https://jtsc-blue-deploy-server.herokuapp.com'
}

export default APIURL;