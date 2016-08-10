import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import CalendarPresenter from 'js/components/calendar/calendarPresenter.jsx'
import {onClickToggle} from 'js/dux/calendar/actions.jsx'

export default class CalendarContainer extends Component {
  render() {
    return (
    	<div className="calendarWrapper">
			<CalendarPresenter {...this.props}/>			
		</div>		
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isOn: state.calendar.isOn || false
  }
}

export default connect(
  mapStateToProps,
  {onClickToggle}
)(CalendarContainer)

