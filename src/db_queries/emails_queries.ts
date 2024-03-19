import Email from "@/model_schemas/email_me_schema";

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
