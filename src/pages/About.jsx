import React from "react";
import "./About.css";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const About = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <h2>About Company Page</h2>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <button type="button" class="btn btn-outline-secondary">Get In Touch</button>
        </div>
        <div class="col-sm-4">
          <SignalCellularAltIcon className="about-logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
