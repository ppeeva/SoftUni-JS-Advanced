function solve(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const uriPattern = /^[\w.]+$/;
    const messagePattern = /^[^<>\\&'"]*$/;

    if (!(obj.method && methods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(obj.uri && (obj.uri == '*' || uriPattern.test(obj.uri)))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!(obj.version && versions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!(obj.message != undefined && (obj.message == '' || messagePattern.test(obj.message)))){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}


/* 
uri
must be a valid resource address or an asterisk (*); 
a resource address is a combination of alphanumeric characters and periods; 
all letters are Latin; 
the URI cannot be an empty string


message
may contain any number of non-special characters (special characters are <, >, \, &, ', "
*/

// console.log(solve({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));

/*
{
  method: 'GET',
  uri: 'svn.public.catalog',
  version: 'HTTP/1.1',
  message: ''
}
*/

// solve({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// });

// Invalid request header: Invalid Method

// console.log(solve({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));

// Invalid request header: Invalid Version