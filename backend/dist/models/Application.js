"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const ApplicationSchema = new Schema({
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
exports.Application = mongoose_1.default.model('Application', ApplicationSchema);
