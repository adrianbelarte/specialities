const express= require("express")
const app = express()
const PORT = 3000

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  { id: 31, name: 'Derek', age: 30, specialty: 'RRHH' }
];

const getUserBySpecialty = (specialty) => usersData.filter(user => user.specialty ===  specialty)

const specialities = [...new Set(usersData.map(user => user.specialty))]

function template(specialty, usersFilter) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <nav><a href="/">Volver</a></nav>
      <h1>Somos la gente de ${specialty}</h1>
      <ul>
      ${usersFilter.map(user => `<li>Name: ${user.name} - Age: ${user.age}</li>`).join("")}
      </ul>
      </body>
    </html>  
  `
}

app.get("/", (req, res) => {
  res.send(`
     <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
      <nav>
      <a href="/developers">developers</a>
      <a href="/marketing">marketing</a>
      <a href="/ventas">ventas</a>
      <a href="/QAs">QAs</a>
      <a href="/RRHH">RRHH</a>
      </nav>
      </body>
      </html>
    `)
})

specialities.forEach(specialty => {
  app.get(`/${specialty}`, (req, res) => {
    const usersFilter = getUserBySpecialty(specialty)
    res.send(template(specialty, usersFilter))
  })
})

app.use((req, res) => {
  res.status(404).json({error: "página no encontrada"})
})


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})





































































//- FORK
//- git clone
//- revisamos package.json -> revisamos el caret (la versión tiene que ser la misma con la que se creó)
//- npm i (instalamos todas las dependencias que tiene nuestro package.json)
//- Revisamos el .gitignore que node_modules y *.lock como mínimo estén añadidos a esa lista

// Como empezar un proyecto de node desde 0
//- npm init -y (la y significa yes y lo que hace es generar el package.json completo sin preguntar)
//- Si tenemos que instalar cualquier dependencia, por ejemplo express haremos npm i express -E (-E quita el caret para no intalar a futuro la versión incorrecta más actual de la dependencia)  