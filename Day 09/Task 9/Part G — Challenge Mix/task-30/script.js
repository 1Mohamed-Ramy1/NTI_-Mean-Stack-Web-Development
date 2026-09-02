// Task 30: const config object

const APP_CONFIG = {
  name: "MyApp",
  version: "1.0.0",
  api: {
    baseUrl: "https://api.example.com",
    timeout: 5000
  },
  features: ["auth", "dashboard"]
};

APP_CONFIG.api.timeout = 10000;
APP_CONFIG.features.push("notifications");

console.log("APP_CONFIG:", APP_CONFIG);

try {
  APP_CONFIG = { name: "NewApp" };
} catch (error) {
  console.log("Reassignment error:", error.message);
}
