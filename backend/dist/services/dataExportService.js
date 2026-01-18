"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataExportService = exports.DataExportService = void 0;
const ScraperJob_1 = require("../models/ScraperJob");
class DataExportService {
    async exportJobsToCSV(jobs) {
        // Basic CSV export implementation
        const headers = ['Title', 'Company', 'Location', 'Salary', 'Skills', 'Posted Date'];
        const rows = jobs.map(job => [
            job.title,
            job.company,
            job.location,
            job.salary ? `${job.salary.min}-${job.salary.max} ${job.salary.currency}` : '',
            job.skills?.join(', ') || '',
            job.postedDate?.toISOString() || ''
        ]);
        const csvContent = [headers, ...rows]
            .map(row => row.map(field => `"${field}"`).join(','))
            .join('\n');
        return csvContent;
    }
    async getJobsForExport(filters = {}) {
        return await ScraperJob_1.ScraperJob.find(filters).limit(1000);
    }
}
exports.DataExportService = DataExportService;
exports.dataExportService = new DataExportService();
