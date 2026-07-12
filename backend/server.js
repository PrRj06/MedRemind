import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from './config/db.js';
import app from './app.js';

const port = process.env.PORT || 5000;

async function startServer() {
	const mongoUri = process.env.MONGODB_URI;

	await connectDB();

	app.listen(port, () => {
		console.log(`MedRemind backend running on port ${port}`);
	});
}

startServer().catch((error) => {
	console.error('Failed to start backend:', error);
	process.exit(1);
});
