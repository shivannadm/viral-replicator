# Viral Replicator 🚀

An AI-Powered LinkedIn Post Generator built with React, Vite, and Tailwind CSS. This application is based on an analysis of 2,000+ viral posts and helps users create content engineered for engagement.

## 📸 Project Outcomes

Here is the application in its final, working state.

| Images | Name |
| :---: | :---: |
|<img width="250" height="200" alt="Screenshot 2025-10-31 143324" src="https://github.com/user-attachments/assets/a6de7f28-e69b-48aa-9209-c8aaa3d9822c" />| Empty State |
 <img width="250" height="200" alt="image" src="https://github.com/user-attachments/assets/9d36f4f9-90b1-447e-8197-b751adc4b817" />| Generated Post |
|<img width="250" height="200" alt="image" src="https://github.com/user-attachments/assets/ec2c9231-899c-4394-860b-21777579c60d" />| Virality Analysis |

## ✨ Features

* **Dynamic Post Generation:** Creates unique, viral-style posts from a single topic.
* **Sentiment Strategy:** Choose between "Mixed," "Negative," or "Positive" tones for different impacts.
* **Instant Virality Analysis:** Get a real-time "Viral Score" for your post based on:
    * **Word Count:** Optimizes for the 150-200 word "sweet spot".
    * **Hashtag Count:** Recommends 2 or fewer hashtags for maximum reach.
    * **Readability:** Checks for sufficient line breaks.
    * **Engagement Hook:** Verifies the post ends with a call-to-action question.
* **Copy to Clipboard:** Instantly copy the generated post to your clipboard.
* **Clean, Responsive UI:** Built from scratch with Tailwind CSS.

## 🛠️ Tech Stack

* **Frontend:** React
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Icons:** Lucide React

## 📂 File Structure

Here is the main file structure for the project:
```
VIRAL-REPLICATOR/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitattributes
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

##Install Dependencies
```
npm install
```
## Fix the PostCSS Error
When you first run <code>npm install</code>, you may encounter an error with Tailwind and PostCSS (<code>[plugin:vite:css] [postcss]...</code>).

To fix this, you need to install a specific PostCSS package for Tailwind:
```npm install -D @tailwindcss/postcss ```

Then, replace the contents of your <code>postcss.config.js</code> with this:

<code>postcss.config.js</code>
```
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new package here
    'autoprefixer': {},
  },
}
```
## Fix the CSS Conflicts
Vite's default boilerplate CSS can conflict with Tailwind, causing a dark background and white text you can't see.

To fix this, you must clean your CSS files:

<code>src/index.css</code> Delete everything in this file and replace it with only the 3 Tailwind directives:

CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Run the Project

Now that the setup is complete, run the development server:
```
npm run dev
```
Your app will be running on <code>http://localhost:5173/ </code>and will look exactly like the screenshots.

## ☁️ Deploy to Vercel
Push your completed project to your GitHub repository.

Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.

Click "Add New... > Project" and import your viral-replicator repository.

Vercel will automatically detect that it is a Vite project.

Confirm the default settings (they are usually correct) and click "Deploy".

## 🧠 Author

**Shivanna DM**  
🎓 Project — viral post replicator  
💬 Focus: AI analysis, Full-Stack Development, Rwact, Vercel
🌐 GitHub: [github.com/shivannadm](https://github.com/shivannadm)

## ✅ Summary

You now have a complete project + deployment, secure configuration, and modular extensibility.  

💡 **"Think it. Build it. Deploy it."**  
This stack proves how fast AI products can go from idea → prototype → production.

⭐ **Star this repo if you found it helpful!**  
Happy building! 🚀
