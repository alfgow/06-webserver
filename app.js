//! Lanzar nodemon app.js
const express = require("express");
const app = express();
const hbs = require("hbs");
require("dotenv").config();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.render("home", {
		nombre: "alfgow",
		titulo: "Curso NodeJs",
	});
});
app.get("/generic", (req, res) => {
	res.render("generic", {
		nombre: "alfgow",
		titulo: "Curso NodeJs",
	});
});
app.get("/elements", (req, res) => {
	res.render("elements", {
		nombre: "alfgow",
		titulo: "Curso NodeJs",
	});
});

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/404.html");
});

app.listen(port);
