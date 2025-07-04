## 🌤️ SkyCast – Weather Dashboard

SkyCast is a responsive React-based weather application that allows users to search any city and view real-time weather details, a 5-day forecast, and switch between Celsius and Fahrenheit.

#### App Logo:-

![SkyCast Logo](./public/logo.png) <!-- Add your logo path if available -->

---

### My Approach

To build this weather dashboard, I started with a **Vite + React** setup and structured the project into modular components using functional **React Hooks**. I used **styled-components** for styling and **React Context** to manage the global state like selected city and unit preferences.

To efficiently fetch and cache data, I integrated **React Query v5**, which polls the OpenWeatherMap API every 30 seconds. The forecast is intelligently filtered to show exactly 5 future days, excluding today, based on available hourly data.

Key features like unit toggle (°C/°F), local storage of the last searched city, error handling for invalid inputs, and responsive design were implemented to demonstrate best practices in modern React development.

The UI design was modeled to resemble a clean weather card interface with gradients, iconography, and mobile-friendly responsiveness.

---

### 🚀 Features

- 🔍 Search weather by city name
- 🌡 Display temperature, humidity, condition, and weather description
- 📅 5-day forecast aligned with current time of day
- 🌐 Switch between °C and °F
- 🔁 Auto-refresh data every 30 seconds
- 📦 Powered by **React Query** for efficient caching and refetching
- 🔒 Handles invalid input and API errors gracefully
- 📱 Fully responsive and mobile-friendly
- 💾 Last searched city is saved via `localStorage`

---

### 🛠 Tech Stack

- **React.js + Vite**
- **React Context API**
- **@tanstack/react-query (React Query v5)**
- **Styled-components**
- **OpenWeatherMap API**

---

### 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/rekha0suthar/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

> 🔐 You can get your API key from: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)

4. **Run the application**

```bash
npm run dev
```

---

### 🖼 Demo

> Live demo: [https://skycast-pearl.vercel.app/](https://skycast-pearl.vercel.app/) <!-- Replace with your deployment link -->

---

### 🧪 Folder Structure

```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherDashboard.jsx
│   ├── Forecast.jsx
│   └── ErrorMessage.jsx
│   ├── WeatherInfo.jsx
│   └── UnitToggle.jsx

├── context/
│   └── WeatherContext.jsx
├── styles/
│   └── GlobalStyle.js
├── App.jsx
└── main.jsx
```

---

### 💡 Future Improvements

- 🔔 Add notification for severe weather alerts
- 📍 Use geolocation to show weather of current location
- 🕒 Hourly forecast support
- 📊 Add charts using Chart.js or D3
