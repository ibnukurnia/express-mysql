const routes = require("express").Router();
const controller = require("../controller/products");

routes.get("/", controller.getProducts);
routes.get("/:id", controller.findProduct);
routes.post("/", controller.storeProduct);
routes.patch("/:id", controller.updateProduct);
routes.delete("/:id", controller.deleteProduct);

module.exports = routes;
