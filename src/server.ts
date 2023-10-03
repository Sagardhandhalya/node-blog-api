import express, { Request, Response, Express } from 'express';
import postRouter from './routes/postRoutes.js';
import categoryRouter from './routes/categoryRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

export const app: Express = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Post api documentaion',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
  },
  apis: ['./src/routes/*.ts'],
  tags: [
    {
      name: 'Post',
      description: 'Operations related to the Post model',
    },
    {
      name: 'Category',
      description: 'Operations related to the Category model',
    },
  ],
};

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/categories', categoryRouter);
