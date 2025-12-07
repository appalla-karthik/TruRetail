# ***TruRetail – Sales Management System***

---

## ***1. Overview (3–5 lines)***
TruRetail is a full-stack Sales Management System designed to analyze and manage retail sales data efficiently.  
It enables users to search, filter, sort, and paginate large datasets in real time.  
The system is optimized for performance and responsive across desktop and mobile devices.  
Both frontend and backend are deployed on Render for cloud access.

**Live Application:** https://truretail.onrender.com  
**Backend API:** https://truretail-backend.onrender.com/api/sales

---

## ***2. Tech Stack***
- **Frontend:** React (Vite), HTML, CSS  
- **Backend:** Node.js, Express.js  
- **Data Processing:** CSV parsing using `csv-parser`  
- **Deployment:** Render (Static Site for frontend, Web Service for backend)

---

## ***3. Search Implementation Summary***
The search functionality is implemented using a controlled input in the frontend.  
User input is passed as a query parameter to the backend API.  
The backend filters sales records by customer name or phone number.  
Pagination automatically resets when a new search is performed.

---

## ***4. Filter Implementation Summary***
Filters for **Region**, **Gender**, and **Product Category** are implemented using checkboxes.  
Selected filters are stored in the frontend state and sent as query parameters.  
The backend dynamically applies multiple filters before returning results.  
Filters can be cleared instantly using a single reset action.

---

## ***5. Sorting Implementation Summary***
Sorting is implemented via a dropdown menu with multiple options.  
Users can sort data by newest date, quantity sold, or customer name.  
The frontend sends sorting preferences to the backend API.  
Sorting is applied before pagination to ensure accurate data ordering.

---

## ***6. Pagination Implementation Summary***
Pagination is handled using page number and page size state management.  
The backend computes the total number of pages and returns paginated data.  
Users can navigate through pages without losing search, filter, or sort context.  
Pagination improves performance while handling large datasets efficiently.

---

## ***7. Setup Instructions***
1. Clone the project repository  
2. Navigate to the **backend** folder and install dependencies  
3. Start the backend server using Node.js  
4. Navigate to the **frontend** folder and install dependencies  
5. Build and deploy the frontend on Render  
6. Configure environment variables for API communication


