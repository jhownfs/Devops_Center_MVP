import { LightningElement, api } from 'lwc';

const QUERY_URL = 'https://www.googleapi.com/books/v1/volumes?langRestrict=en&q';

export default class Campainlist extends LightningElement {

  searchKey = 'Books';  
  chave_estrangeira;

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

    switch (foo) {
      case 1:
          let x = 1;
          break;
      case 2:
          const y = 2;
          break;
      case 3:
          function f() {}
          break;
      default:
          class C {}
    }
  }
}