import express from 'express'


const app = express()
const PORT = 8000


app.get("/", (req, res) => {
    res.send("<h1>Hello TS Node Dev</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})