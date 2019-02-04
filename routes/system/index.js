import express from 'express';
import System from './System';

const systemClass = new System();
const router = express.Router()

router.get("/", function (request, result) {

    result.send("Hello System");
});

router.post("/queue", function (request, result) {
    systemClass
    .queue(request.body) 
    .then(response => {
        result.send(response)
    })
    .catch(error => {
        result.send(error);
    })

})

export default router