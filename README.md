# Authentication & Authorisation Stratergy
 
> The goal of this project to understand authentication and authorisation by building a basic web app.

## What does the app do.

- You can login through google using the Google Identity serivices.
- After you log in, the feed shows the name of the people who have logged in.
- and you can click on the names, and the page you are redirected to, shows if you are authorised to edit that page or no.

## The Authentication Stratergy.

- In this application, I am using the following package to implement authentication using the google identity services : `@react-oauth/google`


Here's the steps I used to authenticate the user.
- Importing the GoogleLogin component from @react-oauth/google.
> The component has a `onSuccess` prop which passes the JWT token returned by google.
- Passing the JWT token to the backend, and passing the token to the auth function.
- The auth function decodes the jwt using the package `jwt-decode`, and then eiher adding the user to the database, or checking if they already exists. The measure to check here is user email.
- Then the data about the user is passed from the backend to the frontend and the client knows about the user.

## The Authorisation Stratergy

So, for the authorisaton to work, I wanted to the state of the application to store the JWT token returned by google. But in this application, I did not have redux or any state management solution built in, thus I had to store the JWT token in the localstorage. 

So the client gets the JWT from the state or the localstorage, and then requests the access to the backend, and if the backend says that the user is authenticated then the client loads the folloing page.

This is the steps I used to make work in my app.
- Since there was no state management or backend, I am using the first name of the person as the key.
- So, people can click the name from the home screen.
- when the new page is called, the app makes a call to the server and sends the JWT token and the relevant URL. 
- the jwt contains information about the user and the url about the services that the user wants to use.
- depending on the response, the page says authorised or authorisation denied.


