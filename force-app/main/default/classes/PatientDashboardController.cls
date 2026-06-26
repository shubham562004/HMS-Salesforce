public with sharing class PatientDashboardController { 
    @AuraEnabled(cacheable=true) 
    public static List<Appointment__c> getUpcomingAppointments(Id patientId) { 
        return [ 
            SELECT Id, Name, Doctor__r.Name, Appointment_Date__c, 
                   Appointment_Time__c, Status__c, Type__c, Token_Number__c 
            FROM Appointment__c 
            WHERE Patient__c = :patientId 
              AND Appointment_Date__c >= TODAY 
              AND Status__c NOT IN ('Cancelled', 'Completed') 
            ORDER BY Appointment_Date__c ASC, Appointment_Time__c ASC 
            LIMIT 10 
        ];
    }
    @AuraEnabled(cacheable=true) 
    public static Patient__c getPatientDetails(Id patientId) { 
        return [ 
            SELECT Id, Name, First_Name__c, Last_Name__c, Date_of_Birth__c, 
                   Age__c, Gender__c, Blood_Group__c, Phone__c, Email__c, 
                   Patient_Status__c, Insurance_Provider__c, Insurance_Policy_Number__c, 
                   Primary_Doctor__r.Name, Registration_Date__c, Allergies__c 
            FROM Patient__c 
            WHERE Id = :patientId 
            LIMIT 1 
        ];
    }
} 