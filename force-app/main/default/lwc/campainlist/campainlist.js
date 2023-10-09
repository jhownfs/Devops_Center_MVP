/* eslint linebreak-style: ["error", "windows"] */
import {LightningElement, track, api} from "lwc";
import getCupons from "@salesforce/apex/AttachCampaings.getCupons";

export default class Campainlist extends LightningElement {

    @track 
    lstCupons = [];
    @api 
    validado = false;

    // Utlizando promise para chamar o metodo imperativo
    @api
    handleLoad() {
        getCupons().then((result) => {

            this.lstCupons = result;
            const inputs = this.template.querySelectorAll('.form-control');

            inputs.textContent = 'mensagem';
        })
        .catch((error) => {
            console.log("error => ", error);
        });
    }
}