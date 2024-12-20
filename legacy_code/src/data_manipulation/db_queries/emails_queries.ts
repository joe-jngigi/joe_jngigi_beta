import Email from "@/data_manipulation/model_schemas/email_me_schema";
import { TUpdateData } from "@/data_manipulation/types/types";

/**
 * This function queries and returns all the emailsDocuments/entries
 * @returns an array of all the document in the emails collection
 */
export const getEmailDocuments = async () => {
  try {
    const emailsDocuments = await Email.find();
    return emailsDocuments;
  } catch (error) {
    console.log("getEmailDocuments", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 *
 * This function gets one email(s) and its message by EMAIL_ID
 * @param emailId is the ID of the email of the sent
 * @returns emailById
 */
export const getEmailById = async (emailId: string) => {
  try {
    const emailById = await Email.findById({ _id: emailId });
    return emailById;
  } catch (error) {
    console.log("getEmailById", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * his function gets one email(s) and its message by EMAIL
 *
 * @param email is the email of the user
 * @returns emailByEmail
 */
export const getEmailByEmail = async (email: string) => {
  try {
    const emailByEmail = await Email.findOne({ email });
    return emailByEmail;
  } catch (error) {
    console.log("getEmailByEmail", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

// ============================DELETE================================================

/**
 * This functions deletes email message according to the email_id
 * @param email_id is the unique emailID
 * @returns deleteByEmailId/null
 */
export const deleteEmailByEmailId = async (email_id: string) => {
  try {
    const deleteByEmailId = await Email.findByIdAndDelete({ _id: email_id });
    return deleteByEmailId;
  } catch (error) {
    console.log("deleteEmailByEmailId", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This funtion deletes email message according to the email
 * @param email email target
 * @returns deleteByEmail/ null
 */
export const deleteEmailByEmail = async (email: string) => {
  try {
    const deleteByEmail = await Email.findOneAndDelete({ email });
    return deleteByEmail;
  } catch (error) {
    console.log("deleteEmailByEmail", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This functions will delete all the emails in the database at once!
 * @returns allEmailsDeleted as null | boolean
 */
export const deleteAllEmails = async () => {
  try {
    const allEmailsDeleted = await Email.deleteMany({});
    return allEmailsDeleted;
  } catch (error) {
    console.log("deleteAllEmails", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function will delete all the emails selected and added into an Array
 *
 * @const emailIds = ["obj", "obj1", "obj2 "]
 * @param emailsId is the selected ids in an array
 * @returns a null | boolean dependiing on what has been deleted | not sure. Will have to confirm this
 */
export const deleteSelectedEmails = async (emailsId: string[]) => {
  try {
    const selectedDeleted = await Email.deleteMany({ _id: { $in: emailsId } });
    return selectedDeleted;
  } catch (error) {
    console.log("deleteSelectedEmails", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

//=============================================UPDATE=================================================

/**
 *
 * @param emailId - typeof string
 * @param update_data is an object, that has different fields. Normally the fields are the ones in the email Schema
 *
 * @returns updated Email object
 */
export const updateEmailById = async (
  emailId: string,
  update_data: TUpdateData
) => {
  try {
    const emailUpdated = await Email.findByIdAndUpdate(emailId, update_data, {
      new: true,
    });

    return emailUpdated;
  } catch (error) {
    console.log("updateEmailById", error);
    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * This function will return an object of the newly updated email document
 *
 * @param email type of string - user email
 * @param update_data is an object of type TUpdateData
 * @type {TUpdateData}
 *
 * @returns an object of the returned email
 */
export const updateEmailsByEmail = async (
  email: string,
  update_data: TUpdateData
) => {
  try {
    const updateByEmail = await Email.findOneAndUpdate({ email }, update_data, {
      new: true,
      runValidators: true,
      timestamps: false,
    });

    return updateByEmail;
  } catch (error) {
    console.log("updateEmailsByEmail", error);

    return { status: 500, error: "Internal Server Error" };
  }
};

/**
 * getEmailDocuments()
 * getEmailById()
 * getEmailByEmail()
 *
 * deleteEmailByEmailId()
 * deleteEmailByEmail()
 * deleteAllEmails()
 * deleteSelectedEmails()
 *
 * updateEmailById()
 * updateEmailsByEmail()
 */
