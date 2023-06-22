import swaggerJsdoc from 'swagger-jsdoc';

const options = {
   failOnError: true, //whether or not to throw when parsing erros
   definition: {
      openapi: '3.0.1',
      servers: [{
         url: `${process.env.SERVER_URL}/api/v1`
      }],
      info: {
         title: 'Bootcamp Management System API',
         version: '1.0.0',
      },
      components: {
         securitySchemes: {
            bearerAuth: {
               type: 'http',
               scheme: 'bearer',
               bearerFormat: 'JWT',
            }
         }
      },
      security: [{
         bearerAuth: []
      }]
   },

   apis: ['routes/*.js'], // files containing annotations as above
};

export default swaggerJsdoc(options);