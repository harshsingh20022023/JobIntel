import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IJob extends mongoose.Document {
  title: string;
  companyId: mongoose.Types.ObjectId;
  location: string;
  salary?: {
    min?: number;
    max?: number;
    currency?: string;
  };
  requiredSkills: string[];
  experienceRequired?: number;
  careerGrowth?: number;
  status: 'active' | 'inactive' | 'expired';
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  companyId: { type: Schema.Types.ObjectId, ref: 'Company', required: true },
  location: { type: String, required: true },
  salary: {
    min: Number,
    max: Number,
    currency: { type: String, default: 'INR' }
  },
  requiredSkills: [{ type: String }],
  experienceRequired: Number,
  careerGrowth: { type: Number, default: 0 },
  status: { type: String, enum: ['active', 'inactive', 'expired'], default: 'active' }
}, {
  timestamps: true
});

export const Job = mongoose.model<IJob>('Job', JobSchema);