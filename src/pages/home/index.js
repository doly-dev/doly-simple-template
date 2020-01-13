import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>首页</h2>
      <Link to="/example">点击跳转示例页</Link>
      <br />
      <Link to="/123">跳转不存在的页面</Link>
    </div>
  );
}
