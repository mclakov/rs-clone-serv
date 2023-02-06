const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3008


const app = express()


const start = async () => {
  try {
      await mongoose.connect("mongodb+srv://admin:admin123@cluster0.aehdvje.mongodb.net/clon-serv?retryWrites=true&w=majority")
      app.listen(PORT, () => (`server started on port ${PORT}`))
  } catch (e) {
      console.log(e)
  }
}

start();
