import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:8090",
  realm: "contentnexus",
  clientId: "iam-service", // Make sure this matches your Keycloak client ID
});

/*export const initKeycloak = () => {
  return keycloak.init({
    onLoad: "login-required",  // Ensures user is logged in
    checkLoginIframe: false,   // Prevents silent-check-sso error
    silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  });
};

*/
export default keycloak;
