import styled from "../../../utils/styled-components";

const colorWhite  = '#ffffff';
const colorMediumBlue = '#2e5fca';
const colorDarkSlateBlue = '#19336a';
const colorBlack8 = 'rgba(51, 51, 51, 0.08)';
const colorDarkIndigo25 = 'rgba(15, 32, 69, 0.25)';
const colorDarkIndigo60 = 'rgba(15, 32, 69, 0.6)';
const colorDarkIndigo75 = 'rgba(15, 32, 69, 0.6)';

const StyledBookingCalendar = styled<{}, "div">("div")`
  font-family: "Source Sans Pro", sans-serif;

  .DayPicker {
    width: 300px !important;
    &>div>div {
      width: 300px !important;
    }
    border: 1px solid ${colorBlack8};
  }

  .DayPicker_transitionContainer {
    width: 300px !important;
  }

  .DayPickerNavigation_button__horizontalDefault {
    top: 20px;
  }

  .DayPickerNavigation_leftButton__horizontalDefault{
    left: 27px;
  }

  .DayPickerNavigation_rightButton__horizontalDefault{
    right: 32px;
  }

  .CalendarMonth_caption {
    font-family: "Barlow", sans-serif;
    color: ${colorDarkSlateBlue};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.2px;
    padding-top: 18px;
  }

  .DayPicker_weekHeader_li {
    width: 36px !important;
    small {
      color: ${colorDarkIndigo60};
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.1px;
    }
  }

  .CalendarDay {
    width: 36px !important;
    height: 36px !important;
    border: none;
    color: ${colorDarkIndigo75};
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.2px;
  }
  
  .CalendarDay__default:hover {
    background: none;
    border: none;
  }

  .bcd_before {
    color: ${colorDarkIndigo25};
  }

  .bcd_today,
  .bcd_after {
    color: ${colorDarkIndigo75};
  }

  .bcd_has_events {
    width: 100%;
    height: 100%;
    color: ${colorMediumBlue};
    box-sizing: border-box;
    border: 2px solid ${colorMediumBlue};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }  

  .bcd_selected {
    width: 100%;
    height: 100%;
    color: ${colorWhite};
    background-color: ${colorMediumBlue};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default StyledBookingCalendar;
