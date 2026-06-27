const FALLBACK_JOKES = [
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", category: "science" },
    { setup: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!", category: "general" },
    { setup: "Why don't eggs tell jokes?", punchline: "They'd crack each other up!", category: "food" },
    { setup: "What do you call a fake noodle?", punchline: "An impasta!", category: "food" },
    { setup: "Why did the math book look so sad?", punchline: "Because it was full of problems!", category: "school" },
    { setup: "What do you call a bear with no teeth?", punchline: "A gummy bear!", category: "animals" },
    { setup: "Why don't programmers like nature?", punchline: "It has too many bugs!", category: "programming" },
    { setup: "What's a computer's favorite snack?", punchline: "Microchips!", category: "technology" },
    { setup: "I told my wife she was drawing her eyebrows too high.", punchline: "She looked surprised.", category: "dark" },
    { setup: "My therapist says I have a preoccupation with vengeance.", punchline: "We'll see about that.", category: "dark" },
    { setup: "What's the difference between a poorly dressed man on a bike and a well-dressed man on a tricycle?", punchline: "Attire.", category: "dark" },
    { setup: "I have many jokes about unemployed people.", punchline: "Sadly, none of them work.", category: "dark" },
    { setup: "My grandfather said my generation relies too much on technology.", punchline: "I called him a hypocrite and unplugged his life support.", category: "dark" },
    { setup: "What do you call a cheap circumcision?", punchline: "A rip-off.", category: "dark" },
    { setup: "I was wondering why the ball kept getting bigger and bigger.", punchline: "Then it hit me.", category: "dark" },
    { setup: "What's the last thing that goes through a bug's mind when it hits a windshield?", punchline: "Its butt.", category: "dark" },
    { setup: "What's worse than finding a worm in your apple?", punchline: "Finding half a worm.", category: "extreme" },
    { setup: "Why did the zombie go to school?", punchline: "He wanted to improve his dead-ucation.", category: "extreme" },
    { setup: "Why did the feminist refuse to use a ladder?", punchline: "Because she didn't want to climb the patriarchal structure.", category: "feminism" },
    { setup: "Why don't feminists need calendars?", punchline: "Because every day is a good day to smash the patriarchy.", category: "feminism" },
    { setup: "What did the feminist say when asked to make a sandwich?", punchline: "Make your own sandwich, I'm busy breaking glass ceilings.", category: "feminism" },
    { setup: "Why did the feminist become a carpenter?", punchline: "She wanted to nail down equality.", category: "feminism" },
    { setup: "What's a feminist's favorite type of music?", punchline: "Heavy metal, because it's about breaking chains.", category: "feminism" },
    { setup: "Why don't feminists play poker?", punchline: "Because they're tired of men thinking they're bluffing.", category: "feminism" },
    { setup: "What do you call a feminist who works in tech?", punchline: "A code-breaker.", category: "feminism" },
    { setup: "Why don't scientists trust atoms?", punchline: "Because they make up everything!", category: "dad" },
    { setup: "I'm reading a book about anti-gravity.", punchline: "It's impossible to put down!", category: "dad" },
    { setup: "Why did the coffee file a police report?", punchline: "It got mugged!", category: "dad" },
    { setup: "Why did the employee get fired from the calendar factory?", punchline: "He took a day off!", category: "work" },
    { setup: "What's the best thing about Switzerland?", punchline: "I don't know, but the flag is a big plus.", category: "work" },
    { setup: "My wife told me to stop singing 'Wonderwall'.", punchline: "I said maybe...", category: "relationship" },
    { setup: "Why don't some couples go to the gym?", punchline: "Because some relationships don't work out!", category: "relationship" },
    { setup: "Why don't basketball players go on vacation?", punchline: "They would get called for traveling!", category: "sports" },
    { setup: "Why was the baseball player arrested?", punchline: "For stealing second base!", category: "sports" },
    { setup: "Why don't musicians ever get locked out?", punchline: "Because they always have the right key!", category: "music" },
    { setup: "What do you call a musical insect?", punchline: "A hum-bug!", category: "music" },
    { setup: "Mummy ne beta se kaha: 'Tu itna sharma kyu raha hai?'", punchline: "Beta bola: 'Kyunki main Sharma hun!'", category: "hindi" },
    { setup: "Papa ne beta se pucha: 'Tumhare paas kitne rupaye hain?'", punchline: "Beta: 'Jo aapne diye the woh khatam ho gaye, jo nahi diye the woh abhi bhi nahi hain!'", category: "hindi" },
    { setup: "Biwi ne pati se kaha: 'Aap mujhse jhooth bolte hain!'", punchline: "Pati: 'Arrey waah! Kitni jaldi seekh gayi!'", category: "hindi" },
    { setup: "Mummy: 'Beta, paani ki bottle leke aa!'", punchline: "Beta: 'Mummy, bottle mein paani hai ya paani mein bottle?'", category: "hindi" },
    { setup: "Dadi ne pota se kaha: 'Beta, school mein kya sikha?'", punchline: "Pota: 'Dadi, sikha toh kuch nahi, bas teacher ne bahut kuch sikhaya!'", category: "hindi" },
    { setup: "Papa ne beta se pucha: 'Tum roz school kyu late jaate ho?'", punchline: "Beta: 'Papa, board pe likha hai - School Late!'", category: "hindi" },
    { setup: "Mummy ne beta se kaha: 'Khana khao, nahi toh kamzor ho jaoge!'", punchline: "Beta: 'Mummy, main toh pehle se hi kamzor hun, ab aur kamzor kaise banunga?'", category: "hindi" },
    { setup: "Biwi: 'Aapko meri yaad aati hai office mein?'", punchline: "Pati: 'Haan, jab koi kaam galat hota hai!'", category: "hindi" },
    { setup: "Beta ne papa se kaha: 'Papa, main cricket khelna chahta hun!'", punchline: "Papa: 'Pehle homework kar, phir cricket... beta: Cricket mein bhi homework hoti hai - practice!'", category: "family" },
    { setup: "Mummy ne beti se pucha: 'Beta, kitchen mein kya kar rahi ho?'", punchline: "Beti: 'Mummy, Maggi banane ki koshish kar rahi hun!' Mummy: 'Aur smell?' Beti: 'Woh toh side effect hai!'", category: "family" },
    { setup: "Nana ji ne pote se kaha: 'Beta, hamara zamana alag tha!'", punchline: "Pota: 'Nana ji, aapka zamana black & white tha, hamara colorful hai!'", category: "family" },
    { setup: "Saas ne bahu se kaha: 'Tumhe khana banana aata hai?'", punchline: "Bahu: 'Mummy ji, YouTube dekh dekh kar seekh rahi hun!' Saas: 'YouTube mein taste thodi na aata hai!'", category: "family" },
]

class JokeGenerator {
    constructor() {
        this.currentJoke = null;
        this.stats = { jokesGenerated: 0, jokesLiked: 0, categories: {} };
        this.isLoading = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadStats();
        this.updateStatsDisplay();
    }

    setupEventListeners() {
        document.getElementById('joke-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.generateJoke();
        });
    }

    async generateJoke() {
        if (this.isLoading) return;
        const topic = document.getElementById('topic-input').value.trim();
        this.setLoadingState(true);
        this.showState('loading');

        try {
            let joke = await this.fetchFromJokeAPI(topic);
            if (!joke) joke = await this.fetchFromOfficialAPI();
            if (!joke) joke = this.getFallbackJoke(topic);
            this.displayJoke(joke);
            this.updateStats(joke);
        } catch (err) {
            const joke = this.getFallbackJoke(topic);
            this.displayJoke(joke);
            this.updateStats(joke);
        } finally {
            this.setLoadingState(false);
        }
    }

    getFallbackJoke(topic) {
        if (topic) {
            const matches = FALLBACK_JOKES.filter(j =>
                j.category.toLowerCase().includes(topic.toLowerCase())
            );
            if (matches.length) return matches[Math.floor(Math.random() * matches.length)];
        }
        return FALLBACK_JOKES[Math.floor(Math.random() * FALLBACK_JOKES.length)];
    }

    async fetchFromJokeAPI(topic) {
        try {
            const categoryMap = {
                programming: 'Programming', code: 'Programming', dark: 'Dark',
                'dark humor': 'Dark', pun: 'Pun', christmas: 'Christmas', spooky: 'Spooky'
            };
            const category = categoryMap[topic?.toLowerCase()] || 'Any';
            const res = await fetch(
                `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart`,
                { mode: 'cors' }
            );
            const data = await res.json();
            if (!data.error) return { setup: data.setup, punchline: data.delivery, category: data.category };
        } catch (e) { return null; }
        return null;
    }

    async fetchFromOfficialAPI() {
        try {
            const res = await fetch('https://official-joke-api.appspot.com/random_joke', { mode: 'cors' });
            const data = await res.json();
            return { setup: data.setup, punchline: data.punchline, category: data.type };
        } catch (e) { return null; }
    }

    displayJoke(joke) {
        this.currentJoke = joke;
        const setupContainer = document.getElementById('joke-setup-container');
        const setupEl = document.getElementById('joke-setup');
        const punchlineEl = document.getElementById('joke-punchline');
        const categoryEl = document.getElementById('joke-category');
        if (joke.setup) {
            setupEl.textContent = joke.setup;
            setupContainer.classList.remove('d-none');
        } else {
            setupContainer.classList.add('d-none');
        }
        punchlineEl.textContent = joke.punchline;
        categoryEl.textContent = joke.category || 'general';
        this.showState('joke');
    }

    showState(state) {
        ['initial', 'loading', 'error'].forEach(s => {
            const el = document.getElementById(`${s}-state`);
            if (el) el.classList[s === state ? 'remove' : 'add']('d-none');
        });
        const jokeDisplay = document.getElementById('joke-display');
        jokeDisplay.classList[state === 'joke' ? 'remove' : 'add']('d-none');
    }

    showError(msg) {
        document.getElementById('error-message').textContent = msg;
        this.showState('error');
    }

    setLoadingState(loading) {
        this.isLoading = loading;
        const btn = document.getElementById('generate-btn');
        const btnText = document.getElementById('btn-text');
        const spinner = document.getElementById('loading-spinner');
        btn.disabled = loading;
        btnText.textContent = loading ? 'Generating...' : 'Generate Joke';
        spinner.classList[loading ? 'remove' : 'add']('d-none');
    }

    updateStats(joke) {
        this.stats.jokesGenerated++;
        const cat = joke.category || 'general';
        this.stats.categories[cat] = (this.stats.categories[cat] || 0) + 1;
        this.saveStats();
        this.updateStatsDisplay();
    }

    updateStatsDisplay() {
        document.getElementById('jokes-generated').textContent = this.stats.jokesGenerated;
        document.getElementById('jokes-liked').textContent = this.stats.jokesLiked;
        const fav = Object.keys(this.stats.categories).length
            ? Object.entries(this.stats.categories).reduce((a, b) => a[1] > b[1] ? a : b)[0]
            : 'None';
        document.getElementById('favorite-category').textContent = fav;
    }

    saveStats() {
        try { localStorage.setItem('jokeStats', JSON.stringify(this.stats)); } catch (e) {}
    }

    loadStats() {
        try {
            const s = localStorage.getItem('jokeStats');
            if (s) this.stats = { ...this.stats, ...JSON.parse(s) };
        } catch (e) {}
    }

    rateJoke(rating) {
        if (!this.currentJoke || rating !== 'like') return;
        this.stats.jokesLiked++;
        this.saveStats();
        this.updateStatsDisplay();
    }

    shareJoke() {
        if (!this.currentJoke) return;
        const text = `${this.currentJoke.setup}\n\n${this.currentJoke.punchline}`;
        navigator.clipboard?.writeText(text);
    }
}

window.generateJoke = () => jokeGen.generateJoke();
window.rateJoke = (r) => jokeGen.rateJoke(r);
window.shareJoke = () => jokeGen.shareJoke();

document.addEventListener('DOMContentLoaded', () => { window.jokeGen = new JokeGenerator(); });