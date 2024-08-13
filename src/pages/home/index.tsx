import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h2>首页</h2>
      <Link to="/example">点击跳转示例页</Link>
    </div>
  );
};
