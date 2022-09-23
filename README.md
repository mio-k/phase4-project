## mios-phase4-project
This is Mio's phase 4 project repo. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Requirements
The requirements for the phase 4 project are as follows:
- Use a Rails API backend with a React frontend.
- Have at least three models on the backend, that include the following:
     - At least two one-to-many relationships.
     - At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
- Full CRUD actions for at least one resource.
- Minimum of create and read actions for EACH resource.
- Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
- Implement authentication/authorization, including password protection. A user must be able to:
    - sign up with a new user account,
    - log in to the site with a secure password and stay logged in via user ID in the session hash, and
    - log out of the site.
Note: a user should only be able to edit and delete resources if they are logged in and the creator of that resource. For example, if we consider the example described below with models of User, DogHouse, and Review, I would only be able to edit or delete the reviews that I created.


## To start the app
- Run rails s to start the server.
- Run npm start --prefix client to start the front end.

## What this app does
This app is for the Dog Pod members to offer free dog care items to other  members. The things you can do includes:
- Become a member of the Dog Pod
- Log in and out as a member
- Create a record of one dog per member
- View the list of the dog pod members.
- View each member profile with the information of their dog and the free items they are offering.
- View the list of the dogs owned by the members.
- Viwe the list of the free items offered by the members.
- View each free item and know which member is offering it.
- Create a new free item to offer to ther members.
- Edit free items you are offering
- Delete free items you are offering.
- Associate multiple tags for each free item
- View each dog with their owner's information.