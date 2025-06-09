import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
    auth: {
        clientId: "1de1670b-2047-41e2-b1c6-0c450cb7e827", // Replace with your Azure AD App Client ID
        authority: "https://login.microsoftonline.com/eebb6bd9-f1a0-4fcd-8ac1-929d7f52693d", // Replace with your Tenant ID
        redirectUri: "https://firsttry-hjbqcqegdcbwergh.eastasia-01.azurewebsites.net/home" // Replace with your App Service URL
    }
};

export const msalInstance = new PublicClientApplication(msalConfig);
