'use strict';

const { google } = require("googleapis");//package needed from Google
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];//sets access level--READ only
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;//value being referred to is in the config.json file--keeps api values hidden
const redirect_uris = [
  "https://jcody49.github.io/meet/"
];


//creates a new instance of the google.auth.OAuth2 method to be called
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,//accepts this as a param
  CLIENT_SECRET,//accepts this as a param
  redirect_uris[0]//accepts the exact uri within the const redirect_uris array above, which is number 0
);

module.exports.getAuthURL = async () => {//uses the module, Node.js module.exports to create the logic
  /**
   *
   * Scopes array is passed to the `scope` option. 
   *
   */
  const authUrl = oAuth2Client.generateAuthUrl({//allows you to seamlessly retrieve an access token, refresh it, and retry the request
    access_type: "offline",
    scope: SCOPES,
  });

  return {//contains the statusCode, headers, and body.
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};