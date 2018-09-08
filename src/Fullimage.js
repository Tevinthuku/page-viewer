import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: "90vh",
    width: "100% !important", // Overrides inline-style
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        borderBottom: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    transition: theme.transitions.create("border"),
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  },
  gradient: {
    height: "90vh",
    width: "100%",
    zIndex: 200,
    position: "absolute",
    background: `linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7939950980392157) 53%, rgba(0,0,0,0.2718662464985995) 100%)`
  }
});

const Fullimage = props => (
  <div>
    <ButtonBase
      focusRipple
      className={props.classes.image}
      focusVisibleClassName={props.classes.focusVisible}
    >
      <span
        className={props.classes.imageSrc}
        style={{
          backgroundImage: `url(${props.image})`
        }}
      />
      <div className={props.classes.imageButton}>
        <Typography
          style={{
            zIndex: 210,
            color: "white"
          }}
          className={props.classes.imageTitle}
          variant="display1"
        >
          Hello
          <span className={props.classes.imageMarked} />
        </Typography>
        <Typography
          style={{
            marginTop: 10,
            zIndex: 210,
            color: "white"
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          mor e recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </div>
      <div className={props.classes.gradient} />
    </ButtonBase>
  </div>
);
export default withStyles(styles)(Fullimage);
