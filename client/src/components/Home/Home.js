import React from 'react';

const Home = (props) => {
  if (props.user) {
    return (
      <div className="Home">
        <p>Current User: </p>
        <h1>Hello!</h1>
        <code>
          {JSON.stringify(props.user)}
        </code>
      </div>
    )
  } else {
    return (
      <div className="Home">
        <p>Current User:</p>
        <code>
          {JSON.stringify(props)}
        </code>
      </div>
    )
  }
}

export default Home;