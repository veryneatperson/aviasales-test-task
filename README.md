# About App

This is a completed frontend test task from Aviasales (https://github.com/KosyanMedia/test-tasks/tree/master/aviasales_frontend)

# 23.04.20 UPDATE

The original server is up and running.

# 20.04.20 UPDATE

Since the aviasales server has been down for the last week or so, i create a mocked version of the server (currently with no long-polling but it might be added a bit later)

# Deployed App

Hosted on Heroku: https://aviasales-test-react-redux.herokuapp.com/

# Extra features

I decided to implement a couple of extra features that weren't in the original task:

- Button that smoothly scrolls to the top of the page
- The ability to show more than first 5 tickets
- Unit tests (still working on that...)

# Libraries used

- React + Redux
- Redux-saga (for managing side effects)
- Reselect (for keeping Redux store state minimal and deriving data from the state as needed)
- SASS(SCSS) + CSS modules (for styles)
- ESLint (for cleaner code)
- Jest + Enzyme (for unit testing)
