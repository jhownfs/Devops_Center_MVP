@isTest
private class AttachCampaingsTest {
   
    @TestSetup
    static void criarRegistros(){
        
      Cupom__c cp1 = new Cupom__c();
      cp1.Desconto__c = 0.20;
      cp1.Ativo__c = true;

      Cupom__c cp2 = new Cupom__c();
      cp2.Desconto__c = 0.10;
      cp2.Ativo__c = false;


      database.insert(new list<Cupom__c>{cp1, cp2});
    }

    @isTest
    static void recuperarCuponsComSucesso(){

        test.startTest();

          list<Cupom__c> lstCupons = AttachCampaings.getCupons();

        test.stopTest();

        System.assertEquals(1, lstCupons.size(), 'Não foram localizados cupons');
    }

    @isTest
    static void inserirCampanhasComSucesso(){
       

        list<Cupom__c> lstCupons = AttachCampaings.getCupons();

        Campaign cpm = new Campaign();
        cpm.Name = 'Campanha teste';
        cpm.IsActive = true;
        cpm.Status = 'Planned';
        cpm.Type = 'Advertisement';
        cpm.Cupom__c = lstCupons[0].Id;

        List<Campaign> lstcmp = new List<Campaign>{cpm};

        test.startTest();
           String statusOperacao = AttachCampaings.insertCampaings(lstcmp);
        test.stopTest();    

        System.assertEquals('Sucesso', statusOperacao, 'Campanha não foi criada com sucesso');
    }
}