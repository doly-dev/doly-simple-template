import React from "react"
import { Link } from "react-router-dom"

export default function() {
  return (
    <div>
      <h2>About Page</h2>
      <ul>
        <li>
          <Link to="/nomatch">not found page</Link>
        </li>
        <li>
          <a
            href="https://github.com/doly-dev/doly-cli#readme"
            target="_blank"
            rel="noopener noreferrer"
          >
            doly-cli文档
          </a>
        </li>
      </ul>
    </div>
  )
}
