import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IApplication extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  jobId: mongoose.Types.ObjectId;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected' | 'withdrawn';
  appliedAt: Date;
  updatedAt: Date;
  coverLetter?: string;
  resumeUrl?: string;
  notes?: string;
  feedback?: string;
  interviewScheduled?: Date;
  interviewNotes?: string;
}

const ApplicationSchema = new Schema<IApplication>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  status: {
    type: String,
    enum: ['pending', 'reviewed', 'accepted', 'rejected', 'withdrawn'],
    default: 'pending'
  },
  appliedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  coverLetter: String,
  resumeUrl: String,
  notes: String,
  feedback: String,
  interviewScheduled: Date,
  interviewNotes: String
});

// Compound index to prevent duplicate applications
ApplicationSchema.index({ userId: 1, jobId: 1 }, { unique: true });

export const Application = mongoose.model<IApplication>('Application', ApplicationSchema);