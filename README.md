# SEO Business Dashboard

A modern React web application that generates SEO headlines and displays business data like ratings and reviews.

---

## 🚀 Features

- **Business Info Form:** Enter business name and location
- **SEO Headline Generation:** Generate an SEO-friendly headline dynamically
- **Ratings & Reviews:** Show simulated Google rating and review count
- **Modern UI:** Tailwind CSS styling
- **Secure API Communication:** CORS + credentials support

---

## 📘 Technologies Used

### 🎨 Frontend
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast development build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Zustand** - Simple state management solution
- **Axios** - HTTP client for making API requests
- **React Hot Toast** - Beautiful notifications and toasts
- **Lucide React** - Icon library for modern icons
  
---

## 🌐 API Endpoints

### `POST /business-data`
**Purpose:** Submit business name and location

**Request Body:**
{
  "name": "Business Name",
  "location": "Location"
}
Response:
{
  "rating": 4.8,
  "reviews": 120,
  "headline": "Your SEO Headline"
}
GET /regenerate-headline?name=<name>&location=<location>
Purpose: Generate a new SEO headline for the submitted business

Response:
{
  "headline": "New SEO Headline"
}
