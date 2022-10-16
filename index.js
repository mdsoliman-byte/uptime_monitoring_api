const http = require("http");




app = {}

app.config = {
    port: 3000,
}

app.createServer = () => {
    const server = http.createServer(app.handelReqRes)
    server.listen(app.config.port, () => {
        console.log(`My app is running ${app.config.port}`)
    })
}

app.handelReqRes = (req, res) => {
    res.end("HEllo Im New Here ")
}

app.createServer()