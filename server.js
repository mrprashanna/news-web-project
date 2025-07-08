// WorldLens - Simple Node.js/Express Backend
// This is a basic server to demonstrate how the frontend can be connected.
// To run this:
// 1. Make sure you have Node.js installed.
// 2. Save this file as server.js.
// 3. In your terminal, run `npm init -y`
// 4. Then run `npm install express cors`
// 5. Finally, run `node server.js`
// 6. Your server will be running at http://localhost:3000

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
// Enable CORS (Cross-Origin Resource Sharing) to allow your frontend to make requests
app.use(cors());
// Parse JSON bodies for API requests
app.use(express.json());
// Serve static files (like your HTML, CSS, and frontend JS) from a 'public' directory
// For this to work, you should place your HTML file inside a folder named 'public'.
app.use(express.static(path.join(__dirname, 'public')));


// --- Sample Data (to be replaced with a database) ---
const sampleArticles = [
    {
        id: 1,
        title: "Global Markets Rally on Positive Economic News",
        category: "Business",
        author: "Jane Doe",
        date: "July 8, 2024",
        upvotes: 125,
        downvotes: 12,
        comments: 42,
        imageUrl: "https://placehold.co/400x250/E8A87C/FFF?text=Business"
    },
    {
        id: 2,
        title: "New Breakthrough in Renewable Energy Storage",
        category: "Technology",
        author: "John Smith",
        date: "July 8, 2024",
        upvotes: 340,
        downvotes: 8,
        comments: 98,
        imageUrl: "https://placehold.co/400x250/3498DB/FFF?text=Tech"
    },
    {
        id: 3,
        title: "A Deep Dive into the Amazon Rainforest's Biodiversity",
        category: "Science",
        author: "Maria Garcia",
        date: "July 7, 2024",
        upvotes: 210,
        downvotes: 5,
        comments: 65,
        imageUrl: "https://placehold.co/400x250/2ECC71/FFF?text=Science"
    },
    {
        id: 4,
        title: "The Rise of Independent Cinema in the Streaming Era",
        category: "Culture",
        author: "Ken Adams",
        date: "July 6, 2024",
        upvotes: 88,
        downvotes: 20,
        comments: 33,
        imageUrl: "https://placehold.co/400x250/9B59B6/FFF?text=Culture"
    },
     {
        id: 5,
        title: "Navigating the Complexities of International Diplomacy",
        category: "Politics",
        author: "Chen Wei",
        date: "July 6, 2024",
        upvotes: 150,
        downvotes: 45,
        comments: 112,
        imageUrl: "https://placehold.co/400x250/E74C3C/FFF?text=Politics"
    },
     {
        id: 6,
        title: "Healthy Eating: Debunking Common Nutrition Myths",
        category: "Health",
        author: "Dr. Emily Carter",
        date: "July 5, 2024",
        upvotes: 195,
        downvotes: 15,
        comments: 76,
        imageUrl: "https://placehold.co/400x250/F1C40F/333?text=Health"
    }
];


// --- API Routes ---

// GET /api/articles - Fetches all news articles
app.get('/api/articles', (req, res) => {
    // In a real app, you would fetch this from your database
    res.json(sampleArticles);
});

// POST /api/auth/signup - Handles user registration
app.post('/api/auth/signup', (req, res) => {
    const { name, email, password } = req.body;
    // --- Backend Logic Placeholder ---
    // 1. Validate the input (name, email, password).
    // 2. Check if a user with that email already exists in the database.
    // 3. Hash the password.
    // 4. Save the new user to the database.
    // 5. Generate a JWT (JSON Web Token) for authentication.
    console.log('Signup attempt:', { name, email });
    res.status(201).json({ message: 'User created successfully!', token: 'sample-jwt-token' });
});

// POST /api/auth/login - Handles user login
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    // --- Backend Logic Placeholder ---
    // 1. Find the user by email in the database.
    // 2. If user exists, compare the provided password with the stored hashed password.
    // 3. If they match, generate a JWT.
    console.log('Login attempt:', { email });
    res.status(200).json({ message: 'Login successful!', token: 'sample-jwt-token' });
});

// POST /api/articles/:id/vote - Handles upvoting/downvoting
app.post('/api/articles/:id/vote', (req, res) => {
    const articleId = req.params.id;
    const { voteType } = req.body; // 'upvote' or 'downvote'
    // --- Backend Logic Placeholder ---
    // 1. Verify the user is authenticated (check for a valid JWT).
    // 2. Find the article by its ID in the database.
    // 3. Update the vote count based on the voteType.
    // 4. Ensure a user can only vote once per article.
    console.log(`Vote received for article ${articleId}: ${voteType}`);
    res.status(200).json({ message: 'Vote recorded successfully!' });
});

// POST /api/newsletter/subscribe - Handles newsletter subscription
app.post('/api/newsletter/subscribe', (req, res) => {
    const { email } = req.body;
    // --- Backend Logic Placeholder ---
    // 1. Validate the email format.
    // 2. Add the email to your mailing list in the database.
    console.log(`New newsletter subscription: ${email}`);
    res.status(200).json({ message: 'Thank you for subscribing!' });
});


// --- Server Initialization ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
