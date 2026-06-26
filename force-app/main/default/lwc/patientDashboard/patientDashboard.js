import { LightningElement, api, wire, track } from 'lwc'; 
import { getRecord, getFieldValue } from 'lightning/uiRecordApi'; 
import getUpcomingAppointments from '@salesforce/apex/PatientDashboardController.getUpcomingAppointments'; 
import getPatientMedicalHistory from '@salesforce/apex/MedicalRecordService.getPatientMedicalHistory'; 
// Import patient fields using schema imports for field-level security 
import FIRST_NAME   from '@salesforce/schema/Patient__c.First_Name__c'; 
import LAST_NAME    from '@salesforce/schema/Patient__c.Last_Name__c'; 
import BLOOD_GROUP  from '@salesforce/schema/Patient__c.Blood_Group__c'; 
import PHONE        from '@salesforce/schema/Patient__c.Phone__c'; 
import STATUS       from '@salesforce/schema/Patient__c.Patient_Status__c'; 
import DOCTOR_NAME  from '@salesforce/schema/Patient__c.Primary_Doctor__r.Name'; 
const FIELDS = [FIRST_NAME, LAST_NAME, BLOOD_GROUP, PHONE, STATUS, DOCTOR_NAME]; 
export default class PatientDashboard extends LightningElement { 
    @api recordId; // Patient Id from record page 
    @track patient; 
    @track upcomingAppointments = []; 
    @track medicalHistory = []; 
    @track isLoading = true; 
    @track hasError = false; 
    @track errorMessage = ''; 
    // Wire to get patient record 
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS }) 
    wiredPatient({ error, data }) { 
        if (data) { 
            this.patient = data.fields; 
            this.isLoading = false; 
        } else if (error) { 
            this.showError('Failed to load patient details.'); 
        } 
    }
    // Wire to get upcoming appointments 
    @wire(getUpcomingAppointments, { patientId: '$recordId' }) 
    wiredAppointments({ error, data }) { 
        if (data) { 
            this.upcomingAppointments = data; 
        } else if (error) { 
            console.error('Appointment load error:', error); 
        } 
    }
    // Wire to get medical history 
    @wire(getPatientMedicalHistory, { patientId: '$recordId' }) 
    wiredHistory({ error, data }) { 
        if (data) { 
            this.medicalHistory = data; 
        } else if (error) { 
            console.error('Medical history load error:', error); 
        } 
    }
    get hasAppointments() { 
        return this.upcomingAppointments && this.upcomingAppointments.length > 0; 
    }
    get hasMedicalHistory() { 
        return this.medicalHistory && this.medicalHistory.length > 0; 
    }
    showError(message) { 
        this.hasError = true; 
        this.errorMessage = message; 
        this.isLoading = false; 
    }
} 