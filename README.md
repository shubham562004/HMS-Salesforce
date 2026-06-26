#  Hospital Management System — Salesforce 
A complete Hospital Management System built on Salesforce Lightning Experience 
as a portfolio project showcasing end-to-end Salesforce development capabilities. 
##  Features - Patient Registration & Status Tracking - Doctor Onboarding with Approval Workflow - Appointment Booking with Double-Booking Prevention - Medical Records & Prescription Management - Automated Invoice Generation - Insurance Claim Submission & Approval - SMS Notifications via REST API 
- Executive Dashboard with Live KPIs 
##  Architecture - **Data Layer:** 7 Custom Objects with Master-Detail & Lookup relationships - **Business Logic:** Apex Triggers (Handler Pattern), Service Classes - **Async Processing:** Batch Apex, Queueable Apex, Scheduled Apex - **Automation:** 4 Flows, 2 Approval Processes, Validation Rules - **UI:** 3 Lightning Web Components (LWC) - **Security:** Profiles, Permission Sets, Role Hierarchy, Sharing Rules - **Integration:** REST API → SMS Gateway via Named Credentials 
##  Project Structure 
force-app/ ├── main/ │ └── default/ │ ├── objects/ # Custom object definitions │ │ ├── Patient__c/ │ │ ├── Doctor__c/ │ │ ├──
Appointment__c/ │ │ ├── Medical_Record__c/ │ │ ├── Prescription__c/ │ │ ├── Invoice__c/ │ │ └── Insurance_Claim__c/ │ ├──
classes/ # Apex classes │ │ ├── AppointmentTriggerHandler.cls │ │ ├── InvoiceService.cls │ │ ├── MedicalRecordService.cls │ │ ├──
PrescriptionService.cls │ │ ├── PatientDashboardController.cls │ │ ├── DoctorDashboardController.cls │ │ ├──
HospitalDashboardController.cls │ │ ├── SMSService.cls │ │ ├── OutstandingInvoiceBatch.cls │ │ └── DoctorAvailabilityQueueable.cls │
├── triggers/ │ │ └── AppointmentTrigger.trigger │ ├── lwc/ # Lightning Web Components │ │ ├── patientDashboard/ │ │ ├──
doctorDashboard/ │ │ └── hospitalDashboard/ │ └── flows/ # Flow definitions
##  Setup Instructions 
1. Clone the repo: `git clone https://github.com/your-username/hms-salesforce` 
2. Authorize org: `sfdx auth:web:login -a HMS_Org` 
3. Deploy metadata: `sfdx force:source:push` 
4. Assign Permission Sets via Setup or: 
   `sfdx force:user:permset:assign -n HMS_Senior_Doctor` 
5. Import sample data via Data Loader or Anonymous Apex 
6. Configure Named Credential for SMS Gateway in Setup 
##  Running Tests 
```bash 
sfdx force:apex:test:run --classnames AppointmentTriggerHandlerTest,SMSServiceTest,InvoiceServiceTest 
 Code Coverage
Class
Coverage
AppointmentTriggerHandler 95%
InvoiceService
90%
SMSService
OutstandingInvoiceBatch
88%
92%
DoctorAvailabilityQueueable 90%
 Author
[Your Name] | Salesforce Developer LinkedIn: [your-linkedin] Email: [your-email]--- 
# 12. DEVELOPMENT ROADMAP 
## Phase 1 — Data Model (Week 1-2) 
□ Create all 7 custom objects in Setup □ Add all fields as per the field specifications □ Set up Master-Detail and Lookup relationships □ Create
formula fields (Age, Sub Total, Outstanding Balance) □ Enable rollup summary fields on parent objects □ Add validation rules (3 on Patient, 2 on
Appointment, 2 on Insurance Claim) □ Set up Record Types (if needed per department) □ Create Custom Object Tabs and add to App
Deliverable: Working data model with sample records manually entered Time Estimate: 2 days
## Phase 2 — Security (Week 2) 
□ Create Role Hierarchy (5 roles) □ Create Profiles (clone Standard User):
HMS Doctor
HMS Receptionist
HMS Billing Staff
HMS Nurse □ Configure OWD for each object (Private/Public Read Only) □ Create 3 Permission Sets □ Set up Sharing Rules □ Create test
users for each profile and verify access □ Test: Receptionist cannot see another receptionist's patients
Deliverable: Security model configured and tested Time Estimate: 2 days
## Phase 3 — Automation (Week 3) 
□ Flow 1: Patient Onboarding Welcome Flow □ Flow 2: Appointment Confirmation Flow □ Flow 3: Appointment Reminder Scheduled Flow □
Flow 4: Manual Invoice Creation Screen Flow □ Approval Process 1: Doctor Onboarding □ Approval Process 2: Insurance Claim □ Test each flow
with real records □ Validation Rules: Add and test all rules
Deliverable: All flows and approvals working end-to-end Time Estimate: 3 days
## Phase 4 — Apex (Week 4) 
□ Write AppointmentTrigger + AppointmentTriggerHandler
preventDoubleBooking() method
handleStatusChange() method □ Write InvoiceService.cls
createInvoicesForAppointments()
recordPayment() □ Write MedicalRecordService.cls □ Write PrescriptionService.cls □ Write OutstandingInvoiceBatch.cls □ Write
OutstandingInvoiceBatchScheduler.cls □ Write DoctorAvailabilityQueueable.cls □ Write SMSService.cls with Named Credential □ Write test
classes for all above (min. 75% coverage)
Use @TestSetup for shared test data
Use HttpCalloutMock for SMS tests
Deliverable: All Apex deployed with 85%+ coverage Time Estimate: 5 days
## Phase 5 — Lightning Web Components (Week 5) 
□ Build patientDashboard LWC
patientDashboard.html
patientDashboard.js
patientDashboard.js-meta.xml
PatientDashboardController.cls □ Build doctorDashboard LWC
All files + DoctorDashboardController.cls □ Build hospitalDashboard LWC
All files + HospitalDashboardController.cls □ Add all 3 LWCs to their respective Lightning App Pages □ Test responsiveness and data
loading □ Add error handling and empty states
Deliverable: All 3 LWCs deployed and visible in Lightning pages Time Estimate: 4 days
## Phase 6 — Reports & Dashboards (Week 6) 
□ Create 4 Custom Report Types □ Create Report 1: Daily Appointments □ Create Report 2: Monthly Revenue □ Create Report 3: Doctor
Performance □ Create Report 4: Insurance Claim Status □ Create HMS Executive Dashboard
Add 9 dashboard components
Set filters and chart types □ Create Report Folders and set sharing
Deliverable: Live dashboard showing real data Time Estimate: 2 days
## Phase 7 — Integration (Week 6-7) 
□ Set up Remote Site Settings for SMS Gateway □ Configure Named Credential (SMS_Gateway) □ Deploy SMSService.cls □ Write
SMSServiceMock.cls for testing □ Write SMSServiceTest.cls □ Connect SMS callout to Appointment Confirmation Flow (via Apex Action
invocable method) □ Test end-to-end: Book appointment → SMS sent □ (Optional) Add Payment Gateway integration for Invoice
Deliverable: Working SMS integration with test coverage Time Estimate: 2 days
## Phase 7+ — Polish & Documentation 
□ Clean up code (remove debug statements) □ Add JavaDoc-style comments to all Apex classes □ Create GitHub repository with README □
Record a demo video (5-10 minutes) □ Write project description for resume □ Prepare interview answers □ Deploy final version to Developer Org □
(Optional) Create Scratch Org definition and package
Final Deliverable: Complete portfolio project on GitHub + Working Demo Org--- 
## Summary: What This Project Demonstrates 
| Salesforce Skill | Where Used | 
|---|---| 
| Custom Objects & Fields | All 7 HMS objects | 
| Master-Detail Relationships | Medical Record → Patient, Prescription → Medical Record | 
| Formula Fields | Age, Sub Total, Outstanding Balance | 
| Validation Rules | Patient DOB, Phone, Insurance; Appointment conflict | 
| Apex Triggers (Bulkified) | AppointmentTrigger with Handler Pattern | 
| SOQL | All service classes with filters, aggregates, relationships | 
| Batch Apex | OutstandingInvoiceBatch with Stateful | 
| Queueable Apex | DoctorAvailabilityQueueable with complex types | 
| Record-Triggered Flows | Confirmation, Reminder, Onboarding, Invoice | 
| Approval Processes | Doctor Onboarding, Insurance Claim | 
| Lightning Web Components | Patient, Doctor, Hospital Dashboards | 
| @wire Decorator | Patient data, appointments, history | 
| Imperative Apex Calls | Status updates, payment recording | 
| REST API Integration | SMS Gateway with Named Credential | 
| HttpCalloutMock | Test coverage for callouts | 
| Security Model | Profiles, Permission Sets, Role Hierarchy, OWD, Sharing Rules | 
| Custom Report Types | 4 CRTs for all HMS modules |
