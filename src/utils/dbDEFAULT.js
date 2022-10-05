const Roles=require('../modelos/rol.model')

const initData=async()=>{
await Roles.bulkCreate([{
    id:"2c7809f3-967b-46b7-a027-56c630d6a7f0",
    name:"ADMIN"
},
{
    id:"6156ce28-c840-42a4-b3cf-0ae836a8bb36",
    name:"NORMAL"
}
])
}


module.exports=initData