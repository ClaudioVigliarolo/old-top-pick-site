export const DEFAULT_CATEGORY_ID = -1;
export const DEFAULT_LEVEL = -1;
export const API_HOSTNAME = "https://top-pick-api.herokuapp.com"; //" http://localhost:4001";;
export const SITE_HOSTNAME =
  process.env.NODE_ENV === "production"
    ? "https://top-pick.app"
    : "http://localhost:8080";
