const apiBaseUrl = "/api";
const apiVersions = {
  v1 : `${apiBaseUrl}/v1`,
  v2 : `${apiBaseUrl}/v2`
}

export const environment = {
  production: false,
  apiBaseUrl,
  apiVersions
};
