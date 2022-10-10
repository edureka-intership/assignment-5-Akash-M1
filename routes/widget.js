const express=require('express');
const widCont=require('../Controllers/widget');

const widRoute=express.Router();

widRoute.get('/',widCont.getMealTypes);

module.exports=widRoute;