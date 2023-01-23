// console.log("Halo kita akan menggunakan RESTful API"); 
// console.log('');

const Hapi = require('@hapi/hapi');
 
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });
 
 
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
 
init();