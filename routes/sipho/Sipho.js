var fs = require('fs');

import Responses from '../../config/responses';
import errorMessages from '../../config/errorMessages';

var utils = require('../../utils/Utils.js');

export default class Sipho {
    constructor() {
        this.response = new Responses();
    }

    view = async body => {
        try {
            const fileContents = this.readFromFile();
            console.log("request, ", fileContents)
            return this.response.success(200, 'Hi Sipho, here is your queued inbox: ', fileContents)
        } catch (error) {
            return this.response.error(
                400,
                "Could not retrieve applications",
                error
            )
        }
    }

    approve = async body => {
        try {

             //Verify application details provided
             const applicationResponse = this.validateObject(body);

             if (applicationResponse !== "") {
                 return this.response.error(
                     400,
                     "Application supplied is incomplete and thus cannot be approved",
                     applicationResponse
                 )
             }

             
            body.status = "Approved"

            utils.writeToFile("ApprovedLoans.json", body)


            return this.response.success(200, 'Application approved', body)

        } catch (error) {
            console.log('approve: method error', error)
            return this.response.error(
                400,
                "Could not approve application",
                error
            )
        }
    }

    readFromFile = () => {
        let rawdata = fs.readFileSync('QueuedInbox.json');
        let queue = JSON.parse(rawdata);

        return queue;
    };

    validateObject = application => {

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
}