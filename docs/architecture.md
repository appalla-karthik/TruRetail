# ***Architecture Document – TruRetail Sales Management System***

---

## ***1. Backend Architecture***
The backend is built using **Node.js** with **Express.js** following a modular service-based architecture.  
It exposes RESTful APIs that handle data retrieval, filtering, sorting, and pagination.  
Sales data is loaded from a CSV file at server startup and stored in memory for fast access.  
Controllers handle request validation, while service layers handle business logic.

### Backend Key Components:
- **Express Server** – Handles HTTP requests and routing  
- **Routes Layer** – Defines API endpoints  
- **Controller Layer** – Processes incoming requests and responses  
- **Service Layer** – Applies business logic such as filtering and sorting  
- **Utility Layer** – Handles CSV parsing and data transformation  

---

## ***2. Frontend Architecture***
The frontend is built using **React (Vite)** and follows a component-based architecture.  
State management is handled using React hooks.  
Reusable components are created for search, filters, sorting, tables, and pagination.  
The frontend communicates with the backend through REST APIs.

### Frontend Key Components:
- **App.jsx** – Root component and global state manager  
- **SearchBar** – Handles keyword search input  
- **FilterBar** – Handles multiple filter selections  
- **SortDropdown** – Manages sorting logic  
- **SalesTable** – Displays paginated sales data  
- **PaginationControls** – Handles navigation between pages  
- **SummaryCards** – Displays aggregated metrics  

---

## ***3. Data Flow***
1. The user interacts with the UI (search, filter, sort, pagination).  
2. The frontend updates query state and sends API requests to the backend.  
3. The backend processes the request using service logic.  
4. Filtered, sorted, and paginated data is returned as JSON.  
5. The frontend renders updated data dynamically without page reloads.

---

## ***4. Folder Structure***
```txt
truRetail/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── sales.controller.js
│   │   ├── routes/
│   │   │   └── sales.routes.js
│   │   ├── services/
│   │   │   └── sales.service.js
│   │   ├── utils/
│   │   │   ├── dataLoader.js
│   │   │   └── salesUtils.js
│   │   ├── data/
│   │   │   └── sales-data.csv
│   │   └── index.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── index.css
│   └── package.json
│
└── docs/
    └── architecture.md
```
## ***5. Module Responsibilities***

---

### ***Backend Modules***

- ***index.js***  
  Initializes the Express server, configures middleware (CORS, JSON parsing), and starts the backend service.

- ***routes/sales.routes.js***  
  Defines REST API endpoints related to sales data and maps them to controller functions.

- ***controllers/sales.controller.js***  
  Handles incoming HTTP requests, extracts query parameters, and sends structured responses back to the client.

- ***services/sales.service.js***  
  Contains core business logic such as filtering, searching, sorting, pagination, and summary calculations.

- ***utils/dataLoader.js***  
  Loads sales data from the CSV file into memory and provides access to the complete dataset.

- ***utils/salesUtils.js***  
  Contains helper functions used for data filtering, sorting, aggregation, and pagination.

---

### ***Frontend Modules***

- ***App.jsx***  
  Root component that manages global query state and orchestrates all UI components.

- ***SearchBar.jsx***  
  Allows searching sales records by customer name or phone number.

- ***FilterBar.jsx***  
  Provides region, gender, and category-based filtering options.

- ***SortDropdown.jsx***  
  Enables sorting of sales data based on date, quantity, or customer name.

- ***SalesTable.jsx***  
  Displays sales records in a structured, responsive table format.

- ***PaginationControls.jsx***  
  Handles navigation between pages and manages current page state.

- ***SummaryCards.jsx***  
  Displays aggregated analytics such as total quantity, total revenue, and average discount.

---

## ***Conclusion***

The modular architecture ensures clear separation of concerns, making the system scalable, maintainable, and easy to extend.  
Each module has a well-defined responsibility, enabling independent development and testing.
