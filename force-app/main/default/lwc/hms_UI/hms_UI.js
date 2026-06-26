import { LightningElement, wire } from 'lwc';
import getDashboardData from '@salesforce/apex/HMSDashboardController.getDashboardData';

export default class HmsUi extends LightningElement {

    totalPatients = 0;
    totalDoctors = 0;
    appointmentsToday = 0;
    pendingInvoices = 0;

    @wire(getDashboardData)
    dashboardData({data,error}){

        if(data){

            this.totalPatients = data.patients;
            this.totalDoctors = data.doctors;
            this.appointmentsToday = data.appointments;
            this.pendingInvoices = data.invoices;

        }else if(error){
            console.error(error);
        }
    }
}