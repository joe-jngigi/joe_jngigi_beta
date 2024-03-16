# NoSQL Databases

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

