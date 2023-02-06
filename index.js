const express = require("express");
const PORT = process.env.PORT || 3008


const app = express()


const start = () => {
  try {
      app.listen(PORT, () => (`server started on port ${PORT}`))
  } catch (e) {
      console.log(e)
  }
}

start();
