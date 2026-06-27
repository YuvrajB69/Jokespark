# JokeSpark ⚡

An AI-powered joke generator that fetches jokes across multiple categories with dual API integration and intelligent fallback system.

## 🚀 Live Demo
[jokespark.netlify.app](https://jokespark.netlify.app)

## 🛠️ Built With
- HTML5, CSS3, Vanilla JavaScript
- Bootstrap 5 (dark theme)
- [JokeAPI.dev](https://v2.jokeapi.dev/)
- [Official Joke API](https://official-joke-api.appspot.com/)

## ✨ Features
- Generate jokes by topic — programming, dark, hindi, family, sports, music and more
- Dual API integration with automatic fallback to local joke collection
- 50+ built-in jokes across 12 categories including Hindi jokes
- Like and share jokes
- Session statistics tracking (jokes generated, liked, favorite category)
- Fully responsive dark theme UI
- Zero dependencies — pure HTML, CSS, JS

## 📂 Project Structure

jokespark/

├── index.html # Main UI
├── custom.css # Custom styles
└── joke-generator.js # Core logic + API integration

## 🔧 Run Locally
No setup needed. Just clone and open:

```bash
git clone https://github.com/YuvrajB69/Jokespark.git
cd Jokespark
# Open index.html in your browser
```

## 🔌 How It Works
1. User enters a topic (optional) and clicks Generate
2. App tries JokeAPI.dev first
3. Falls back to Official Joke API if first fails
4. Falls back to built-in local joke collection if both APIs fail
5. Guarantees a joke every single time — 100% uptime

## 📬 Contact
Built by Yuvraj Bakshi — [GitHub](https://github.com/YuvrajB69)
Email- yuvrajbakshi85@gmail.com