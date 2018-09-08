import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SwipeableViews from "react-swipeable-views";

import Fullimage from "./Fullimage";

const tutorialSteps = [
  {
    imgPath:
      "https://images.pexels.com/photos/1045913/pexels-photo-1045913.jpeg?auto=compress&cs=tinysrgb&h=350",
    label: "How to be happy :)"
  },
  {
    imgPath:
      "https://images.pexels.com/photos/1045913/pexels-photo-1045913.jpeg?auto=compress&cs=tinysrgb&h=350",
    label: "1. Work with something that you like, like…"
  },
  {
    imgPath:
      "https://images.pexels.com/photos/1045913/pexels-photo-1045913.jpeg?auto=compress&cs=tinysrgb&h=350",
    label: "2. Keep your friends close to you and hangout with them"
  },
  {
    imgPath:
      "https://images.pexels.com/photos/1045913/pexels-photo-1045913.jpeg?auto=compress&cs=tinysrgb&h=350",
    label: "3. Travel everytime that you have a chance"
  },
  {
    imgPath:
      "https://images.pexels.com/photos/1045913/pexels-photo-1045913.jpeg?auto=compress&cs=tinysrgb&h=350",
    label: "4. And contribute to Material-UI :D"
  }
];

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: "hidden",
    width: "100%"
  }
});

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
          resistance
        >
          {tutorialSteps.map(step => (
            <Fullimage key={step.label} image={step.imgPath} />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{
            position: "fixed",
            width: "100%",
            bottom: 0,
            display: "flex",
            justifyContent: "space-evenly"
          }}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
);
