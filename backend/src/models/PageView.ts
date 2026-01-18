import mongoose from 'mongoose';

const { Schema } = mongoose;

export interface IPageView extends mongoose.Document {
  page: string;
  userId?: mongoose.Types.ObjectId;
  sessionId: string;
  timestamp: Date;
  userAgent?: string;
  ipAddress?: string;
  referrer?: string;
  duration?: number; // in seconds
}

const PageViewSchema = new Schema<IPageView>({
  page: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  sessionId: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  userAgent: String,
  ipAddress: String,
  referrer: String,
  duration: Number
});

export const PageView = mongoose.model<IPageView>('PageView', PageViewSchema);