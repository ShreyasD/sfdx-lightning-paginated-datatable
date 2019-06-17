public with sharing class PaginatedDatatableDemoCtrl {
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Phone
                FROM Account LIMIT 2000];
    }
}
