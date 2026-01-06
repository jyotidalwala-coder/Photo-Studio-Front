📸 Photo Studio – React Frontend (Vite)

React frontend for JMK Photo Studio, powered by a custom WordPress REST API (photostudio/v1).
Built using Vite + React for fast development and clean architecture.

🚀 Tech Stack

React 18

Vite

WordPress (Custom REST API)

React Router

Fetch API

Black-themed responsive UI

⚙️ Prerequisites

Node.js 18+ (Recommended)

npm

WordPress installed locally or on a server

Photo Studio Backend WordPress Plugin activated

Check Node version:

node -v

📦 Installation
npm install

▶️ Run Development Server
npm run dev


Application will run at:

http://localhost:5173

🔧 API Configuration

The frontend communicates with WordPress via a custom REST API namespace.

API Base URL (current setup)
const API_BASE = 'http://localhost/jmkphotostudio/wp-json/photostudio/v1';


Make sure:

WordPress is accessible at http://localhost/jmkphotostudio

Permalinks are enabled (Settings → Permalinks → Post name)

🔌 Available API Endpoints
📂 Categories
GET /wp-json/photostudio/v1/categories


Returns album categories (Marriage, Pre-wedding, Birthday, etc.)

📸 Albums by Category
GET /wp-json/photostudio/v1/albums?category={slug}


Example:

/albums?category=marriage

🖼 Single Album Detail
GET /wp-json/photostudio/v1/album/{id}


Returns:

Album title

Featured image

Gallery images

Video URL

Event date

Slider flag

🏢 Studio Information
GET /wp-json/photostudio/v1/studio-info


Response:

{
  "name": "JMK Photo Studio",
  "email": "contact@jmkphotostudio.com",
  "phone": "+91 99999 88888",
  "logo": "https://example.com/logo.png"
}

📁 Project Structure
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── AlbumCard.jsx
│   └── Slider.jsx
├── pages/
│   ├── Home.jsx
│   ├── Category.jsx
│   └── AlbumDetail.jsx
├── services/
│   └── wpApi.js
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx

🖼 Features

Full-width modern layout

Category listing with images & descriptions

Albums grouped by category

Album detail page with:

Featured image

Gallery

Video

Event date

Homepage slider (controlled from WP)

Studio logo & contact info from WordPress

Fully responsive & black-themed UI

🛠 Build for Production
npm run build


Preview production build:

npm run preview

⚠️ Common Issues
'vite' is not recognized

✔ Always use:

npm run dev

API not loading

✔ Check:

WordPress site URL

Plugin activated

Permalinks enabled

Correct API base URL

👨‍💻 Author

Jyoti Dalwala
WordPress & React Developer
