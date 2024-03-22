import User from "@/model_schemas/user_schemas";
import { TUpdateData } from "@/types/types";

/**
 * This function gets the users Documents and displays
 * @returns {user} These are all the users in that particular **Document**
 */
export const getUserDocument = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    console.log("getCollectionUserDocument", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function gets only one user by ID
 * @param userId is the ID of the particular user
 * @returns onUser
 */
export const getUserById = async (userId: string) => {
  try {
    const oneUser = await User.findById(userId);
    return oneUser;
  } catch (error) {
    console.log("getUserById", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function returns userByEmail; Where you can use the email or any other field in the document to query the data.
 * @returns userByEmail
 */
export const getUserByEmail = async (email: string) => {
  try {
    const userByEmail = await User.findOne({ user_email: email });
    return userByEmail;
  } catch (error) {
    console.log("getUserByPreferredCriteria", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

// ============================DELETE================================================
/**
 * This functions find a user by ID and deletes the user
 *
 * @param userId is the id of the user you are deleting
 * @returns success or error message
 */
export const deleteUserById = async (userId: string) => {
  try {
    const deleteUser = await User.findByIdAndDelete(userId);
    if (deleteUser) {
      return { success: "User Deleted Successfully" };
    } else {
      return { error: "User Does not Exist" };
    }
  } catch (error) {
    console.log("deleteUserById", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function returns a query to delete a user using an email from the database
 * @param email
 * @returns null after delete
 */
export const deleteUserByEmail = async (email: string) => {
  try {
    const deleteByEmail = await User.findOneAndDelete({ user_email: email });
    if (deleteByEmail) {
      return { success: "User Deleted Successfully" };
    } else {
      return { error: "User Does not exist" };
    }
  } catch (error) {
    console.log("deleteUserByEmail", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 *
 * This returns null, after all the users have been deleted from the database
 * @returns {null} null
 */
export const deleteAllUsers = async () => {
  try {
    const deleteUsers = await User.deleteMany({});
    return deleteUsers;
  } catch (error) {
    console.log("deleteAllUsers", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 *
 * The function deletes on only the selected users, by their ID.
 * The IDs recieved are Arrays
 *
 * @type {string[]}
 * @param userIds is an array of users selected
 * @returns null after delete
 */
export const deleteSelectedUsers = async (userIds: string[]) => {
  try {
    const deleteSelected = await User.deleteMany({ _id: { $in: userIds } });
    return deleteSelected;
  } catch (error) {
    console.log("deleteSelectedUsers", error);
    return { error: "Internal Server Error" };
  }
};

// ====================UPDATE===========================================

/**
 * This function updates the user in terms of ID, this is in the data in the object
 *
 *
 *
 * @param userID is a specfic selected user ID
 * @param update_data Update Data is just the data. This on is dynamic on the type of data it gets
 * @returns {updatedById}
 */
export const updateUserById = async (
  userID: string,
  update_data: TUpdateData
) => {
  try {
    const updatedById = await User.findByIdAndUpdate(userID, update_data, {
      new: true,
    });
    return updatedById;
  } catch (error) {
    console.log("updateUserById", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This functions update the user as an email
 * @param user_email is the email of the user
 * @param update_data This is the data as an object
 *
 * @returns the document updated
 */
export const updateUserByEmail = async (
  user_email: string,
  update_data: TUpdateData
) => {
  try {
    const updateByEmail = await User.findOneAndUpdate(
      { user_email },
      update_data,
      { new: true, runValidators: true, timestamps: false }
    );

    return updateByEmail;
  } catch (error) {
    console.log("updateUserByEmail", error);
    return { status: 500, error: "Internal Server Error" };
  }
};
/**
 *
 * getUserById()
 * getUserByEmail()
 * getUserDocument()
 *
 * deleteUserById()
 * deleteUserByEmail()
 * deleteAllUsers()
 * deleteSelectedUsers()
 *
 * updateUserById()
 * updateUserByEmail()
 */
