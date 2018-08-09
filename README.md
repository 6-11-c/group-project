# Woz U Final Group Project

To start the application locally, clone the repository and run `npm start` from the project root and then in the `/client/` directory. This will start both the backend and frontend processes.

## Group Members

* [David Coy](https://github.com/obsidianspork)
* [Josh Butler](https://github.com/joshorion7)

## API Routes

### Users

| Route  | Verb | Description |
| ------------- | ------------- | ------------- |
| `/user/signup`  | *POST* | User signup  |
| `/user/login`  | *POST* | User authenticated, provides JWT  |
| `/user/:userId/delete` | *DELETE* | Delete single user, requires JWT |

### Products

| Route  | Verb | Description |
| ------------- | ------------- | ------------- |
| `/api/products/products`  | *GET* | Get a listing of all products  |
| `/api/products/products`  | *POST* | Create new product |
| `/api/products/products/:productId` | *GET* | Get a single product |
| `/api/products/products/:productId` | *PATCH* | Update a single product, requires JWT |
| `/api/products/products/:productId` | *DELETE* | Delete a single product, requires JWT |

### Orders

| Route  | Verb | Description |
| ------------- | ------------- | ------------- |
| `/orders`  | *GET* | Get a listing of all orders, requires JWT  |
| `/orders`  | *POST* | Create new order, requires JWT |
| `/orders/:orderId` | *GET* | Get a single order, requires JWT |
| `/orders/:orderId` | *DELETE* | Delete a single order, requires JWT |