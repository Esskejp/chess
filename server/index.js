const express= require('express')
const app = express()

app.use("/", (req, res) => {
    res.send("Server is runnin");
});
app.listen(5000,console.log("Server started"));