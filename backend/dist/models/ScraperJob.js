"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryData = exports.ScraperSearch = exports.ScraperJob = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ScraperJobSchema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    applyLink: { type: String },
    salary: {
        min: Number,
        max: Number,
        currency: { type: String, default: 'INR' }
    },
    skills: [{ type: String }],
    experience: String,
    postedDate: Date,
    source: { type: String, default: 'linkedin' },
    status: { type: String, enum: ['active', 'scraped', 'processed'], default: 'active' }
}, {
    timestamps: true
});
const ScraperSearchSchema = new Schema({
    keyword: { type: String, required: true },
    location: String,
    resultsCount: { type: Number, default: 0 },
    lastScraped: Date,
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});
const SalaryDataSchema = new Schema({
    role: { type: String, required: true },
    location: String,
    experience: String,
    salaryRange: {
        min: { type: Number, required: true },
        max: { type: Number, required: true },
        median: { type: Number, required: true },
        currency: { type: String, default: 'INR' }
    },
    source: String,
    lastUpdated: { type: Date, default: Date.now }
});
exports.ScraperJob = mongoose_1.default.model('ScraperJob', ScraperJobSchema);
exports.ScraperSearch = mongoose_1.default.model('ScraperSearch', ScraperSearchSchema);
exports.SalaryData = mongoose_1.default.model('SalaryData', SalaryDataSchema);
