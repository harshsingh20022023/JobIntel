"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const JobSchema = new Schema({
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
exports.Job = mongoose_1.default.model('Job', JobSchema);
