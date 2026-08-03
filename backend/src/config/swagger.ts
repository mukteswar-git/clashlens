import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ClashLens API",
      version: "1.0.0",
      description: "Backend API for ClashLens.",
    },
    servers: [
      {
        url: "https://api.clashlens.app",
        description: "Production Server",
      },
      {
        url: "http://localhost:3001",
        description: "Local Development",
      },
    ],
  },

  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
