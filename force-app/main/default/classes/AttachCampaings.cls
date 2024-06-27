public with sharing class AttachCampaings {
    
    @AuraEnabled
    public static List<Cupom__c> getCupons(){
       
      List<Cupom__c> lstCupons = [SELECT Id, Name, Desconto__c FROM Cupom__c WHERE Ativo__c = TRUE WITH USER_MODE];

      return lstCupons;

    }

    @AuraEnabled
    public static String insertCampaings(List<Campaign> lstCampaign){
      String msg = 'Sucesso';
      if (Schema.sObjectType.Campaign.isCreateable()) {
         insert lstCampaign;
      }
      return msg;
  }
}