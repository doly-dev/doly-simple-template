import React from "react";
import { Link } from "react-router-dom";

export default class ExceptionPage extends React.Component {
  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    return (
      <div>
        <h2>404</h2>
        <ul>
          <li>
            <a
              role="button"
              onClick={this.goBack}
              onKeyDown={() => {}}
              tabIndex="0"
            >
              back
            </a>
          </li>
          <li>
            <Link to="/">home page</Link>
          </li>
        </ul>
      </div>
    );
  }
}
