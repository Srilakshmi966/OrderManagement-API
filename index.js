const express = require("express");
const cors = require("cors");
const orderRoutes = require("./src/routes/orderRoutes");
const db = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 8080;

// 📌 Middlewares
app.use(cors());
app.use(express.json());

// 📌 Logging Middleware
app.use((req, res, next) => {
    console.log("=======================================");
    console.log(`📌 Incoming Request: ${req.method} ${req.url}`);
    console.log("📋 Headers:", JSON.stringify(req.headers, null, 2));

    if (req.method === "GET") {
        if (Object.keys(req.query).length > 0) {
            console.log("🔎 Query Params:", JSON.stringify(req.query, null, 2));
        } else {
            console.log("🔎 Query Params: None");
        }
    } else {
        if (Object.keys(req.body).length > 0) {
            console.log("📦 Request Body:", JSON.stringify(req.body, null, 2));
        } else {
            console.log("📦 Request Body: None");
        }
    }

    console.log("=======================================");
    next();
});

// 📌 Register Routes
app.use("/api/orders", orderRoutes);

// 📌 Test Route (Optional)
app.get("/", (req, res) => {
    res.send("🚀 Order API is running...");
});

// 📌 Start Server
app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);

    try {
        // Test DB connection on start
        await db.promise().query("SELECT 1");
        console.log("✅ Connected to MySQL Database");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1); // Stop the server if DB connection fails
    }
});
 



