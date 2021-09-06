// export default {
//   cognito: {
//     authUrl: process.env.REACT_APP_COGNITO_AUTH_URL,
//     clientId: process.env.REACT_APP_COGNITO_CLIENT_ID
//   },
//   backend: {
//     url: process.env.REACT_APP_BACKEND_URI,
//     macroURL: `${process.env.REACT_APP_BACKEND_URI}/auth/lambda/macros`
//   },
//   websocket: {
//     chaturl: process.env.REACT_APP_BACKEND_CHAT_WSS,
//     generalurl: process.env.REACT_APP_BACKEND_GENERAL_WSS
//   },
//   capServiceCodes: process.env.REACT_APP_CAP_SERVICE_CODES
// };

export default {
  cognito: {
    authUrl: process.env.REACT_APP_COGNITO_AUTH_URL,
    clientId: "localhost:3000"
  },
  backend: {
    url: process.env.REACT_APP_BACKEND_URI,
    macroURL: `${process.env.REACT_APP_BACKEND_URI}/auth/lambda/macros`
  }
};
