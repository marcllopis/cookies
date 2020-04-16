const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());


app.get("/", (req, res) => {
  // res.send("IT WORKS")
  console.log(req.cookies)

  let existingCookie = req.cookies["my-cookie"]

  if(existingCookie) {
    res.cookie('my-cookie', 'true').send('<h1>WELCOME BACK!!</h1>')
  } else {
    res.cookie('my-cookie', 'false').send('<h1>HEY! THIS IS YOUR FIRST TIME HERE!</h1>')
  }

})

app.listen(3000, ()=> {
  console.log("App is listening at port 3000");
})