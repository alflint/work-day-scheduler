# work-day-scheduler
Boot Camp Challenge 5
Third-Party API's

## About
This project is a a simple calendar application that allows a user to save events for each hour of the day. It runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

### Deployed URL
[work-day-scheduler](https://alflint.github.io/work-day-scheduler/)

## Summary
This is a calendar application that automatically updates the date to the current day and updates the schedule to the current hour for the user. It displays past hour time slots in grey, the current hour in red, and the future hours in green. It uses javascript to update the date and hour creating ease of use for end users. It saves each text entry locally so that when the user saves and refreshes the page, the entry is still present in the hour it was entered in.

## Dynamic Header
![Header](/assets/img/header.png)

## Current Hour Formatting
![currentHour](/assets/img/currentHour.png)

## Utilizing Local Storage
![localStorage](/assets/img/localStorage.png)

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

