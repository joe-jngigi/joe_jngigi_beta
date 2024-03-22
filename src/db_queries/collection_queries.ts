import connectDB from "@/lib/mongodb";

/**
 * This function is used to retrieve all the collections available in the DB
 * @function getCollections() {@returns {collectionNames}}
 *
 */
export const getCollections = async () => {
  try {
    const database = await connectDB();
    const collectionNames = await database.listCollections();
    return collectionNames;
  } catch (error) {
    console.log("getCollections", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function will delete one collection that has been deleted
 * @param name
 * @returns true/ boolean
 */
export const dropOneCollection = async (name: string) => {
  try {
    const database = await connectDB();
    const collectionDeleted = await database.collection(name).drop();
    return collectionDeleted;
  } catch (error) {
    console.log("dropOneCollection", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * 💀💀💀💀💀💀💀💀💀
 *
 * This function will essentially drop the whole database, effectively deleting all the collections
 * @returns dropped all the collections | null
 */
export const dropAllDatabase = async () => {
  try {
    const database = await connectDB();
    const deletedDb = await database.dropDatabase();
    return deletedDb;
  } catch (error) {
    console.log("deleteCollections", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * dropAllDatabase()
 * dropOneCollection()
 * dropAllDatabase()
 *
 */
