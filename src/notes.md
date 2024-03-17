# NoSQL Databases

Check this [getting Started with MongoDB](https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/)

Unlike relational databases that rely on rigid tables with rows and columns, NoSQL databases like MongoDB offer a more flexible structure. They don't require queries to make queries from a database. Data in these databases are organized in terms of Collections and Documents.

## Collections

They act as containers for storing similar items. Think of them to be like tables in SQL Databases. Both **tables** and **Collections** group related pieces of data. Tables have a predefined schema with fixed columns (like table headings), while collections offer more flexibility. Documents within a collection can have varying structures. You don't have to define columns for collection. You can just create them while storing the data.

## Documents

They are the fundamental data units within a collection, similar to entries in a relational database table. Documents hold information in a JSON-like format, allowing you to store various data types within a single document. A user document, for example, could contain details like name, email, and address.

# Mongoose

Mongoose is actually considered an ODM (Object Data Modeling) library, but it shares some similarities with an ORM (Object-Relational Mapper). Mongoose provides an ODM layer that makes working with MongoDB more convenient and avoids writing raw JavaScript code to interact with the database. It offers schema definition, data validation, and potentially object relationship management. It deals with documents (JSON-like structures) instead of relational tables.

## Collections

In MongoDB, there are two ways to create collections. There are technically two main ways to create collections in MongoDB using Mongoose:

**Implicit Collection Creation**

This is the most common approach and doesn't require explicit code for collection creation. Mongoose automatically creates a collection the first time you insert a document that doesn't correspond to an existing collection.

I tried calling the retrieval queries without using `await`, but I go strange return. Here is how to verify that.

The reason you're seeing a Promise object with the pending status is because `listCollections()` returns a promise, and by not using `await`, you're not waiting for that promise to resolve. To properly handle the result, you should either use `await` or `.then()` to wait for the promise to resolve:

Using `await`:

```javascript
const collectionNames = await database.listCollections().toArray();
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

Either of these approaches will properly retrieve the collection names from the database.

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
