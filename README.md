# 📄 Snap Resume

Snap Resume is a web application that allows users to generate professional, clean, and customizable resumes by simply entering their personal and professional details.  
With real-time preview,  and integrated payment gateway, creating and downloading a polished resume becomes fast and hassle-free.

---

## 🚀 Features

- 🧾 Easy-to-use form for entering resume details
- 🔄 Real-time resume preview
- 📥 Download resume as PDF after payment
- 💳 Stripe payment gateway integration (Test mode ready)
- 💾 Option to save and load resume data locally
- 📱 Fully responsive design

---

## 🛠 Tech Stack

**Frontend:**
- React.js  
- Tailwind CSS / Custom CSS  
- Framer Motion (animations)  
- html2canvas + jsPDF / react-to-print (PDF export)  

**Backend:**
- Node.js + Express  
- MongoDB + Mongoose  
- Stripe (payment gateway)  

---

## ⚙️ How to Run the Project

### 1️⃣ Prerequisites
Make sure you have installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) running locally or in the cloud
- A [Stripe](https://stripe.com/) account (for payment gateway)

---

### 2️⃣ Clone the Repository

git clone https://github.com/mahamwaseem/snap_resume.git

cd snap_resume


---

### 3️⃣ Backend Setup


cd Backend

npm install

Run the backend:


node servers.js


Backend will run at: [http://localhost:5000]

---

### 4️⃣ Frontend Setup


cd ../Components

npm install




Frontend will run at: 

[http://localhost:3000]
---

### 5️⃣ Test Payments (Stripe Test Mode)

In checkout, use Stripe’s test card:


Card Number: 4242 4242 4242 4242

Expiry: Any future date (MM/YY)

CVC: Any 3 digits

ZIP: Any 5 digits


---

## 📂 Folder Structure


snap_resume/

│

├── Backend/

│   ├── routes/

│   │   ├── payments.js

│   │   └── resumeR.js

│   ├── models/

│   │   ├── Payment.js

│   │   └── Resume.js

│   ├── servers.js

│  

│

├─ (React App)

│   ├── src/

│   │   ├── myComponents/

│   │   │   ├── PaymentButton.js

│   │   │   ├── HeroSection.js

│   │   │   ├── Header.js

│   │   │    ├── Footer.js


│   ├── package.json

│   

│

└── README.md


---

## 📜 License

This project is licensed under the MIT License – you are free to use, modify, and distribute with attribution.

---

## 📧 Contact

For any questions or suggestions, feel free to reach out:

* Email: [mahamw440@gmail.com]




---



