const { MongoClient } = require("mongodb");


const uri = "mongodb+srv://iamuser:iamuser123@mycluster1.bpn6u0w.mongodb.net/";




async function main() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected to Atlas ");

    const db = client.db("school1");           // database name
    const students = db.collection("stud"); // collection name


await students.insertOne({ name: "Aarav", age: 21, marks: 85 });
console.log("Inserted one document.");

await students.insertOne({ name: "Bhavya", age: 22, marks: 90 });
console.log("Inserted one document.");

await students.insertOne({ name: "Chirag", age: 23, marks: 78 });
console.log("Inserted one document.");

await students.insertOne({ name: "Diya", age: 20, marks: 92 });
console.log("Inserted one document.");

await students.insertOne({ name: "Eshan", age: 22, marks: 88 });
console.log("Inserted one document.");

await students.insertOne({ name: "Fatima", age: 21, marks: 81 });
console.log("Inserted one document.");

await students.insertOne({ name: "Gaurav", age: 23, marks: 76 });
console.log("Inserted one document.");

await students.insertOne({ name: "Harini", age: 20, marks: 94 });
console.log("Inserted one document.");

await students.insertOne({ name: "Ishaan", age: 22, marks: 89 });
console.log("Inserted one document.");

await students.insertOne({ name: "Jiya", age: 21, marks: 82 });
console.log("Inserted one document.");

await students.insertOne({ name: "Kunal", age: 23, marks: 75 });
console.log("Inserted one document.");

await students.insertOne({ name: "Lavanya", age: 20, marks: 91 });
console.log("Inserted one document.");

await students.insertOne({ name: "Mihir", age: 22, marks: 87 });
console.log("Inserted one document.");

await students.insertOne({ name: "Nisha", age: 21, marks: 84 });
console.log("Inserted one document.");

await students.insertOne({ name: "Om", age: 23, marks: 77 });
console.log("Inserted one document.");

await students.insertOne({ name: "Pooja", age: 20, marks: 93 });
console.log("Inserted one document.");

await students.insertOne({ name: "Rahul", age: 22, marks: 86 });
console.log("Inserted one document.");

await students.insertOne({ name: "Sara", age: 21, marks: 80 });
console.log("Inserted one document.");

await students.insertOne({ name: "Tanish", age: 23, marks: 79 });
console.log("Inserted one document.");

await students.insertOne({ name: "Vidya", age: 20, marks: 95 });
console.log("Inserted one document.");


    
const docs = await students.find().toArray();
console.log("Documents in students:", docs);

await students.updateOne({ name: "Aarav" }, { $set: { marks: 85 } });
console.log("Updated one document.");

await students.updateOne({ name: "Bhavya" }, { $set: { marks: 90 } });
console.log("Updated one document.");

await students.updateOne({ name: "Chirag" }, { $set: { marks: 78 } });
console.log("Updated one document.");

await students.updateOne({ name: "Diya" }, { $set: { marks: 92 } });
console.log("Updated one document.");

await students.updateOne({ name: "Eshan" }, { $set: { marks: 88 } });
console.log("Updated one document.");

await students.updateOne({ name: "Fatima" }, { $set: { marks: 81 } });
console.log("Updated one document.");

await students.updateOne({ name: "Gaurav" }, { $set: { marks: 76 } });
console.log("Updated one document.");

await students.updateOne({ name: "Harini" }, { $set: { marks: 94 } });
console.log("Updated one document.");

await students.updateOne({ name: "Ishaan" }, { $set: { marks: 89 } });
console.log("Updated one document.");

await students.updateOne({ name: "Jiya" }, { $set: { marks: 82 } });
console.log("Updated one document.");

await students.updateOne({ name: "Kunal" }, { $set: { marks: 75 } });
console.log("Updated one document.");

await students.updateOne({ name: "Lavanya" }, { $set: { marks: 91 } });
console.log("Updated one document.");

await students.updateOne({ name: "Mihir" }, { $set: { marks: 87 } });
console.log("Updated one document.");

await students.updateOne({ name: "Nisha" }, { $set: { marks: 84 } });
console.log("Updated one document.");

await students.updateOne({ name: "Om" }, { $set: { marks: 77 } });
console.log("Updated one document.");

await students.updateOne({ name: "Pooja" }, { $set: { marks: 93 } });
console.log("Updated one document.");

await students.updateOne({ name: "Rahul" }, { $set: { marks: 86 } });
console.log("Updated one document.");

await students.updateOne({ name: "Sara" }, { $set: { marks: 80 } });
console.log("Updated one document.");

await students.updateOne({ name: "Tanish" }, { $set: { marks: 79 } });
console.log("Updated one document.");

await students.updateOne({ name: "Vidya" }, { $set: { marks: 95 } });
console.log("Updated one document.");



  

  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    await client.close();
    console.log("Connection closed.");
  }
}

main();