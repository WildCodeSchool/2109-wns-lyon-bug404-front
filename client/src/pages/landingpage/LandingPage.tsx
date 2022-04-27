import { Link } from 'react-router-dom';
//components
import Header from '../../components/Header';

//styles and images
import './LandingPage.css';
const bgImage = require('../../assets/bgImage.png');

export default function LandingPage(): JSX.Element {
  return (
    <div className="h-screen landing-page ">
      <Header />
      <div className="flex justify-center ">
        <div className=" lg:text-left lg:max-w-2xl lg:w-full mt-20">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              test2 Simplify work and get,{' '}
            </span>
            <span className="block text-primary xl:inline">more </span>done.
          </h1>
          <p className="mt-5 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Plan, track, and manage any type of work with project management
            that flexes to your team's needs.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Link to="/login" className="primaryBtn">
              Get started
            </Link>
          </div>
        </div>

        <div className="ml-10">
          <img
            className="object-cover sm:h-72 md:h-96 lg:w-30 lg:h-5/6"
            src={bgImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
