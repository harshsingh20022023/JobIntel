"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageView = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const PageViewSchema = new Schema({
    page: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    sessionId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
    userAgent: String,
    ipAddress: String,
    referrer: String,
    duration: Number
});
exports.PageView = mongoose_1.default.model('PageView', PageViewSchema);
