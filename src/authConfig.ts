import { Configuration, LogLevel, PopupRequest } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: "",
    authority: "",
    redirectUri: ""
  },
  cache: {
    cacheLocation: "sessionStoreage",
    storeAuthStateInCookie: false
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      }
    }
  }
};

export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};

export const graphConfig = {
  graphMeEndpoint: ""
};
