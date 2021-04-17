import { Processor } from "./processor.js";


export class FormRiderjs {
    //===================================================================================================

    constructor() {
        console.log("FormRider.js loaded successfully, thank you for using it, Happy validating ❤️ ");
        let jsonConfig = require("./formRiderJsonConfig.json");
        new Processor(jsonConfig);
    }

    static setValidationStatus(status) {
        if (status === true) {
            this.validationStatus = true;
        }
        if (status === false) {
            this.validationStatus = false;
        }
    }


    static getValidationStatus() {
        return this.validationStatus;
    }
}

export default FormRiderjs;

