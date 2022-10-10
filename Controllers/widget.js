const mealTypes=require('../Models/mealtype.json');


exports.getMealTypes=(req,res)=>{
    res.status(200).json({
        message:'Meal types fetched successfully',
        data:mealTypes
    });
};