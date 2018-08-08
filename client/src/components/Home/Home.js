import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import ImageSlider from './ImageSlider';



const Home = (props) => {
  return (
    <div className="container">
      <div className="mt-3 mx-auto row justify-content-center">
      <Jumbotron className="bg-dark text-light">
        <h1 className="display-5">Welcome to <em><strong>Epic Produce!</strong></em></h1>
        <p className="lead">Here you will find a MASSIVE scale of produce.</p>
        <hr className="" />
        <p>If you sign up with us, you will get a member discount on your first purchase and special weekly & monthly sales. Checkout some pictures of our epic produce below!</p>
        <p className="lead">
          <Button color="success" href="/signup">Sign Up!</Button>
        </p>
      </Jumbotron>
      </div>
      <div className="col-sm mx-auto row justify-content-center">
      <ImageSlider />
      </div>
    </div>
  );
};
export default Home;