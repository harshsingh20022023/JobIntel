"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authEnhanced_1 = require("../middleware/authEnhanced");
const adminController_1 = require("../controllers/adminController");
const notificationController_1 = require("../controllers/notificationController");
const adminSettingsController_1 = require("../controllers/adminSettingsController");
const adminUsersController_1 = require("../controllers/adminUsersController");
const router = express_1.default.Router();
// Stats endpoints
router.get('/stats', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getAdminStats);
router.get('/analytics/jobs', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getJobAnalytics);
router.get('/analytics/users', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getUserAnalytics);
router.get('/users/stats', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getUserStats);
router.get('/analytics/revenue', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getRevenueAnalytics);
router.get('/notifications', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.getNotifications);
// Send a test SMTP email (admin only)
router.post('/notifications/test-email', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), notificationController_1.testEmail);
// Verify SMTP connection/auth (admin only)
router.post('/notifications/verify-smtp', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), notificationController_1.verifySmtp);
// Existing endpoints
router.get('/jobs/pending', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.listPendingJobs);
router.post('/jobs/:id/approve', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.approveJob);
router.get('/reports/revenue', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.revenueReport);
router.get('/audit', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.auditLogs);
router.delete('/gdpr/delete-user/:id', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.gdprDeleteUser);
router.post('/scrape/run', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminController_1.runCrawlers);
// Admin-managed skills
router.get('/skills', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.listAdminSkills);
router.post('/skills', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.createAdminSkill);
router.delete('/skills/:id', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.deleteAdminSkill);
// Admin-managed profile fields
router.get('/profile-fields', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.listProfileFields);
router.post('/profile-fields', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.createProfileField);
router.put('/profile-fields/:id', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.updateProfileField);
router.delete('/profile-fields/:id', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminSettingsController_1.deleteProfileField);
// User management endpoints
router.get('/users-list', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.listUsersWithRoles);
router.get('/users/:id', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.getUserDetails);
router.post('/users/assign-role', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.assignAdminRole);
router.post('/users/remove-role', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.removeAdminRole);
router.get('/admin-users', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.listAdminUsers);
router.put('/users/:userId/admin-role', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.updateUserAdminRole);
router.get('/users/:userId/activity-stats', authEnhanced_1.authenticateToken, (0, authEnhanced_1.requireRole)('admin'), adminUsersController_1.getUserActivityStats);
exports.default = router;
