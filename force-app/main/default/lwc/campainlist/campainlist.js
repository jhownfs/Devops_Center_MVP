import { LightningElement, api } from 'lwc';

const QUERY_URL = 'https://www.googleapi.com/books/v1/volumes?langRestrict=en&q';

export default class Campainlist extends LightningElement {

  searchKey = 'Books';  
<<<<<<< HEAD
  chave_estrangeira;
=======
  @api chave_estrangeira;
>>>>>>> 474499173f21326c86066de3b551e555875c4c39

  getEvent(){
    fetch(QUERY_URL + this.searchKey).then((response) =>{

<<<<<<< HEAD
   if(!response.ok){
   throw response.json();
   } else {
   return response.json();
   }    
=======
        if(!response.ok){
          throw response.json();
        } else {
            return response.json();
        }
        
>>>>>>> 474499173f21326c86066de3b551e555875c4c39
    })
  }

  addContent(){
    const elem = this.template.querySelector("div");
    elem.innerHTML = "<script>malicious</script>";
<<<<<<< HEAD

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
=======
>>>>>>> 474499173f21326c86066de3b551e555875c4c39
  }
}