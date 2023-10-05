import { LightningElement, api } from 'lwc';

const QUERY_URL = 'https://www.googleapi.com/books/v1/volumes?langRestrict=en&q';

export default class Campainlist extends LightningElement {

  searchKey = 'Books';  
  @api chave_estrangeira;

  getEvent(){
    fetch(QUERY_URL + this.searchKey).then((response) =>{

        if(!response.ok){
          throw response.json();
        } else {
            return response.json();
        }
        
    })
    
  }

  addContent(){
  const elem = this.template.querySelector("div");
  elem.innerHTML = "<script>malicious</script>";



  }
  
}