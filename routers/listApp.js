const express = require("express");
const mongoose = require("mongoose");

const appModel = require("../Model/AppList");

const router = new express.Router();

router.get("/data", async (req, res) => {
  try {
    const app = await appModel.find({});
    res.send(app);
  } catch (error) {
    res.send(error);
  }
});

router.post("/data", async (req, res) => {
  try {
    const { filterCategory, age, rating } = req.body;
    const list = await appModel
      .where("category")
      .equals(filterCategory)
      .where("min_age")
      .lt(age)
      .where("rating")
      .gt(rating);
    const randomList = list
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 3);
    res.send(randomList);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
