
const express = require('express');
const app = express();
const PORT = 3000;
const usersData = require(`./datos.js`);

function getUsersBySpecialty(specialty) {
    return usersData.filter(user => user.specialty.toLowerCase() === specialty.toLowerCase());
  }

app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Inicio</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          a { display: block; margin-bottom: 10px; text-decoration: none; color: #007BFF; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Bienvenido al servidor de usuarios</h1>
        <h2>Navegación:</h2>
        <nav>
          <a href="/marketing">Marketing</a>
          <a href="/developers">Developers</a>
          <a href="/QAs">QAs</a>
          <a href="/ventas">Ventas</a>
        </nav>
      </body>
      </html>
    `);
  });

app.get('/marketing', (req, res) => {
    const marketingUsers = getUsersBySpecialty('marketing');
    res.send(generateSpecialtyPage('Marketing', marketingUsers));
  });
  
  app.get('/developers', (req, res) => {
    const developersUsers = getUsersBySpecialty('developers');
    res.send(generateSpecialtyPage('Developers', developersUsers));
  });
  
  app.get('/QAs', (req, res) => {
    const qaUsers = getUsersBySpecialty('QAs');
    res.send(generateSpecialtyPage('QAs', qaUsers));
  });
  
  app.get('/ventas', (req, res) => {
    const ventasUsers = getUsersBySpecialty('ventas');
    res.send(generateSpecialtyPage('Ventas', ventasUsers));
  });
  
  app.use((req, res) => {
    res.status(404).send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>Error 404</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; color: red; }
          a { display: block; margin-top: 20px; text-decoration: none; color: #007BFF; }
        </style>
      </head>
      <body>
        <h1>Error 404: Ruta no encontrada</h1>
        <a href="/">Volver al Inicio</a>
      </body>
      </html>
    `);
  });


  function generateSpecialtyPage(specialty, users) {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${specialty.toUpperCase()} - Usuarios</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; }
          a { display: inline-block; margin-top: 20px; text-decoration: none; color: #007BFF; }
          a:hover { text-decoration: underline; }
          ul { list-style: none; padding: 0; }
          li { margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <h1>Especialidad: ${specialty}</h1>
        <h2>Total de usuarios: ${users.length}</h2>
        <ul>
          ${users.map(user => `
            <li><strong>${user.name}</strong> - Edad: ${user.age}</li>
          `).join('')}
        </ul>
        <a href="/">Volver al Inicio</a>
      </body>
      </html>
    `;
  }


  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });