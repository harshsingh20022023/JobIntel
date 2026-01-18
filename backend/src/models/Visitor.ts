import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IVisitor extends mongoose.Document {
  sessionId: string;
  userId?: mongoose.Types.ObjectId;
  firstVisit: Date;
  lastVisit: Date;
  visitCount: number;
  pagesViewed: string[];
  userAgent?: string;
  ipAddress?: string;
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
  deviceType?: 'desktop' | 'mobile' | 'tablet';
  browser?: string;
  referrer?: string;
}

const VisitorSchema = new Schema<IVisitor>({
  sessionId: { type: String, required: true, unique: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  firstVisit: { type: Date, default: Date.now },
  lastVisit: { type: Date, default: Date.now },
  visitCount: { type: Number, default: 1 },
  pagesViewed: [{ type: String }],
  userAgent: String,
  ipAddress: String,
  location: {
    country: String,
    city: String,
    region: String
  },
  deviceType: { type: String, enum: ['desktop', 'mobile', 'tablet'] },
  browser: String,
  referrer: String
});

export const Visitor = mongoose.model<IVisitor>('Visitor', VisitorSchema);