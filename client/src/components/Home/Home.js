import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import ImageSlider from './ImageSlider';



const Home = (props) => {
  return (
    <div>
      <Jumbotron className="w-75 h-50 mx-auto mt-5 bg-dark text-light">
        <h1 className="display-5">Welcome to <em><strong>Epic Produce!</strong></em></h1>
        <p className="lead">Here you will find a MASSIVE scale of produce.</p>
        <hr className="" />
        <p>If you sign up with us, you will get a member discount on your first purchase and special weekly & monthly sales. Checkout some pictures of our epic produce below!</p>
        <p className="lead">
          <Button color="success" href="/signup">Sign Up!</Button>
        </p>
      </Jumbotron>

      <ImageSlider />
    </div>
  );
};


// const Home = (props) => {
//   if (props.user) {
//     return (
//       <div className="Home">
//         <p>Current User: </p>
//         <h1>Hello!</h1>
//         <code>
//           {JSON.stringify(props.user)}
//         </code>
//       </div>
//     )
//   } else {
//     return (
//       <div className="Home">
//         <p>Current User:</p>
//         <code>
//           {JSON.stringify(props)}
//         </code>
//       </div>
//     )
//   }
// }

export default Home;