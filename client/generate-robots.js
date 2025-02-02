import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // To get the current directory in ESM

// Get the current directory of this script
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the robots.txt rules manually
const robotsContent = `
User-agent: *
Disallow: /admin/
Allow: /public/
Sitemap: https://www.cuet.plus/sitemap.xml
`;

// Define the path where the robots.txt file should be saved
const robotsPath = path.resolve(__dirname, 'public', 'robots.txt');

// Write the robots.txt file to the public directory
fs.writeFileSync(robotsPath, robotsContent.trim());

console.log('robots.txt generated successfully!');
