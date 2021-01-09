//require("../../config/dotenv");
const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const projectId = process.env.PROJECT_ID;
const sessionId = "123456";

const makeMessagens = async (text) => {
  const sessionClient = new dialogflow.SessionsClient({
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: text,
        languageCode: "pt-BR",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  //console.log(responses);
  const result = responses[0].queryResult;

  const resulText = result.fulfillmentText;
  return resulText;
};

module.exports = makeMessagens;
