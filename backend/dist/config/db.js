"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/jobintel';
const connectDB = async (mongoUri) => {
    const MONGODB_URI = mongoUri || process.env.MONGODB_URI || 'mongodb://localhost:27017/jobintel';
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('MongoDB connected successfully');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
// Handle connection events
mongoose_1.default.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
mongoose_1.default.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});
