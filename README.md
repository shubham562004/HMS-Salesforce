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
