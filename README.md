<div align="center">
  <h1>KBD DEEP</h1>
</div>

---

## Introduction

KBD DEEP is a modern e-commerce website exclusively for mechanical keyboard enthusiasts. It provides a seamless shopping experience with easy product browsing, detailed product pages, and a smooth cart system. Administrators have powerful tools for managing products, and users enjoy features like fast search, page refresh warnings, and filtering. The site integrates with Stripe for secure payments, aiming to create a user-friendly online store for mechanical keyboard aficionados.

## Project Description

KBD DEEP is built with a robust tech stack that includes React, Redux, Vite, TypeScript, Node.js, Express, MongoDB, and Mongoose. The platform allows users to explore a wide range of mechanical keyboards, manage their shopping cart, and complete purchases securely. Administrators can efficiently manage product listings, ensuring a dynamic and up-to-date inventory.

## Features

- **Homepage**: Featuring a hero section, service advertisements, featured products, top brands, customer reviews, and informational sections.
- **Products Page**: Comprehensive list of products with search, filtering, and sorting options.
- **Product Details Page**: Detailed view of each product with the ability to add items to the cart.
- **Cart Page**: Manage cart items, view pricing details, and proceed to checkout.
- **Checkout Page**: User details collection and payment methods.
- **Product Management/Dashboard Page**: Admin panel for product management.
- **About Us Page**: Informative and visually appealing about page.
- **Contact Us Page**: Detailed contact information and user engagement options.
- **Responsive Design**: Ensures a smooth experience across all devices.
- **Stripe Integration**: Secure payment processing.
- **Debounce API Calls**: Optimized search functionality.
- **Page Refresh Warning**: Prevents loss of cart data.

## Technology Stack

- **Frontend**: React with Vite, TypeScript, Redux, RTK Query.
- **Backend**: TypeScript, Node.js, Express, MongoDB, Mongoose, Zod.

## Installation Guideline

### Prerequisites

- Node.js
- MongoDB
- Bun (optional but recommended)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mhlehri/kbd-deep.git
   ```
1. **Clone the Repository of server**
   ```bash
   git clone https://github.com/mhlehri/kbd-server.git
   ```
1. **Frontend Setup**

   ```bash
   cd kbd-deep
   npm install
   npm run dev
   ```

1. **Backend Setup**

   ```bash
   cd kbd-server
   npm install
   npm run dev

   ```

### Configuration

1. Create a .env file in the root directory of the backend project.
1. Add necessary configuration variables in the .env file.

   ```bash
   PORT=your_port_number
   URI=your_db_connection_uri
   ```

## Usage

Visit the live site at [KBD DEEP](https://kbd-deep.vercel.app/).

### Example Usage

#### Browsing Products

- Navigate to the products page to explore available mechanical keyboards.
- Use the search bar and filters to find specific products by price.

#### Adding to Cart

- On a product's detail page, click "Add to Cart" to include the item in your shopping cart.
- Manage cart items from the cart page.

#### Checkout

- Proceed to checkout, fill in your details, and select a payment method.
- Complete your purchase securely using Stripe or opt for cash on delivery.
