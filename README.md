# Simple React JS Project

## What is the use of this Repo

This project is a simplifie interface for an ERP (Enterprise Resource Planning) system, designed to manage basic business operations efficiently.
The system will consist of the following pages:
1. Dashboard - Provides an overview of the system's features.
2. Products Management - Allows for the management of product listings.
3. Orders Management - Facilitates viewing and handling orders.
4. Orders Calendar View - A calendar interface displaying orders based on their expected delivery dates.
   
The project Template can be used to build bigger projects

## Live Application URL
This URL has the application deployed in

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs


## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **Customers** Component : This Component displays a list of customers. This Component gets the data from a json file in assets folder

2. **CustomerDetails** Component : This Component Displays the details of the selected customer. This Component gets its data from a json file in assets folder as well. This Component is the Child Component of *Customers* Component

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /customerlist which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
