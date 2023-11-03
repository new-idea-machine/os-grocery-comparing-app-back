import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3001

app.get('/ping', (_req, res) => {
    console.log('Someone has made a ping here')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})