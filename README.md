# Feedback App

A React App that allows users to add, update and delete feedback for a service or product. 

It uses a mock REST API with json-server.

We deployed this app using a [nifty little trick](https://blog.mimacom.com/deploy-demo-with-api-heroku/) to have a mock backend on Heroku, which will persist the data but should only be considered as a demo/Proof of Concept type of deploy

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
