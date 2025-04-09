# AssetAlign Mobile App

AssetAlign is a transformative financial management platform designed to revolutionize how Kenyans manage their chamas (group savings). By combining traditional financial practices with modern technology, AssetAlign creates a seamless, comprehensive ecosystem for chama operations. The mobile app offers a suite of tools for financial transparency, governance, and growth, helping users manage their chamas digitally.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screens](#screens)
- [Technologies](#technologies)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

AssetAlign allows users to:

- Digitally manage chamas with real-time record-keeping.
- Track savings, set financial goals, and achieve them.
- Manage group loans and financial distributions.
- Vote on group decisions (e.g., approving loans, removing members).
- Set and track meeting schedules, and manage group records.

The app is built using **Flutter**, enabling cross-platform mobile development, with future plans for a web app.

---

## Features

### 1. **Chama Management**
- Create, join, and manage chamas digitally.
- View real-time balances, contributions, fees, and penalties.
- Transparent financial records and automated reconciliation.

### 2. **Financial Tracking & Goal Setting**
- Set and track individual and group savings goals.
- Monitor contributions and group performance.

### 3. **Chama Lending**
- Apply for and manage loans within the chama.
- Vote on loan approvals and repayment schedules.
- Manage loans and repayments digitally.

### 4. **Group Governance & Voting**
- Members can vote to approve loans and remove members.
- Role-based permissions for different officials (e.g., Chairman, Secretary).

### 5. **Meeting & Participation**
- Schedule and track meetings digitally.
- Real-time document collaboration during meetings.
- Virtual meeting support with mobile check-in.

---

## Screens

Here’s an overview of the screens that the app will have:

### 1. **Onboarding Screen**
   - **Purpose**: To guide users through the initial setup of the app.
   - **Features**:
     - Welcome message
     - Option to log in or create a new account
     - Simple user-friendly flow to explain the app’s main features

### 2. **Login/Signup Screen**
   - **Purpose**: To authenticate and onboard users.
   - **Features**:
     - Email/phone number sign-up or login
     - Social media logins (optional)
     - Account creation with personal details, phone number, ID scan, and selfie
     - Forgot password option

### 3. **Home Screen**
   - **Purpose**: The central dashboard of the app.
   - **Features**:
     - Overview of all active chamas and user roles
     - Current balance and savings summary
     - Access to group actions (e.g., create a chama, view group details)

### 4. **Create Chama Screen**
   - **Purpose**: Allows users to create a new chama.
   - **Features**:
     - Form to input group name, goals, and description
     - Ability to define contribution schedules and other group settings
     - Invite members via contacts

### 5. **Chama Details Screen**
   - **Purpose**: To view and manage specific chama details.
   - **Features**:
     - Group balance and recent contributions
     - List of members and their contribution history
     - Group rules, goals, and progress tracking
     - Notifications for upcoming meetings or votes

### 6. **Contributions Screen**
   - **Purpose**: Track contributions and set goals for the group.
   - **Features**:
     - Detailed tracking of individual and group contributions
     - Goal progress for savings, loans, and other financial targets
     - Option to set up contribution reminders
     - View penalties and fees for missed contributions

### 7. **Loans Screen**
   - **Purpose**: To apply for and manage loans within the chama.
   - **Features**:
     - View loan requests and status (pending, approved, paid)
     - Apply for loans with custom repayment plans
     - Vote on loan requests
     - Loan payment schedules and repayment tracking

### 8. **Voting Screen**
   - **Purpose**: To handle voting on important group decisions.
   - **Features**:
     - Vote on loan approvals, member removals, and other important decisions
     - View vote results and track voting history
     - Option for anonymous voting

### 9. **Meeting Management Screen**
   - **Purpose**: Schedule, view, and track meetings.
   - **Features**:
     - Set up meeting dates, locations, and agendas
     - View meeting notes and decisions
     - RSVP for meetings and check-in via mobile app
     - Track attendance and generate meeting minutes

### 10. **Group Management Screen**
   - **Purpose**: To manage the membership of a chama.
   - **Features**:
     - Add/remove members from the group
     - View member details and their contribution history
     - Option for members to vote to remove others
     - Define roles (e.g., Secretary, Chairperson) and permissions

### 11. **Notifications Screen**
   - **Purpose**: To keep users informed of updates within the chama.
   - **Features**:
     - Push notifications for upcoming meetings, contributions, loans, and votes
     - Alerts for new member requests or group changes

### 12. **Settings Screen**
   - **Purpose**: To manage app settings and personal preferences.
   - **Features**:
     - Account settings (email, phone number, password)
     - Push notification preferences
     - Language and theme customization (light/dark mode)

---

## Technologies

The **AssetAlign mobile app** is developed using the following technologies:

### 1. **Flutter**
   - **Why**: Flutter is a cross-platform development framework, allowing us to build a native app for both **iOS** and **Android** from a single codebase. It ensures excellent performance and a consistent experience across platforms.
   - **Use**: Core framework for building the UI, managing app logic, and handling interactions across both mobile platforms.

### 2. **Dart**
   - **Why**: Dart is the programming language used in Flutter. It’s optimized for client-side development, making it ideal for mobile applications.
   - **Use**: Writing the logic for the app, handling state management, and building the entire app structure.

### 3. **Firebase**
   - **Why**: Firebase provides real-time database, authentication, and other backend services. It ensures that user data and group information are securely stored and synced across devices in real-time.
   - **Use**: User authentication, real-time data syncing, notifications, cloud storage for file uploads (e.g., ID scans), and other backend functionality.

### 4. **SQLite / Hive (Local Database)**
   - **Why**: SQLite and Hive provide local data storage solutions that ensure offline capabilities for the app.
   - **Use**: Storing app data locally for quick access, even when the device is offline. This includes saving user preferences, group settings, and offline transaction history.

### 5. **Cloud Functions (Optional)**
   - **Why**: Cloud functions are used to handle backend logic, such as loan approval processes, notifications, and user role management.
   - **Use**: Automating processes like loan approvals and reminders, sending notifications, and performing administrative tasks.

### 6. **Push Notifications (Firebase Cloud Messaging)**
   - **Why**: To notify users of important updates, upcoming meetings, loan approvals, or group votes.
   - **Use**: Firebase Cloud Messaging is used to send push notifications to mobile devices.

### 7. **GitHub Actions (CI/CD)**
   - **Why**: GitHub Actions automates the process of building, testing, and deploying the app.
   - **Use**: Continuous Integration and Continuous Deployment (CI/CD) pipelines to ensure a smooth and automated development and deployment process.
