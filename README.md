# smallloansbusiness
Small loans business system


How to run the code.

1. Clone a local version.
2. Ensure you have NodeJs 
3. Navigate to the smallloansbusiness repository on your terminal
4. Install packages by typing 'npm install'
5. I've added a script for you to run, simply type 'npm start'
6. This should get the API running. You can edit the API as it's running, and it'll automatically pick up your changes as soon as you save
7. http://localhost:3000/v1
8. You can easily use any REST API testing platform like  Postman https://www.getpostman.com/ to help you connect to the API

# Endpoints and what objects to pass

USER:

POST - http://localhost:3000/v1/user/apply
Endpoint allows the user to apply for a loan
{  
   "name":"Abongile",
   "surname":"Tenza",
   "ID":"1234567890098",
   "address":"24 Plunkett Avenue",
   "email":"abongiletenza@gmail.com",
   "loanAmount":5000,
   "status": "Pending"
}

SYSTEM:
http://localhost:3000/v1/system/queue
INCOMPLETE: Endpoint will automatically queue all applications in Sipho's inbox

SIPHO:

GET - http://localhost:3000/v1/sipho/view
Endpoint returns a list of applications which are pending approval by Sipho

POST - http://localhost:3000/v1/sipho/approve
Endpoint changes user's application status to 'Approved'
{  
   "name":"Abongile",
   "surname":"Tenza",
   "ID":"1234567890098",
   "address":"24 Plunkett Avenue",
   "email":"abongiletenza@gmail.com",
   "loanAmount":5000,
   "status": "Pending"
}

# Assumptions
Oh well, there have been quite a number of assumptions done here. Don't know where to begin listing them.
However, I've tried to validate the user object when either applying or approving the loan application. 

TODO: More validations perhaps? Yeah 

# What the user can expect
Have fun going through the code base :)
