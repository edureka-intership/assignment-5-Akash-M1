const express=require('express');
const restControllers=require('../Controllers/restaurant');

const routes=express.Router();

routes.get('/',restControllers.getRestaurants);
routes.get('/:name',restControllers.getRestaurantByName);

module.exports=routes;