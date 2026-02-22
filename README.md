# 🛒 Amazon Clone

A fully responsive Amazon.in clone built with **HTML**, **CSS**, and **JavaScript** — no frameworks, no libraries.

![Amazon Clone](images/hero_image.jpg)

---

## 📁 Project Structure

```
amazon-clone/
│
├── index.html        # Main HTML file
├── style.css         # All styles + responsive design
├── script.js         # JavaScript interactivity
│
└── images/           # All project images
    ├── amazon_logo.png
    ├── hero_image.jpg
    ├── flag-removebg-preview.png
    ├── m1.jpg – m12.jpg       (Mobile products)
    ├── c1.jpg – c15.jpg       (Clothing products)
    ├── item1.jpg – item13.jpg (Bottom card products)
    └── 1.jpg – 12.jpg         (Other product images)
```

---

## ✨ Features

- ✅ Fully responsive — works on mobile, tablet, and desktop
- ✅ Amazon-style navbar with search bar, cart, sign in
- ✅ Category panel with icons
- ✅ Hero banner with overlapping product cards
- ✅ Horizontally scrollable product rows (Mobile & Clothing)
- ✅ Second product card section with image placeholders
- ✅ Footer with links, language selector, and copyright
- ✅ JavaScript interactivity — cart counter, toast notifications, search

---

## 🧠 JavaScript Features

| Feature | Description |
|---|---|
| 🛒 Cart Counter | Updates count in navbar when items are added |
| 🔔 Toast Notification | Slide-up toast message for all interactions |
| 🔍 Search | Works on Enter key or search icon click |
| 🖼️ Image Click | Shows quick view toast with product name |
| ⬆️ Back to Top | Smooth scroll on footer link click |
| 👤 Sign In Click | Shows "coming soon" toast |

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 1024px` | 4-column card grid |
| `≤ 1024px` | 2-column card grid |
| `≤ 768px` | 2-column cards, hidden address/language |
| `≤ 480px` | 1-column cards, search bar on new row |

---

## 🎨 Fonts & Icons

- **Fonts:** [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) + [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) via Google Fonts
- **Icons:** [Font Awesome 6](https://fontawesome.com/)

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/amazon-clone.git
   ```

2. **Open in browser**
   ```bash
   cd amazon-clone
   # Just open index.html in your browser
   open index.html
   ```
   > Or use the **Live Server** extension in VS Code for best results.

3. **Add your images**
   - Place all images inside the `images/` folder
   - Image names follow the pattern: `m1.jpg`, `c1.jpg`, `item1.jpg` etc.

---

## 🖼️ Adding Images to Bottom Card Section

The second card container uses named images. Replace placeholders by adding:

```
images/item1.jpg  → item2.jpg  → item3.jpg  → item4.jpg   (Card 1)
images/item5.jpg  → item6.jpg  → item7.jpg  → item8.jpg   (Card 2)
images/item13.jpg                                           (Card 3 — single image)
images/item9.jpg  → item10.jpg → item11.jpg → item12.jpg  (Card 4)
```

---

## 📌 Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, Media Queries)
- Vanilla JavaScript (ES6)
- Font Awesome 6
- Google Fonts

---

## 🙌 Credits

Built as a frontend practice project inspired by [Amazon.in](https://www.amazon.in).

> ⚠️ This project is for **educational purposes only**. Not affiliated with Amazon.