# 🍔 Food Delivery App - Angular Dashboard

A professional, modular Food Delivery Management Dashboard built with Angular and TypeScript. This project demonstrates advanced Angular architecture, dynamic data manipulation, and responsive UI design tailored for food service operations.

## 👨‍💻 Team Details

Meet the developers behind this project:

*   **GOPIREDDY RETHVIK REDDY**
*   **ADERU RAGHAVENDRA TEJA**
*   **ABEL FRANCIS**
*   **V EBINESH**

## 🎯 Project Scope & Features

### 1. TypeScript Foundations & Data Modeling
*   **Strict Typing:** Full implementation of robust interfaces for `MenuItem`, `Restaurant`, and `Order`.
*   **Data Fields:** Comprehensive tracking including ID, Name, Description, Price, Category, and Image URL.

### 2. Angular Architecture
*   **Module-Based Design:** Organized via `AppModule` with clean component declarations.
*   **Component Communication:** Implementation of `@Input()` and `@Output()` decorators for seamless data flow.

### 3. Advanced Dashboard Features
*   **Operational Overview:** Real-time metrics for restaurant listings and order management.
*   **Dynamic Data Controls:**
    *   **Restaurant Listing:** Browse and filter restaurants by cuisine and rating.
    *   **Cart Management:** Add/remove items and calculate total amounts in real-time.
    *   **Order Tracking:** Monitor order status from 'Pending' to 'Delivered'.
*   **Full CRUD Operations:**
    *   ➕ **Create:** Add new menu items or restaurants.
    *   📖 **Read:** Real-time data visualization of menus and orders.
    *   ✏️ **Update:** Editing existing restaurant or menu details.
    *   🗑️ **Delete:** Removing records from the database.

## 🛠️ Technologies Used

| Category | Technology |
| :--- | :--- |
| **Framework** | Angular 17 |
| **Language** | TypeScript |
| **Styling** | Modern CSS3 |
| **Environment** | Node.js, Angular CLI |
| **Editor** | Visual Studio Code |

## 💻 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Karthikr0815/Food-delivery-app.git
    ```

2.  **Navigate to the project directory**
    ```bash
    cd Food-delivery-app
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Run the application**
    ```bash
    ng serve
    ```

**View the dashboard:** Open [http://localhost:4200](http://localhost:4200) in your browser.

## 📂 Project Structure

```text
src/app/
├── components/             # UI Components (Cart, Checkout, Restaurant List)
├── models/                 # Core TypeScript interfaces (MenuItem, Restaurant, Order)
├── services/               # Business logic and data services (Cart, Order)
├── app.component.ts        # Root application logic
└── app.module.ts           # Module definitions
```

## 🚀 Quick Start

*   Ensure you have Node.js (v18+) and Angular CLI installed.
*   Clone and install as shown above.
*   Access the dashboard at [http://localhost:4200](http://localhost:4200).
