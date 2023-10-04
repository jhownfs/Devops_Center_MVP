public class AttachCampaings {
    
    public static List<Account> getCupons(){
       
      List<Account> lstCupons = [SELECT Id, Name FROM Account];

      return lstCupons;       



      

    }

    public static String InsertCampaings(List<Campaign> lstCampaign){
       
        String msg = 'Sucess';
        insert lstCampaign;  

        return msg;
      }
}