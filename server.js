const http = require("http")
const fs = require("fs")
const PORT = 3000

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("./index.html", "utf-8", (err, data) => {
            if (err) throw err
            else res.end(data)
        })
    } else if (req.url == "/users") {
        fs.readFile("./users.json", "utf-8", (err, data) => {
            if (err) throw err
            else res.end(data)
        })
    } else {
        res.end("page not found")
    }

})

server.listen(PORT, () => {
    console.log(`server is running on :http://localhost:${PORT}`);

})
