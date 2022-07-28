exports = async function(arg){

  var collection = context.services.get("mongodb-atlas").db("cicd_demo").collection("test");
  
  var insert = await collection.insertOne(
    { 
      timestamp: new Date(),
      environment: context.environment.tag
    }
  );

  return {insert};
};