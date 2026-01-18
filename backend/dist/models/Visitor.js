"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visitor = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const VisitorSchema = new Schema({
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
exports.Visitor = mongoose_1.default.model('Visitor', VisitorSchema);
