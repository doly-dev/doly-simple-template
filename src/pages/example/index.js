import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import services from "~/services";
import Timer from "~/components/Timer";

import styles from "./style.less";

export default () => {
  const [loading, setLoading] = useState(false);
  const [notices, setNotices] = useState([]);

  const getNotices = useCallback(() => {
    setLoading(true);

    return services
      .getNotices({ a: 1 })
      .then(res => {
        setNotices(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const clearNotices = useCallback(() => {
    setNotices([]);
  }, []);

  return (
    <div>
      <h2>Example</h2>
      <Link to="/">跳转首页</Link>
      <h3>Mock</h3>
      <div>
        <button
          className={styles.btn}
          onClick={getNotices}
          disabled={loading}
          type="button"
        >
          {loading ? "获取中..." : "获取通知列表"}
        </button>
        {notices.length > 0 && <a onClick={clearNotices}>清空</a>}
      </div>
      <div>
        {notices.length > 0 ? (
          <ul>
            {notices.map(notice => (
              <li key={notice.timestamp}>{notice.content}</li>
            ))}
          </ul>
        ) : (
          <span style={{ color: "gray" }}>暂无通知</span>
        )}
      </div>
      <h3>Component</h3>
      <Timer />
    </div>
  );
};
