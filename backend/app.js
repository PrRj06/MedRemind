import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';

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

app.get('/api/start', (_request, response) => {
	response.json({ success: true, message: 'MedRemind API is running' });
});

app.use((_request, response) => {
	response.status(404).json({ success: false, message: 'Route not found' });
});

export default app;
