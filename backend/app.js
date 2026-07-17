import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/index.js';
import errorHandler from './middlewares/error.middleware.js';
const app = express();

app.use(helmet());
app.use(
	cors({
		origin: process.env.CLIENT_URL || 'http://localhost:5173',
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'));
}

app.use('/api', routes);
app.use(errorHandler);

app.use((_request, response) => {
	response.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

export default app;
