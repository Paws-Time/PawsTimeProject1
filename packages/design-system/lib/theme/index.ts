import { componentToken, referenceToken, systemToken } from "./colors";
import { fontSize } from "./typograph";
import { shadow } from "./shadow";

export const theme = {
  colors: {
    ref: referenceToken,
    sys: systemToken,
    comp: componentToken,
  },
  fontSize: {
    display: fontSize.display,
    text: fontSize.text,
  },
  shadow: {
    ...shadow,
  },
};
