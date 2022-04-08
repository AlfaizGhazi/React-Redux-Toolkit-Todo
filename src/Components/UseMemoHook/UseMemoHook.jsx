import * as React from "react";
import { StyledDiv, StyledH2 } from "../../Utils";

export const UseMemoHook = () => {
  const [count, setCount] = React.useState(0);
  const [item, setItem] = React.useState(10);

  //   function multiCount() {
  //     console.log("multiCount");
  //     return count * 5;
  //   }

  const multiCountMemo = React.useMemo(() => {
    console.log("multiCountMemo");
    return count * 5;
  }, [count]);

  return (
    <StyledDiv className="usememohook--wrapper text-center">
      <StyledH2>USE-MEMO_HOOK</StyledH2>
      <h4>Count: {count}</h4>
      <h4>Item: {item}</h4>
      <h4>Count*5 : {multiCountMemo}</h4>
      <button
        className="btn btn-sm btn-dark"
        onClick={() => setCount(count + 1)}
      >
        Update Count
      </button>
      <button
        className="btn btn-sm btn-dark mx-2"
        onClick={() => setItem(item * 10)}
      >
        Update Item
      </button>
    </StyledDiv>
  );
};
