+====================== Query Operator in MongoDB ========================

    db.Products.find({}, { Price: 1, CategoryID: 1 }).pretty()
db.Products.find({}, { Price: 1, Category: 1 }).pretty()
db.Products.find({}, { Price: 1, Details: 1, Unit: 1 }).pretty()

db.Products.find({ Price: { $eq: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $lt: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $lte: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $gt: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $gte: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $ne: "1000" } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $in: ["1000", "5000"] } }, { Price: 1, Details: 1, Unit: 1 }).pretty()
db.Products.find({ Price: { $nin: ["1000", "5000"] } }, { Price: 1, Details: 1, Unit: 1 }).pretty()


+++++=================== Generaly Query of MongoDb =======================

    insertOne= Insert One Data => db.students.inserOne({ name: "Zahed", city: "Dhaka" })

insertMany = Insert Multiple Data => db.students.insertMany([{ name: "Zahed", city: "D" }, { bg: "B+", ph: "016" }])

find method() = User for all data => db.students.find()

```find any Specific Data => db.students.findOne({ name: "Zahed", roll: "434" })```


// ================================Projection===========================


projection method=> db.Products.find({},{title:1,roll:1})


// ========================================Logical Operator===================




db.Products.find({$and:[{Price:{eq="1000"}},{Details:{$eq="LED TV"}}]},{Price:1,Details:1})


// ===============================And and Equal Operator=============================



db.Products.find({$and:[{Price:{$eq:"64000"}},{Unit:{$eq:"inch"}}]},{Price:1,Unit:1})

db.Products.find({$or:[{Price:{$eq:"64000"}},{Unit:{$eq:"inch"}}]},{Price:1,Unit:1})


db.Products.find({

$and:[
{Price:{$eq:"64000"}},
{Unit:{$eq:"inch"}}
]
},

{Price:1,Unit:1,_id:0}

)



// =====================================================================================
COUNT QUERY HOW MANY PRODUCTS THIS PRICE

db.Products.countDocuments({Price: "64000", Details: "LED TV"})

// ======================================================================================

// ===================================LIMIT=======================


db.Products.find().limit(4).pretty()

// ========================Document Update========================


db.Products.updateOne(
  { _id: "629b1cbd43c8ce4c371913cd" },
  { $set: { Name: "Test Mongo", Details: "Sysco" } }
)

db.Products.findOne(
  { _id: "629b1cbd43c8ce4c371913cd" },
   {Name:"Test Mongo",Details:"Sysco"}
)


// =========================Delete Documents========================



db.Products.remove({_id:"629b1cbd43c8ce4c371913cd"})


// =================Mongoose Data Create==============


let reqBody= req.body;
model.create(reqBody,(err,data)=>{

})

// ===============Mongoose Data Read===============

exports.ReadStudent=(req,res)=>{

let Query={}
let Projection="Name Roll Class Remarks"

StudentModel.find(Query,Projection,(err,data)=>{


// ===========================Update=======================


exports.UpdateStudent=(req,res)=>{

let id=req.params.id;

let Query={_id:id};

let reqBody=req.body;

Student.updateOne(Query,reqBody,(err,data)=>{



// =====================Delete Opreations==============


exports.DeleteStudent=()=>{

let id=req.params.id;
let Query={_id:id};

StudentModel.remove(Query,(err,data)=>{



// ==================================================FindAll ==================== Query


db.products.find({})
db.products.aggregate([])

// ======================Total Row Count of schema===============

db.products.find({}).count('total')
db.products.aggregate([{$count:"total"}])


// =============Find Sorting====================

db.products.find({}).sort({salary:-1}) // Descending 
db.products.find({}).sort({salary:1}) // Asending 

db.products.aggregate([{$sort:{salary:1}}]) //Asending 
db.products.aggregate([{$sort:{salary:-1}}]) // Descending 


// =======================Limit=======================

db.products.aggregate([{$limit:3}])
db.products.find({}).limit(2)

// =============Find Last 5 limits first or last============



db.products.find({}).sort({_id:-1}).limit(5)
db.products.find({}).sort({_id:1}).limit(5)

db.products.aggregate([
    {$sort:{_id:-1}},
    {$limit:5}
])
    
db.products.aggregate([
    {$sort:{_id:1}},
    {$limit:5}
])

// =======================Match Based Query=-===================

db.products.aggregate([
  {$match:{salary:{$gt:4000}}}
])

db.products.find({salary:{$gt:4000}})


db.employee.aggregate([

  {$match:{salary:{$lte:40000}}},
  {$match:{designation:{$eq:"Engineer"}}}
  
  ])
  

// ====================Match Condtions Nesting based AND ,OR==============


db.products.aggregate([
  {$match:{
   $and:[
        {salary:{$gt:4000}},
        {roll:{$gt:125}}
    ]   
  }}
])


// =====================OR=================================



db.products.aggregate([
  {$match:{
   $or:[
        {salary:{$gt:4000}},
        {roll:{$gt:125}}
    ]   
  }}
])


// ============================