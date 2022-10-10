const express=require('express');
const bodyParser=require('body-parser');
const restRoute=require('./routes/restaurant');
const widRoute=require('./routes/widget');

const app=express();
const PORT=2070;

app.use(bodyParser.json());

app.use('/restaurant',restRoute);
app.use('/widget',widRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
