public class AttachCampaings {
    
    public static List<Account> getCupons(){
       
      List<Account> lstCupons = [SELECT Id, Name FROM Account];

      return lstCupons;

    }

    public static String insertCampaings(List<Campaign> lstCampaign){
       
      String msg = 'Sucess';

    //  if (Schema.sObjectType.Campaign.isCreateable()) {

         insert lstCampaign;  

    //  }

      return msg;
  }
}