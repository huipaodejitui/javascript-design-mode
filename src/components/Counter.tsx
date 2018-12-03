import * as React from "react";
import { connect } from "react-redux";
import actions from "../store/actions/counter";
import { Store, Counter } from "../types";

interface IProps {
  number: number;
  increment: any;
  incrementDelay: any;
  decrement: any;
  goto: any;
}
interface IState {
  num: number;
}
class CounterComponnet extends React.Component<IProps, IState> {
  render() {
    let { number, increment, decrement, incrementDelay, goto } = this.props;
    return (
      <div>
        <p>{number}</p>
        <button onClick={increment}>+</button>
        <button onClick={incrementDelay}>1s后加1</button>
        <button onClick={decrement}>-</button>
        <button onClick={() => goto("/")}>跳到</button>
        <button onClick={() => goto("/counter2")}>跳到counter2</button>
      </div>
    );
  }
}
let mapStateToProps = function(state: Store): Counter {
  return state.counter;
};
export default connect(mapStateToProps, actions)(CounterComponnet);
