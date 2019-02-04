import express from 'express';
import Sipho from './Sipho';

const siphoClass = new Sipho();
const router = express.Router()

router.get("/", function (request, result) {

    result.send("Hello Sipho");
});

router.post("/approve", function (request, result) {
    siphoClass
    .approve(request.body) 
    .then(response => {
        result.send(response)
    })
    .catch(error => {
        result.send(error);
    })

});

router.get("/view", function (request, result) {
    siphoClass
    .view(request) 
    .then(response => {
        result.send(response)
    })
    .catch(error => {
        result.send(error);
    })

})

export default router