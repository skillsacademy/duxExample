import React, {PropTypes} from 'react';

const CalendarPresenter = ({name, schemeUrl}) => {
	return (
      <div className="calendarPresenter">
      	Bar is visible = {this.props.isOn}
      	<button onClick={onClickToggle(!this.props.isOn)}>
      		Click me
      	</button>
      </div>
    )
};

CalendarPresenter.propTypes = {
  onClickToggle: React.PropTypes.func.isRequired,
  isOn: React.PropTypes.bool.isRequired
}

export default CalendarPresenter;