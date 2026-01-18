"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Placeholder auth routes
router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint - not implemented' });
});
router.post('/register', (req, res) => {
    res.json({ message: 'Register endpoint - not implemented' });
});
router.post('/logout', (req, res) => {
    res.json({ message: 'Logout endpoint - not implemented' });
});
exports.default = router;
