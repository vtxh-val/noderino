const app = require("express")()
const desiredPath = process.env.DESIRED_PATH || "/diogo"
const port = process.env.PORT || 8080

app.get(desiredPath, (req, res) => {
    res.send(`Hello from ${desiredPath}`)
})

app.listen(port, () => {
    console.log(`App listening on ${port}!`)
})