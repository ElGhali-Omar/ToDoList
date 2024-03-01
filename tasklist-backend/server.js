const express = require("express")
const app = express("express")
const db = require("./models")
const taskRoutes = require("./routers/taskRoutes")
const cors = require('cors');
app.use(cors())


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', taskRoutes)
db.sequelize.sync().then(() => {
    app.listen(3000, () => console.log("server listening in port 3000"))
})

