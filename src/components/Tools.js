import React from 'react';
import '../styles/Tools.css';

function Tools() {
  return (
    <div className="text-center">
      <h3> Tools used for this Project</h3>
      <ul >

        <li className="pic-list">
          <img src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
            alt="icon" width="50" height="auto" />
          <p>NodeJs</p>
        </li>

        <br></br>

        <li className="pic-list">
          <img src="https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png"
            alt="icon" width="50" height="auto" />
          <p>Postman</p>
        </li>

        <br></br>

        <li className="pic-list">
          <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
            alt="icon" width="50" height="auto" />
          <p>Jira</p>
        </li>

        <br></br>

        <li className="pic-list">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
            alt="icon" width="50" height="auto" />
          <p>React</p>
        </li>

      </ul>

    </div>
  );
}

export default Tools;