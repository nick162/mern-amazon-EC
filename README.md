# MERN EC-Amazon

# Lessons
1. Introduction
2. Install tools
3. Create React app
4. Create Git Repository
5. List Product
    1. create products array
    2. add product image
    3. render products
    4. style products
6. Add Routing
    1. npm i react-router-dom
    2. create route for home screen
    3. create route for product screen
7. Create Node.JS Server
    1. run npm init in root folder
    2. Update package.json set type: module
    3. Add .js imports
    4. npm install express
    5. create server js 
    6. add start comment as node backend/server.js
    7. require express 
    8. create route for / return backend ready
    9. move product.js from front-end to backend
    10. create route for product fro /api/products
    11. return products
    12. run npm start
8. Fetch Product From Backend
    1. set proxy in package.json
    2. install axios 
    3. use state hook
    4. use effect hook 
    5. use reducer hook
9. Manage State By Reducer Hook
    1. define reducer
    2. update fetch data
    3. get state from useReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap 
    2. update App.js
11. Create Product and Rating Component
    1. create Rating Component
    2. Create Product Component
    3. Use rating component in Product Component
12. Create Product Detail Screen
    1. fecth product from backend
    2. Create 3 coloumns for image, info and action
13. Create Loading and Message Component
    1. create loading component
    2. use spinner component
    3. create message component
    4. create utils.js to define getError function
14. Implement Add to Cart
    1. Create React Context
    2. Define Reducer
    3. Create Store Provider
    4. Implement Add to Cart Button Click handler
15. complete Add to Cart
    1. check exist item in the cart
    2. check count in stock backend
16. Creat Cart Screen
    1. create 2 coloumns
    2. display items list
    3. create action coloumns