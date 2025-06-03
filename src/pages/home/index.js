import React from "react";
import { Link } from "react-router-dom";
import { sayHi } from "../../utils/util2";
import { sum } from "../../utils/util.mjs";

export default () => {
  React.useEffect(() => {
    sayHi();
    console.log("sum 1 + 2 = ", sum(1, 2));
  });

  return (
    <div>
      <h2>首页</h2>
      <Link to="/example">点击跳转示例页</Link>
    </div>
  );
};
