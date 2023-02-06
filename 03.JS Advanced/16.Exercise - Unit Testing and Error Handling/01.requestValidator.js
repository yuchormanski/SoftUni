function requestValidator(obj) {

    const valid = {
        method: ['GET', 'POST', 'DELETE', 'CONNECT'],
        uri: /([\w]+)|([\*])/,
        version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'],
        message: []
    }


}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})