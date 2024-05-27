import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate, speed, pauseDelay } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = speed; // Use the provided speed prop

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && newText === fullTxt) {
      this.isDeleting = true;
      setTimeout(() => this.tick(), pauseDelay); // Pause after completing the sentence
      return; // Exit early to prevent immediate deletion
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = speed;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <>
      <span className="typewriter">{this.state.text}</span>
      <span className="cursor">|</span>
    </>;
  }
}

// Default props for speed and pauseDelay
TypeWriter.defaultProps = {
  speed: 100, // Default speed
  pauseDelay: 2000 // Default pause delay after completing the sentence
};

export default TypeWriter;
