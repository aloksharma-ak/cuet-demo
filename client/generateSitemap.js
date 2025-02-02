import { SitemapStream } from "sitemap";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hostname = "https://cuet.plus/";
const sitemapFilePath = resolve(__dirname, "public/sitemap.xml");

// Hardcoded routesConfigArray
const routesConfigArray = [
  { path: "/" },
  { path: "/about-company" },
  { path: "/cuet-scholarship" },
  { path: "/cuet-scholarship/star-scholarship" },
  { path: "/cuet-scholarship/shine-scholarship" },
  { path: "/cuet-scholarship/spark-scholarship" },
  { path: "/star-program" },
  { path: "/shine-program" },
  { path: "/spark-program" },
  { path: "/scholarship-form" },
  { path: "/contact-us" },
  { path: "/online-program" },
  { path: "/become-a-franchisee" },
  { path: "/become-a-partner" },
  { path: "/partnership-form" },
  { path: "/counselling" },
  { path: "/counselling-form" },
  { path: "/1st-year-12-pass" },
  { path: "/1st-year-11" },
  { path: "/1st-year-12" },
  { path: "/our-courses" },
  { path: "/our-courses/model-1" },
  { path: "/our-courses/model-2" },
  { path: "/test" },
  { path: "/term-and-conditions" },
  { path: "/privacy-policy" },
  { path: "/cancellation-and-refund" },
  { path: "/blogs" },
  { path: "/centers" },
  { path: "/best-cuet-coaching-in-delhii" }
];

// Predefined center URLs for dynamic routes
const centerUrls = [
  "best-cuet-coaching-in-delhi",
  "best-cuet-coaching-in-bihar",
  "best-cuet-coaching-in-haryana",
  "best-cuet-coaching-in-punjab",
  "best-cuet-coaching-in-jharkhand",
  "best-cuet-coaching-in-rajasthan",
  "best-cuet-coaching-in-west-bengal",
  "best-cuet-coaching-in-uttar-pradesh",
];

async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(sitemapFilePath);
    sitemapStream.pipe(writeStream);

    // Write static routes to the sitemap
    routesConfigArray.forEach((route) => {
      sitemapStream.write({
        url: route.path,
        changefreq: "daily",
        priority: 0.7,
      });
    });

    // Write dynamic center URLs to the sitemap
    centerUrls.forEach((center) => {
      sitemapStream.write({
        url: `/centers/${center}`,
        changefreq: "daily",
        priority: 0.7,
      });
    });

    sitemapStream.end();

    // Wait for the write stream to finish
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
