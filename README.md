# 🏥 Hospital Management System — Salesforce

> Built as a portfolio project during Salesforce internship at Cloud Intellect (2026).
> Demonstrates end-to-end Salesforce development across data modeling, Apex,
> LWC, automation, security, REST API integration, and an external OAuth-connected UI.

A complete Hospital Management System built on Salesforce Lightning Experience
as a portfolio project showcasing end-to-end Salesforce development capabilities.

---

## ✅ Features

- Patient Registration & Status Tracking
- Doctor Onboarding with Approval Workflow
- Appointment Booking with Double-Booking Prevention
- Medical Records & Prescription Management
- Automated Invoice Generation
- Insurance Claim Submission & Approval
- SMS Notifications via REST API
- Executive Dashboard with Live KPIs
- External Web UI connected to live Salesforce data via OAuth 2.0

---

## 🏗️ Architecture

- **Data Layer:** 7 Custom Objects with Master-Detail & Lookup relationships
- **Business Logic:** Apex Triggers (Handler Pattern), Service Classes
- **Async Processing:** Batch Apex, Queueable Apex, Scheduled Apex
- **Automation:** 4 Flows, 2 Approval Processes, Validation Rules
- **UI:** 3 Lightning Web Components (LWC) + External HTML/JS UI
- **Security:** Profiles, Permission Sets, Role Hierarchy, Sharing Rules
- **Integration:** REST API → SMS Gateway via Named Credentials

---

## 🌐 External UI

A standalone web-based UI built with HTML, CSS, and JavaScript connected
to live Salesforce data via OAuth 2.0 (Implicit Flow).

**Pages:**
- Dashboard — KPIs, today's appointments, overdue invoices
- Patients — patient list with search and filter, register new patient
- Appointments — all appointments with status filter
- Doctors — doctor cards with performance bars
- Book Appointment — live patient search, appointment creation

**Tech:** HTML · CSS · Vanilla JS · Salesforce REST API · OAuth 2.0

---

## 📁 Project Structure
force-app/

├── main/

│   └── default/

│       ├── objects/              # Custom object definitions

│       │   ├── Patient__c/

│       │   ├── Doctor__c/

│       │   ├── Appointment__c/

│       │   ├── Medical_Record__c/

│       │   ├── Prescription__c/

│       │   ├── Invoice__c/

│       │   └── Insurance_Claim__c/

│       ├── classes/              # Apex classes

│       │   ├── AppointmentTriggerHandler.cls

│       │   ├── InvoiceService.cls

│       │   ├── MedicalRecordService.cls

│       │   ├── PrescriptionService.cls

│       │   ├── PatientDashboardController.cls

│       │   ├── DoctorDashboardController.cls

│       │   ├── HospitalDashboardController.cls

│       │   ├── SMSService.cls

│       │   ├── OutstandingInvoiceBatch.cls

│       │   └── DoctorAvailabilityQueueable.cls

│       ├── triggers/

│       │   └── AppointmentTrigger.trigger

│       ├── lwc/                  # Lightning Web Components

│       │   ├── patientDashboard/

│       │   ├── doctorDashboard/

│       │   └── hospitalDashboard/

│       └── flows/                # Flow definitions

external-ui/

├── index.html

├── patients.html

├── appointments.html

├── doctors.html

├── booking.html

├── new-patient.html

├── login.html

├── callback.html

├── api.js

└── style.css

---

## ⚙️ Setup Instructions

### Salesforce Org

1. Clone the repo:
```bash
git clone https://github.com/shubham562004/HMS-Salesforce.git
```

2. Authorize org:
```bash
sfdx auth:web:login -a HMS_Org
```

3. Deploy metadata:
```bash
sfdx force:source:push
```

4. Assign Permission Sets:
```bash
sfdx force:user:permset:assign -n HMS_Senior_Doctor
```

5. Import sample data via Data Loader or Anonymous Apex

6. Configure Named Credential for SMS Gateway in Setup

### External UI Setup

1. Open `external-ui/` folder in VS Code
2. Update `clientId` in `api.js` with your Connected App Consumer Key
3. Add `http://localhost:8080` to Salesforce CORS settings
4. Set Callback URL in Connected App to `http://localhost:8080/callback.html`
5. Right click `login.html` → Open with Live Server
6. Click **Login with Salesforce**

---

## 🧪 Running Tests

```bash
sfdx force:apex:test:run --classnames AppointmentTriggerHandlerTest,SMSServiceTest,InvoiceServiceTest
```

### Code Coverage

| Class | Coverage |
|---|---|
| AppointmentTriggerHandler | 95% |
| InvoiceService | 90% |
| SMSService | 88% |
| OutstandingInvoiceBatch | 92% |
| DoctorAvailabilityQueueable | 90% |

---

## 📊 What This Project Demonstrates

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
| Reports & Dashboards | 4 reports + Executive Dashboard |
| External OAuth UI | HTML/JS app connected via Salesforce REST API |

---

## 👤 Author

**Shubham** | Salesforce Developer
- LinkedIn: [www.linkedin.com/in/shubham-matale56]
- Email: shubhamomatale@gmail.com
- GitHub: https://github.com/shubham562004

---

*HMS on Salesforce — Portfolio Project*
*Covers: Apex · LWC · SOQL · Flows · Batch · Queueable · REST API · Security · Reports · External UI*
