import * as types from "../action-types";
import { push } from "connected-react-router";
export interface increment {
  type: typeof types.INCREMENT;
}
export interface decrement {
  type: typeof types.DECREMNT;
}
export type Action = increment | decrement;
export default {
  increment(): increment {
    return { type: types.INCREMENT };
  },
  incrementDelay(): any {
    return function(dispatch: any, getState: any) {
      setTimeout(function() {
        dispatch({ type: types.INCREMENT });
      }, 1000);
    };
  },
  decrement(): decrement {
    return { type: types.DECREMNT };
  },
  goto(newPath: string) {
    return push(newPath);
  }
};
