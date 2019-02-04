var fs = require('fs');

import Responses from '../../config/responses';
import errorMessages from '../../config/errorMessages';

export default class User {
    constructor() {
        this.response = new Responses();
    }

    apply = async body => {
        /**
         * INPUT OBJECT EXAMPLE
         * { 
         *  "name": "Abongile",
         *  "surname": "Tenza",
         *  "ID": "9312240178087",
         *  "address": "24 Plunkett Avenue",
         *  "email": "abongiletenza@gmail.com",
         *  "loanAmount": 500,
         *  "status": "Pending"
         * }
         */

        try {
            //Verify application details provided
            const applicationResponse = this.validateApplication(body);

            if (applicationResponse !== "") {
                return this.response.error(
                    400,
                    "Application validation error",
                    applicationResponse
                )
            }

            //Send user to DB 
            let userID = 1

            this.writeToFile(body);
            return this.response.success(200, 'Application submitted. User ID is: ', userID)

        } catch (error) {
            console.log('application: method error', error)
            return this.response.error(
                400,
                "Could not submit application",
                error
            )
        }
    };

    validateApplication = application => {

        let result = ''
        if (typeof application !== "undefined" && application !== "") {

            if (typeof application.name === "undefined" || application.name === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant name'
            }

            if (typeof application.surname === "undefined" || application.surname === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant surname'
            }

            if (typeof application.ID === "undefined" || application.ID === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant ID'
            }

            if (typeof application.address === "undefined" || application.address === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant address'
            }

            if (typeof application.email === "undefined" || application.email === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant email'
            }

            if (typeof application.loanAmount === "undefined" || application.loanAmount === "") {
                result = errorMessages.values.mandatoryFieldPrefix + 'applicant loan amount'
            }


            return result
        }
        result = errorMessages.values.mandatoryFieldPrefix + 'application details'
        return result
    };

    writeToFile = async body => {
        fs.appendFileSync('LoanApplications.json', JSON.stringify(body, null, 2) , function (error) {
            if (error) {
                console.log('File write err', error);
                throw error;
            };
            console.log('Saved!');
          });
    };
};