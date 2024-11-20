
<video width="320" height="240" controls>
    <source src="https://www.youtube.com/watch?v=rGHtRcwcnaI">
</video>

## Introduction

As a final project to CS50 Introduction to Computer Science from Harvard University I decide to create a software that would impact me in real life, a software that could help me with a personal real problem.

As dad of one year child, married, two dogs and paying rent it's very important to control my expenses and know my incomes. I already used in the past some apps that promise help with financial control, but it never totally satisfy me, perhaps they are too simple or too complex.

So, I decided stop complaining and let's get hands dirty...

## How to use it

To run this project, basically you just need to clone the project locally.

```bash
# https
git clone https://github.com/rafhaelmallorga/finwise_frontend.git

# ssh
git clone git@github.com:rafhaelmallorga/finwise_frontend.git
```

Then enter in the project repository from your terminal and install all the dependencies:

```bash
cd finwise_frontend
```

```bash
npm install
```

Once that all the dependencies are installed, use the follow command to run the app.

```bash
npm run dev
```

Now you can access the project in the follow URL.

```
http://localhost:5173/
```



> [!INFO] Compatibility Note
> Vite requires [Node.js](https://nodejs.org/en/) version 18+ or 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

## POC

The goal with this software initially is pretty simple, the POC consist of:
* Current Account Balance;
* Saves;
* Transactions (income and outcome).

## Technologies

For this project, I decide to use the stack that I'm already familiar with due to the dead line to register the project.

### Front-end
* React;
* Type Script;

### Generics
* Git;
* Vite;
* Bcrypt;
* UUID.

## Domain

The core domain of this project is to help people with their financial control being as simple as possible, avoiding difficult words from counter vocabulary, easy usability and no need of tutorial to the user start using our app.

Our app cant't be more difficult to use than a piece of paper and a pen.

## Pages

Our page structure initially is:
* /: This will be our dashboard page, and everything will be render here;
* /login: The page dedicated to log in;
* /register: The page dedicated to register in.

## Entities

### User

This entity  will be responsible to handle the user data in our platform. 

To access our app, the user need to create a free account through our Register page, once the user has an account he can log in through the Login page that will redirect him to the Dashboard page.

### Bank Account

This entity will be responsible to handle the data from the users bank accounts.

The user can have as many bank account as necessary, and it will represents the bank accounts from real life, the idea here is to keep the data updated with the real world information, and centralize all the info across the banks in only one place to a better control experience.
### Savings

This entity will be responsible to handle the users savings.

The user can have as many saves as desired, and it will be categorized by goals.

### Transactions

This entity will be responsible to keep data of all transactions in our app, it will grant the history transactions.  
