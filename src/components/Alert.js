import { Component } from 'react';

/**
 * The `Alert` component for displaying customizable alerts.
 * @class
 */
class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  /**
   * Get the inline style for the alert.
   * @returns {Object} The CSS style object for the alert.
   */
  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px"
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

/**
 * The `InfoAlert` component, a specialized alert for displaying information.
 * @class
 */
class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'rgb(0, 0, 255)'; // blue
      this.bgColor = 'rgb(220, 220, 255)'; // light blue
    }
}

/**
 * The `ErrorAlert` component, a specialized alert for displaying errors.
 * @class
 */
class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(255, 0, 0)'; // red
        this.bgColor = 'rgb(255, 220, 220)'; // light red
    }
}

/**
 * The `WarningAlert` component, a specialized alert for displaying warnings.
 * @class
 */
class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(40, 40, 40)'; // Dark gray text color
        this.bgColor = 'rgb(255, 255, 200)'; // Light yellow background
    }
}



export { InfoAlert, ErrorAlert, WarningAlert };