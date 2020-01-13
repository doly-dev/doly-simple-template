import React, { Component } from "react";
import { Link } from "react-router-dom";
import services from "~/services";
import Timer from "~/components/Timer";

import styles from "./style.less";

export default class ExamplePage extends Component {
  state = {
    loading: false,
    notices: []
  };

  getNotices = () => {
    this.setState({
      loading: true
    });

    services
      .getNotices()
      .then(res => {
        this.setState({
          notices: res.data
        });
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  };

  clearNotices = () => {
    this.setState({
      notices: []
    });
  };

  render() {
    const { loading, notices } = this.state;

    return (
      <div>
        <h2>Example</h2>
        <Link to="/">跳转首页</Link>
        <br />
        <Link to="/456">跳转不存在的页面</Link>
        <h3>Mock</h3>
        <div>
          <button
            className={styles.btn}
            onClick={this.getNotices}
            disabled={loading}
            type="button"
          >
            {loading ? "获取中..." : "获取通知列表"}
          </button>
          {notices.length > 0 && <a onClick={this.clearNotices}>清空</a>}
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
  }
}
