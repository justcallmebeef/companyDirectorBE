const express = require("express");
const app = express();
const queries = require("./queries");
const cors = require("cors");
const port = process.env.PORT || 3002;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/companies", (req, res, next) => {
  queries
    .listAllCompanies()
    .then((companies) => res.send(companies))
    .catch(next);
});

app.get("/companies/:id", (req, res, next) => {
  queries
    .getCompaniesById(req.params.id)
    .then((companyById) => res.json(companyById))
    .catch(next);
});

app.post("/companies", (req, res) => {
  queries.createCompany(req.body).then((newCompany) => res.json(newCompany[0]));
});

app.delete("/companies/:id", (req, res) => {
  queries.deleteCompany(req.params.id).then(res.sendStatus(204));
});

app.put("/companies/:id", (req, res) => {
  queries
    .updateCompany(req.params.id, req.body)
    .then((updatedCompany) => res.json(updatedCompany[0]));
});

app.get("/founders", (req, res, next) => {
  queries
    .listAllFounders()
    .then((founders) => res.send(founders))
    .catch(next);
});

app.get("/founders/:id", (req, res, next) => {
  queries
    .getFoundersById(req.params.id)
    .then((founderById) => res.json(founderById))
    .catch(next);
});

app.post("/founders", (req, res) => {
  queries.createFounder(req.body).then((newFounder) => res.json(newFounder[0]));
});

app.delete("/founders/:id", (req, res) => {
  queries.deleteFounder(req.params.id).then(res.sendStatus(204));
});

app.put("/founders/:id", (req, res) => {
  queries
    .updateFounder(req.params.id, req.body)
    .then((updatedFounder) => res.json(updatedFounder[0]));
});

app.use(notFound);
app.use(errorHandler);

function notFound(req, res, next) {
  res
    .status(404)
    .send({ error: "Not found!", status: 404, url: req.originalUrl });
}

function errorHandler(err, req, res, next) {
  console.error("ERROR", err);
  const stack = process.env.NODE_ENV !== "production" ? err.stack : undefined;
  res.status(500).send({ error: err.message, stack, url: req.originalUrl });
}

app.listen(port);
