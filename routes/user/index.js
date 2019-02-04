import express from 'express';
import User from './User';

const userClass = new User();
const router = express.Router()

router.get("/", function (request, result) {

    result.send("Hello User");
});

router.post("/apply", function (request, result) {
    userClass
    .apply(request.body) 
    .then(response => {
        result.send(response)
    })
    .catch(error => {
        result.send(error);
    })

})

export default router