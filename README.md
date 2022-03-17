# Feedback App

This project was written as part of [React Back to Front 2022](https://www.udemy.com/course/react-front-to-back-2022/)'s Udemy course by [Brad Traversy](https://traversymedia.com).


It allows users to add, update and delete feedback. It uses a mock REST API with json-server.

We deployed the app using a nifty little trick to have a mock backend on Heroku, which will persist the data but should only be considered as a demo/PoC type of deploy

You can see a working version of the app [here](https://villagrat-feedback-app.herokuapp.com/)

This project goes over all of the fundamentals of React including...

- Components
- JSX
- Props (proptypes, defaultprops, etc)
- State (Component & App Level)
- Styling
- Handling Events
- Lists & Keys
- Forms
- Context API and the useContext Hook
- HTTP Requests

# Usage

### Install dependencies

```bash
npm install
```

### Run

```bash
npm run dev
```

This will run JSON-server on port :5000 and React on port :3000
