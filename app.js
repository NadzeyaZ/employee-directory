import express, { request, response } from "express";
import employees from "#db/employees";
const app = express();

app.get("/", (request, response) => {
  response.send("Hello employees!");
});

app.get("/employees", (request, response) => {
  response.send(employees);
});

app.get("/employees/random", (request, response) => {
  response.send(employees[Math.floor(Math.random() * employees.length)]);
});

app.get("/employees/:id/", (request, response) => {
  const { id } = request.params;
  const employee = employees[Number(id) - 1];
  if (!employee) {
    response.status(404).send();
  }
  response.send(employee);
});

export default app;
