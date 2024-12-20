import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your routes
const routes = [
  "/",
  "/about-company",
  "/cuet-scholarship",
  "/cuet-scholarship/excelplus-scholarship",
  "/scholarship-form",
  "/contact-us",
  "/online-program",
  "/become-a-franchisee",
  "/become-a-partner",
  "/partnership-form",
  "/counselling",
  "/counselling-form",
  "/1st-year-12-pass",
  "/1st-year-11",
  "/1st-year-12",
  "/our-courses",
  "/test",
  "/term-and-conditions",
  "/cancellation-and-refund",
  "/privacy-policy",
  "/blogs",
  "/best-cuet-coaching-in-Delhi",
  "/best-cuet-coaching-in-Gurgaon",
  "/best-cuet-coaching-in-patna",
];

// Create the sitemap
const hostname = "https://cuet.plus/";
const sitemapFilePath = path.resolve(__dirname, "public/sitemap.xml");

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(sitemapFilePath);

    // Pipe the sitemap stream to the file
    sitemapStream.pipe(writeStream);

    // Write routes to the stream
    routes.forEach((route) => {
      sitemapStream.write({ url: route, changefreq: "daily", priority: 0.7 });
    });

    // End the stream and wait for it to finish
    sitemapStream.end();

    // Wait for the write stream to complete
    await new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });

    console.log("Sitemap successfully generated!");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSitemap();
