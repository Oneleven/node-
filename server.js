const http = require('http')
const server = http.createServer()
server.listen(8808)

server.on('request',(req,res)=>{
    const {url} = req
    var path 
    if(url.indexOf('?')>0){
        path = url.substring(0,url.indexOf('?'))
    }else{
        path = url.substring(0)
    }


    if(path ==='/user'){
        res.statusCode = 200
        res.write('heihei')
        res.end('succeed')
    }else{
        res.statusCode = 404
        res.write('no')
        res.end('failed')
    }

})