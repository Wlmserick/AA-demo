# Building a Digital Chama App with GitHub Copilot Agent Mode  
**AssetAlign Chama Application Story for Kenyan Community Groups**

### The Vision Behind AssetAlign

Faith Njeri has been part of a women’s chama in Nairobi for over a decade. Every month, she and 20 other members meet to contribute savings, issue small loans, and support each other financially. Despite the group’s passion and reliability, managing records on paper and through WhatsApp messages had become increasingly chaotic. Missing contributions, untracked penalties, and opaque loan records were causing tension and mistrust.

During a fintech bootcamp, Faith learned about digital transformation in grassroots financial systems. Inspired, she envisioned an app tailored for chamas—one that would bring order, transparency, and automation to their beloved tradition.

---

### The Birth of AssetAlign

Faith’s original idea was scribbled on a napkin during a matatu ride: an app where chama members could see real-time balances, vote on decisions, track their loans and savings, and reduce their reliance on WhatsApp and spreadsheets.

Not having a technical background herself, Faith approached her nephew Daniel, a software developer and tech enthusiast. After reviewing a similar system built by another community initiative (referenced in the `README.md`), they saw an opportunity to build a platform customized for Kenyan chamas. Thus, **AssetAlign** was born.

---

### Technical Planning Phase

Faith and Daniel outlined the structure of the app after reviewing the best practices from other open-source financial tools. They aligned their approach to mirror working tools while solving local challenges that are unique to chama culture.

They set out the following goals:

---

#### User Experience Goals

- Simple mobile-first design, especially for less tech-savvy members
- Clear visualization of chama contributions, penalties, and loans
- Role-based permissions to reduce conflicts and enhance trust
- Voting mechanisms for key decisions (loan approvals, member removals)
- Integration with mobile money and bank channels

---

#### Technical Specifications

- Flutter mobile app for cross-platform accessibility (Android + iOS)
- Firebase backend for real-time sync, authentication, and cloud storage
- Lightweight, secure, and offline-capable
- Role-based access control (chairperson, treasurer, secretary, member)
- Scalable backend structure using clean architecture principles

---

### Current Development Status

Daniel has set up the initial project in **GitHub Codespaces**, using GitHub Copilot and agent mode to accelerate the process. With reference to the `README.md`, they’ve implemented:

- A user onboarding flow (ID scan, selfie, KYC)
- Chama creation and invitation system
- Contribution tracking with automated reminders
- Voting system for approving loans and removing members
- Meeting scheduling and document uploads by the secretary
- Push notifications via Firebase Cloud Messaging

---

### Next Steps

With the core system bootstrapped, the team is now working on:

- Enabling goal-setting and progress tracking for individuals and groups
- Loan repayment tracking with reminders and ledger history
- Custom reporting features for transparency and auditability
- Gamifying the experience through badges and contribution streaks

Daniel is particularly excited about using GitHub Copilot agent mode to speed up repetitive code writing and ensure clean structure across both frontend and backend layers.

---

### Workshop Overview

In this workshop, you will:

- Set up a development environment using GitHub Codespaces
- Use GitHub Copilot to scaffold both backend and frontend components
- Build out features like chama creation, voting, contributions, and lending
- Learn best practices for cross-functional team development using GitHub tools

---

### Application Features

AssetAlign will include:

- Role-based user profiles (Chairperson, Treasurer, Secretary, Member)
- Chama creation, member invitations, and onboarding
- Contribution tracking, reminders, and reconciliation
- Group lending system with peer voting and repayment tracking
- Meeting scheduling and records management
- Group and personal goal setting with progress charts
- Notifications and alerts for decisions, deadlines, and events

---

### Technology Stack

- **Frontend**: Flutter (Dart)
- **Backend**: Firebase (Authentication, Firestore, Cloud Functions)
- **Storage**: Firebase Storage / Hive (for offline-first data sync)
- **Notifications**: Firebase Cloud Messaging
- **Dev Environment**: GitHub Codespaces with Copilot agent mode

---
