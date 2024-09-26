const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://kavya:tuElQIn9lUatXL0T@details.zpjqw.mongodb.net/?retryWrites=true&w=majority&appName=details";

async function main() {
    const client = new MongoClient(uri);

    try {
        await client.connect();

        console.log("Connected successfully to MongoDB Atlas!");

        const database = client.db("companyDB");
        const employees = database.collection("employees");


        const employeeDocs = [
            {
                employeeId: 1,
                name: "John Doe",
                position: "Software Engineer",
                salary: 75000,
                address: {
                    street: "123 Main St",
                    city: "New York",
                    state: "NY",
                    zipCode: "10001"
                },
                email: "johndoe.se@uni.ac.in"
            },
            {
                employeeId: 2,
                name: "Jane Smith",
                position: "Data Scientist",
                salary: 85000,
                address: {
                    street: "456 Elm St",
                    city: "San Francisco",
                    state: "CA",
                    zipCode: "94103"
                },
                email: "janesmith.ds@uni.ac.in"
            },
            {
                employeeId: 3,
                name: "Samuel Green",
                position: "DevOps Engineer",
                salary: 78000,
                address: {
                    street: "789 Oak St",
                    city: "Chicago",
                    state: "IL",
                    zipCode: "60601"
                },
                email: "samgreen.de@uni.ac.in"
            }
        ];

        const result = await employees.insertMany(employeeDocs);
        console.log(`Inserted ${result.insertedCount} employees`);
        const insertedEmployees = await employees.find({}).toArray();
        console.log("Inserted Employees: ", insertedEmployees);

    } catch (err) {
        console.error("An error occurred while connecting to MongoDB Atlas", err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
