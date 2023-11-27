import express from 'express';
import { healthRouter, calculatorRouter } from './routes';
import { addTimestamp, errorHandler, logger } from './middlewares';
const app = express();
const port =3001;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);
 
/**
 * health endpoint
 * 
 */
app.use('/health', healthRouter);

/**
 * calculator endpoint
 * 
 */
app.use('/calculator', calculatorRouter);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
}); 