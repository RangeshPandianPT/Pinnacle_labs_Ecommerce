**ShopMate** is a modern and responsive Progressive Web App (PWA) designed for seamless online shopping. It combines intuitive user experience, offline capabilities, and push notifications to deliver a reliable and engaging shopping experience.

## 🚀 Features

* ⚡ **Progressive Web App**

  * Works offline via Service Workers
  * Add-to-Home Screen capability
  * Fast load times and responsive design

* 🛒 **Modern E-Commerce UI**

  * Home, Shop, Product, and Cart pages
  * Stylish product cards and detail views
  * Add to Cart + View Cart flow

* 📱 **Mobile-First Design**

  * Fully responsive on all screen sizes
  * Intuitive navigation and accessibility

* 🔔 **Push Notifications (optional)**

  * Notify users about offers and updates

## 📸 UI Screenshots

* Home Page
![Image](https://github.com/user-attachments/assets/213391a7-b91e-413d-bd40-c91dd235f07f)

* Product Details Page (Headphones)
![Image](https://github.com/user-attachments/assets/7e2ade81-7ff0-432b-a7c6-ff5ccb62fca8)

* Add to Cart Confirmation

![Image](https://github.com/user-attachments/assets/ec0bf2c2-cc10-415a-83b3-a40e6f2ea1ca)


*(See `/screenshots` folder for full-size images)*

## 🧱 Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (Vanilla or React)
* **PWA**: Service Workers, Cache API, Web Manifest
* **Design**: Tailwind CSS / Custom CSS
* **Optional Backend**: Firebase / Node.js for cart and push notifications

## 📁 Folder Structure

```
ShopMate-PWA/
│
├── public/
│   ├── manifest.json
│   ├── icons/
│   └── index.html
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── app.js
│
├── service-worker.js
├── package.json
├── tailwind.config.js (if used)
└── README.md
```

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/shopmate-pwa.git
cd shopmate-pwa

# Install dependencies
npm install

# Run locally
npm run dev
```

## 🔧 Build and Deploy

```bash
# Production build
npm run build

# Serve production files
npm run serve
```

For deployment, use:

* **Vercel / Netlify**
* **Firebase Hosting**
* **GitHub Pages (if static)**

## 🧠 Contributing

Feel free to fork and submit pull requests! If you find bugs or want to suggest improvements, open an issue.
