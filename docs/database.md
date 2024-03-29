# NoSQL Databases

Check this [getting Started with MongoDB](https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/)

Unlike relational databases that rely on rigid tables with rows and columns, NoSQL databases like MongoDB offer a more flexible structure. They don't require queries to make queries from a database. Data in these databases are organized in terms of Collections and Documents.

## Collections

They act as containers for storing similar items. Think of them to be like tables in SQL Databases. Both **tables** and **Collections** group related pieces of data. Tables have a predefined schema with fixed columns (like table headings), while collections offer more flexibility. Documents within a collection can have varying structures. You don't have to define columns for collection. You can just create them while storing the data.

## Documents

They are the fundamental data units within a collection, similar to entries in a relational database table. Documents hold information in a JSON-like format, allowing you to store various data types within a single document. A user document, for example, could contain details like name, email, and address.

# Mongoose

Mongoose is actually considered an ODM (Object Data Modeling) library, but it shares some similarities with an ORM (Object-Relational Mapper). Mongoose provides an ODM layer that makes working with MongoDB more convenient and avoids writing raw JavaScript code to interact with the database. It offers schema definition, data validation, and potentially object relationship management. It deals with documents (JSON-like structures) instead of relational tables.

**How to create a database connection using the mongoose client**

From **Mongoose**, we create establish the connection by calling `await mongoose.connect(MONGO_URI)` from which we can the return the `mongoose.connection`. The database connection is established either at **startup** or within the **API** or **server action** by calling the `await connectDB()`. The `ConnectDB()` is returned when we create our connection

At the time we are connecting to the database using the mongoose client, we specify the name of the database in the environment variable, and for this case, my database is called **app**. This below shows how we connect to a database. If there is no database with the name **app**, then after the connection is established, it will be created. Leaving the database name when no database has been created in the database will cause an error.

```env
MONGODB_URI = 'mongodb+srv://joe_jngigi:<**randow passoword**>@cluster0.aei4t8z.mongodb.net/app'
```

```TS
import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI as string;

let IS_CONNECTED = false;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

const connectDB = async () => {
  if (IS_CONNECTED) {
    console.log('Already connected.');
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGO_URI);
    IS_CONNECTED = true;
    console.log('Connection Established');
    return mongoose.connection;
  } catch (error) {
    console.error('Error when establishing a connection:', error);
    throw error;
  }
};

export default connectDB;
```

## Collections Creation

In MongoDB, there are two main ways to create collections in MongoDB using Mongoose: This is the most common approach and doesn't require explicit code for collection creation. Mongoose automatically creates a collection the first time you insert a document that doesn't correspond to an existing collection. In this scenario you don't necessarily need to use `Email.create` to store the data in your MongoDB database.
**1. Using `newEmail.save()`:**

We create a new instance of the `Email` model with the validated data using `new Email({ ... })`. We can then call `await newEmail.save()` to save the document to the database. This is a common and straightforward way to insert a single document. The `new Email({ ... })` creates a new instance of the `Email` model with the validated data. The `await newEmail.save()` method sends a request to MongoDB to save the new email document in the "Emails" collection (or whatever you named it in your model). Then the `try...catch` block will handle potential errors during the save operation and returns appropriate responses.

> **Note**: This could be transferred to APIs, although I implement them using server actions. In this scenario you don't necessarily need to use `Email.create` to store the data in your MongoDB database. Also, the model is application to any other collection in your database, that means you can call the collection any name not just **email**

**1. We Create a New Email Document by importing the Email Model `newEmail.save()`**

```javascript
import Email from "@/models/Email"; // Assuming your model is in this location

export const sendEmailToDBAction = async (
  values: zod.infer<typeof emailMeSchema>
) => {
  //... (existing validation logic) => This is data from the front end
  const { email, name, mail } = dataFromFrontEnd;

  const newEmail = new Email({
    email,
    name,
    message: mail, // Assuming "mail" contains the message
  });

  try {
    await newEmail.save(); // Save the new email to the database
    return { success: "Email Sent Successfully" };
  } catch (error) {
    console.error("Error saving email:", error);
    return { error: "An error occurred while saving the email." };
  }
};
```

> Explore using Mongoose middleware for pre-save or post-save operations if needed.

**2. Using `Email.create()`:**

`Email.create()` is another method provided by Mongoose for creating documents. It accepts an array of objects representing the documents to be created. You could potentially use it like this:

```javascript
//... (existing validation logic) => This is data from the front end
const { email, name, mail } = dataFromFrontEnd;

const newEmail = {
  email,
  name,
  message: mail,
};

try {
  await Email.create([newEmail]); // Array with the new email object
  return { success: "Email Sent Successfully" };
} catch (error) {
  // ... error handling
}
```

**Choosing the Right Approach:**

In this case, since I am dealing with a single email, using `newEmail.save()` is perfectly suitable. It's simpler and more efficient for this scenario. `Email.create()` becomes more beneficial when you need to insert multiple documents at once. It can potentially improve performance for bulk inserts compared to calling `save()` on each document individually.

Both `save()` and `create()` achieve the same goal of persisting data in the database. `save()` is more versatile as it can also be used to update existing documents, while `create()` is specifically for creating new ones.

---

---

## Future TODOS:

If you're asking whether there are any queries you might consider implementing in your MongoDB API, here are a few suggestions based on common use cases:

1. **Search Users by Name or Partial Name**: Allow users to search for other users by their name, either exact match or partial match.

2. **Filter Users by Criteria**: Implement functionality to filter users based on various criteria such as age, gender, location, etc.

3. **Pagination**: If you expect many users, implement pagination to fetch users in smaller, manageable chunks rather than all at once.

4. **Sorting**: Allow users to specify sorting criteria (e.g., by name, age, registration date) for the returned user data.

5. **Count Users**: Provide functionality to count the total number of users or the number of users that match certain criteria.

6. **Update User Profile Picture**: Allow users to update their profile picture and store it in the database.

7. **Change Password**: Implement functionality for users to change their passwords securely.

8. **Email Verification**: If you have user registration, implement email verification to ensure the validity of email addresses provided by users.

9. **User Activity Logs**: Log user activity such as login/logout timestamps, profile updates, etc., for auditing and security purposes.

10. **User Analytics**: Collect and analyze user data to gain insights into user behavior, preferences, etc.

These are just a few examples of queries and functionalities you might consider implementing in your MongoDB API based on the requirements of your application.

## Bug

> I tried calling the retrieval queries without using `await`, but I got a promise strange return. Here is how to verify that.

```TS
const database = await connectDB();

const collectionNames =  database.listCollections();
console.log(collectionNames);
```

This below is the right way to do it. The reason for getting a Promise object with the pending status is because `listCollections()` returns a promise, and by not using `await`, you're not waiting for that promise to resolve. To properly handle the result, you should either use `await` or `.then()` to wait for the promise to resolve:

Using `await`:

```TS

const collectionNames = await database.listCollections();
console.log(collectionNames);
```

Using `.then()`:

```javascript
database
  .listCollections()
  .toArray()
  .then((collectionNames) => {
    console.log(collectionNames);
  })
  .catch((error) => {
    console.error(error);
  });
```
