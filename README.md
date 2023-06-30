# AWMS Inventory Management System

Welcome to AWMS Inventory Management System, a software designed to streamline inventory management for Adani Electricity. This repository contains the source code and resources required to run the application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

AWMS Inventory Management System is a web-based application developed specifically for Adani Electricity to manage their inventory efficiently. The system provides a user-friendly interface to perform various inventory-related tasks such as tracking stock levels, managing orders, and generating reports.

## Features

- **Inventory Tracking**: Keep track of inventory levels, including stock in hand, stock sold, and stock received.
- **Order Management**: Manage incoming and outgoing orders, including order placement, order fulfillment, and order cancellation.
- **Reporting**: Generate detailed reports on inventory levels, sales, and order history.
- **User Authentication**: Secure access to the system with user authentication and authorization.
- **User Roles**: Assign different roles to users based on their responsibilities and restrict access to specific features accordingly.
- **Dashboard**: Provide a comprehensive dashboard with key performance indicators and visualizations for quick insights.
- **Responsive UI**: Ensure a responsive and intuitive user interface for seamless usage on various devices.

## Tech Stack

The AWMS Inventory Management System is built using the following technologies:

- **Frontend**:
  - Next.js: A React framework for building server-rendered applications.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.

- **Backend**:
  - Firebase: A comprehensive platform for building and managing web and mobile applications.

- **Website Hosting**:
  - Local server of Adani Electricity: The system is hosted on the local server of Adani Electricity for internal usage.

## Installation

To install and run the AWMS Inventory Management System locally, follow these steps:

1. Clone this repository:

   ```
   git clone <repository_url>
   ```

2. Change into the project directory:

   ```
   cd awms-inventory-management-system
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Configuration

Before running the application, you need to configure the necessary credentials and settings. Follow these steps to set up the configuration:

1. **Firebase Configuration**:

   - Create a Firebase project at [https://firebase.google.com/](https://firebase.google.com/).
   - Obtain the Firebase configuration credentials (apiKey, authDomain, projectId, etc.).
   - Set the credentials in the Firebase configuration file located at `./src/firebase/config.js`.

2. **User Roles**:

   - Define the user roles and their corresponding access levels in the user roles configuration file located at `./src/utils/userRoles.js`.

3. **Other Settings**:

   - Adjust any other necessary settings according to your requirements in the respective configuration files located at `./src/config`.

## Usage

To start the AWMS Inventory Management System, run the following command:

```
npm run dev
```

This will start the development server, and you can access the application by navigating to [http://localhost:3000](http://localhost:3000) in your web browser.

## Contributing

Contributions to AWMS Inventory Management System are always welcome. If you find any issues or have suggestions for improvements, please feel free to create a pull request or submit an issue in the repository.

## License

The AWMS Inventory Management System is licensed under the [MIT License](LICENSE).
