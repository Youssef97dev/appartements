import __stayListing from "./jsons/__stayListing.json";
import { StayDataType } from "./types";

const DEMO_STAY_LISTINGS = __stayListing.map((item, index) => {
  return {
    ...item,
  };
});

export { DEMO_STAY_LISTINGS };
