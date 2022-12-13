import mixpanel from "mixpanel-browser";
import { mppToken } from "src/config";

//dynamic type
export const initMixpanel = (code, userId) => {
  let mpptoken = "";
  if (code.includes("my")) mpptoken = mppToken;
  if (mpptoken) {
    console.log("mixpanel: Log in");
    mixpanel.init(mpptoken);
    mixpanel.track("Log in", {
      userId,
    });
  }
};
