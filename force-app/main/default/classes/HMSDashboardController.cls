public with sharing class HMSDashboardController {

    @AuraEnabled(cacheable=true)
    public static Map<String,Integer> getDashboardData(){

        Map<String,Integer> data = new Map<String,Integer>();

        data.put('patients',
            [SELECT Count() FROM Patient__c]);

        data.put('doctors',
            [SELECT Count() FROM Doctor__c]);

        data.put('appointments',
            [SELECT Count()
             FROM Appointment__c
             WHERE Appointment_Date__c = TODAY]);

        data.put('invoices',
            [SELECT Count()
             FROM Invoice__c
             WHERE Payment_Status__c != 'Paid']);

        return data;
    }
}