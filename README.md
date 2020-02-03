## React Course

React course given to check point in February 2020

## Video Lectures

The course is available in video in this URL:
https://www.youtube.com/playlist?list=PLnHa2cF4cNDtfkYKO6v069GUPYrJtijwc

I'm uploading new react material every week so to keep updated subscribe to my user at:

https://www.youtube.com/user/ywarezk

## Whatsapp Group

You also have access to a whatsapp group where i publish my videos and answer React questions
Link to the group:
https://chat.whatsapp.com/Eqll3DtpQG27SAET5NcmtB

## Lessons

### Some tools we will need

This lesson will cover some basic tools we will need before we dive in to React.
We will cover the following tools:
- NodeJS
- NPM
- NPX

### Some advanced JS we will use throughout this course

- variable declaration: var, let, const
- OOP and this
- closure
- Promise, async await
- destructoring

### React Introduction

Let's get to know React.
This lecture is available in video in the following URL:
https://youtu.be/bVPMCmTN__Q

We will cover the following topics:

- What is React
- Hello World
- React.createElement
- JSX introduction
- Component
- React Architecture
- VirtualDOM

### JSX

This is the syntax we will use to describe how our components look like.
This lecture is available in Video in the following URL:
https://youtu.be/s_ctvfeA58c

We will cover the rules of JSX

### create-react-app

A library facebook released to easily start a new React web project.
This lecture is available in Video in the following URL:
https://youtu.be/n-GATg31ctE

In this lecture we will cover the following topics

- Create a new React web project
- Going over the files
- Running a development server
- Building our app
- webpack
- adding images
- adding stylesheets
- best practices to arrange files, styles

### React Components

The building blocks of a React application are React Components.
In this lesson we will cover how we create React Components
This lecture is available in video in the following URL:
https://youtu.be/jpmyfv_w-fw

We will cover the following topics

- What are react components and how we decide what to wrap in a component
- Component as function
- Component as class
- Props, propTypes, defaultProps
- Events
- State
- introduction to hooks
- useState
- Component lifecycle
- useEffect

### Components EX.

Time for you guys to practice creating React application and creating React components.
In this EX. you will create a Todo List application.
The solution for the Ex. is avilable in the following video:
https://youtu.be/8vgzC3CI510

- http://nztodo.herokuapp.com/api/task/?format=json
- http://nztodo.herokuapp.com/api/graphql


To send the request:

```
// fetch is returning Promise<Response>
fetch('https://nztodo.herokuapp.com/api/task/?format=json')
    .then((response) => {
        // from response we want the data from the server
        return response.json();
    });
```

### Forms and some React design patterns

In this lesson we will learn how to deal with forms in React application.
We will also learn about important React patterns that if you understand will help you understand other react libraries as well.
The lesson is available in the following video:
https://youtu.be/CAobBdYor6U

We will cover the following topics:
- Controlled form
- Uncontrolled form
- Ref, useRef
- HOC
- Render Props
- custom hooks
- Formik

### Forms EX.

In this ex you will understand how JWT and authentication is working in a spa.
An important ex. that will escort you probably during your real life development.
The ex and solution is in this video:

https://youtu.be/8BtdI3-ateM

### Redux

In this lesson we will talk about Redux library which will help us arrange the data in our app.
The lesson is available in the following video:

https://youtu.be/7pZmBah66zE

- The data problem we are trying to solve
- What is Redux
- Redux Architecture
- Store
- Reducers
- Actions
- state best practices
- combineReducers
- Redux dev tools
- middlewares
- redux-thunk

### Redux EX.

Redux is not an easy topic to chew so in this lesson we will practice how to work with Redux.
We will create a simple chat app.
We will have to arrange data we get from the server in a redux state and understand how to divide our components to smart containers which connect to the state, and simple components which are getting props.
The solution for this EX. is available in the following video:

https://youtu.be/3PKv9gG68Pg

### Routing in React

Our SPA will be divided to different screens, where each screen resides in a different url.
In this lesson we will learn how to arrange the screens of our app, what is the best practices working with URL and how to pass data with the url.
The lesson is available in the following video:

https://youtu.be/TR5Dx8_cJcA

We will cover the following:

- 