# 🎓 Tutor Recommendation App

An AI-powered web application that recommends tutors based on user input.
Built using **Next.js**, **Groq AI**, and **external APIs** to simulate real-world tutor data.

---

## 🚀 Features

* 🔍 Search tutors based on subject or learning need
* 🤖 AI-generated tutor recommendations (Groq API)
* 🌐 Real-time random user data (RandomUser API)
* ⭐ Dynamic rating and experience generation
* 🎨 Responsive and modern UI
* ⚡ Fast and lightweight (Next.js App Router)

---

## 🧠 How It Works

1. User enters a subject (e.g., "Java", "Math")
2. Frontend sends request to backend API
3. Backend:

   * Fetches random real names from API
   * Uses Groq AI to generate relevant subjects
4. Combines data and returns tutor list
5. UI displays recommended tutors

---

## 🛠️ Tech Stack

* Frontend: Next.js (React, TypeScript)
* Backend: Next.js API Routes
* AI: Groq API (LLaMA 3.1)
* External API: RandomUser API
* Styling: CSS Modules

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tutor-recommendation-app.git
cd tutor-recommendation-app
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Add environment variables

Create a file:

```
.env.local
```

Add your Groq API key:

```
GROQ_API_KEY=your_api_key_here
```

---

### 4️⃣ Run the project

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 📂 Project Structure

```
src/
 ├── app/
 │    ├── api/
 │    │    └── groq-recommendations/
 │    │         └── route.ts
 │    └── page.tsx
 │
 ├── components/
 │    └── TutorRecommendationChat/
 │         ├── TutorRecommendationChat.tsx
 │         └── TutorRecommendationChat.module.css
```

---

## ⚠️ Important Notes

* Do NOT upload `.env.local` to GitHub
* Add `.env.local` in `.gitignore`
* Requires internet connection for APIs

---

## 🔮 Future Enhancements

* 🎥 YouTube learning video integration
* ⭐ Star rating UI
* 👤 User authentication
* 📊 Personalized recommendations
* 🌙 Dark mode

---

## 📸 Demo

Enter a subject like:

```
Java / Math / Science
```

Get:

* Real tutor names
* AI-generated subjects
* Experience & rating

---

## 👨‍💻 Author

Developed by **Hariharan**

* GitHub: https://github.com/hariharan1009

