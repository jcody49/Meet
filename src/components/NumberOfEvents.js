/**
 * The `NumberOfEvents` component allows users to set the number of events to be displayed.
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.setCurrentNOE - A function to set the current number of events.
 * @param {Function} props.setErrorAlert - A function to set an error alert message.
 * @returns {JSX.Element} The rendered NumberOfEvents component.
 */
const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    /**
     * Handles changes in the input field and updates the number of events to be displayed.
     * @param {Object} event - The input change event.
     */
    const handleInputChanged = (event) => {
      const value = event.target.value;
  
      if (isNaN(value)) {
        console.log("Value is not a number:", value);
        setErrorAlert('value is not a number');
      } else if (value > 50) {
        setErrorAlert('maximum value is 50');
      } else if (value <= 0) {
        setErrorAlert('minimum value is 1');
      } else {
        setErrorAlert('');
        setCurrentNOE(value);
      }
    };
  
    return (
      <div id="number-of-events">
        <input
          type="text"
          defaultValue="32"
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
        />
      </div>
    );
  };
  
  export default NumberOfEvents;