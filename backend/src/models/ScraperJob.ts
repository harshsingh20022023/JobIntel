import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IScraperJob extends mongoose.Document {
  title: string;
  company: string;
  location: string;
  description: string;
  applyLink: string;
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
  };
  skills: string[];
  experience: string;
  postedDate: Date;
  source: string;
  status: 'active' | 'scraped' | 'processed';
  createdAt: Date;
  updatedAt: Date;
}

export interface IScraperSearch extends mongoose.Document {
  keyword: string;
  location: string;
  resultsCount: number;
  lastScraped: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface ISalaryData extends mongoose.Document {
  role: string;
  location: string;
  experience: string;
  salaryRange: {
    min: number;
    max: number;
    median: number;
    currency: string;
  };
  source: string;
  lastUpdated: Date;
}

const ScraperJobSchema = new Schema<IScraperJob>({
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

const ScraperSearchSchema = new Schema<IScraperSearch>({
  keyword: { type: String, required: true },
  location: String,
  resultsCount: { type: Number, default: 0 },
  lastScraped: Date,
  status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

const SalaryDataSchema = new Schema<ISalaryData>({
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

export const ScraperJob = mongoose.model<IScraperJob>('ScraperJob', ScraperJobSchema);
export const ScraperSearch = mongoose.model<IScraperSearch>('ScraperSearch', ScraperSearchSchema);
export const SalaryData = mongoose.model<ISalaryData>('SalaryData', SalaryDataSchema);