const express = require('express');
const cars = express.Router();
const db = require('../data/dbConfig.js')

cars.get("/", (req, res) => {
    db.select("*")
      .from("cars")
      .then(cars => {
        res.status(200).json({ data: cars });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });

  cars.get("/:id", (req, res) => {
    db("cars")
      .where({ id: req.params.id })
      .first()
      .then(cars => {
        res.status(200).json({ data: cars });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });
  

  cars.post("/", (req, res) => {
    const carData = req.body;
    db("cars")
      .insert(carData, "id")
      .then(ids => {
        const id = ids[0];
        db("cars")
          .where({ id })
          .first()
          .then(car => {
            res.status(201).json({ data: car });
          });
      })
      .catch(error => {
          console.log(error)
        res.status(500).json({ error: error.message });
      });
  });


  cars.patch("/:id", (req, res) => {
    const changes = req.body;
    const { id } = req.params;
    db("cars")
      .where({ id }) 
      .update(changes)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: "update successful" });
        } else {
          res.status(404).json({ message: "no posts by that id found" });
        }
      });
  });


  cars.delete("/:id", (req, res) => {
    db("cars")
      .where({ id: req.params.id })
      .del()
      .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "Deleted" });
          } else {
            res.status(404).json({ message: "no posts by that id found" });
          }
      })
  });
  
  module.exports = cars