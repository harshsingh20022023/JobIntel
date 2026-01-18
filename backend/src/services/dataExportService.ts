import { ScraperJob } from '../models/ScraperJob';

export class DataExportService {
  async exportJobsToCSV(jobs: any[]): Promise<string> {
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

  async getJobsForExport(filters: any = {}): Promise<any[]> {
    return await ScraperJob.find(filters).limit(1000);
  }
}

export const dataExportService = new DataExportService();