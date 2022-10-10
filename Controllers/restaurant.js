const restData=require('../Models/restaurantdata.json');

exports.getRestaurants=(req,res)=>{
    res.status(200).json({
        message:'Restaurants fetched successfully',
        restaurants:restData
    });
}

exports.getRestaurantByName=(req,res)=>{
    var name=req.params.name;
    var result=restData.filter((item)=>{
        return item.city_name==name;
    })
    if(result.length>0){
        res.status(200).json({
            message:'Restaurant fetched successfully',
            restaurants:result
        })
    }
    else{
        res.status(404).json({
            message:'Restaurant not found'
        })
    }
}