var fs = require('fs');

import Responses from '../../config/responses';
import errorMessages from '../../config/errorMessages';


export default class User {
    constructor() {
        this.response = new Responses();
    }

    queue = async body => {
        try {
            return this.response.success(200, 'Applications queued in inbox')
        } catch (error) {
            console.log('queue: method error', error)
            return this.response.error(
                400,
                "Could not queue applications",
                error
            )
        }
    }
}