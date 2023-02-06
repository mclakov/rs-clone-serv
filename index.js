const express = require("express");
const mongoose = require("mongoose");
const appRouter = require("./appRouter");
const PORT = process.env.PORT || 3008

const app = express();

app.use(express.json());
app.use("/app/", appRouter);

const start = async () => {
  try {
      await mongoose.set('strictQuery', true);
      await mongoose.connect("mongodb+srv://admin:admin123@cluster0.aehdvje.mongodb.net/?retryWrites=true&w=majority");
      app.listen(PORT, () => console.log((`server started on port ${PORT}`)));
  } catch (e) {
      console.log(e);
  }
};

start();
