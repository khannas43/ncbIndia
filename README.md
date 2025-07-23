# NCB Data Collection & Analytics System

## Overview
This project delivers an integrated Data Collection and Analytics platform for the Narcotics Control Bureau, India. It provides a web-based portal for monthly narcotics data entry, advanced analytics, forecasting, and intelligence generation to support strategic decision making and operational efficiency.

## Key Features

### 1. Monthly Data Entry Portal
- Web-based interface compatible with Chrome, Firefox, Safari, Edge
- Responsive design for desktop, tablet, mobile (320px to 4K)
- English and Hindi Unicode support
- Role-based dashboards (State Officials, Regional Officers, NCB Staff)
- Standardized data entry forms with dynamic substance-based fields
- Multi-stage submission workflow with automated email notifications

### 2. Smart Data Suggestions
- Automated pre-fill of prior month data values
- Contextual suggestions based on historical patterns and similar cases
- Editable suggestions with change tracking and bulk edit capabilities
- Data pattern recognition and anomaly alerts

### 3. Multi-format Data Import
- Excel (.xlsx, .xls) upload with predefined templates and validation
- RESTful API integration supporting JSON and XML with rate limiting
- Manual entry interface with keyboard shortcuts and rapid data entry features
- Standardized import workflow (Upload → Validate → Preview → Confirm → Import)

### 4. Data Validation Engine
- Real-time front-end validation for format, range, and mandatory fields
- Backend validation for data integrity checks, cross-field rules, duplicate detection
- Configurable rules engine with rule testing and audit logs
- Data quality scoring, completeness checks, and multilingual error management

### 5. Analytics & Network Visualization System
- Advanced analytics with explainable AI and transparency controls
- Model documentation, performance metrics, and confidence intervals
- Complete data lineage tracking and bias mitigation strategies
- Graph analytics, geospatial visualization, and link analysis support

### 6. User Personas & Access Control
- Persona-based requirements for State Officials, State Managers, NCB Admin, Senior Management, Investigation Teams
- Role-based access matrix with hierarchical data boundaries
- Multi-factor authentication, AES-256 encryption, session management, audit trails
- Compliance with government IT security and data protection guidelines

### 7. Use Cases
1. Configurable Reminder System  
2. Data Collection Workflow  
3. Reminder Management Workflow  
4. Escalation Management  
5. Forecasting Engine  
6. Threshold-based Alerts  
7. Trend Analysis  
8. Comparative Analytics  
9. Drug Network Mapping  
10. Geospatial Analytics  
11. Link Analysis  
12. Case Investigation Dashboard  
13. Seasonal Demand Forecasting  
14. Resource Allocation Optimization  
15. Risk Assessment Modelling  

Each use case defines actor workflows, data models, processing logic, and actionable intelligence outputs to optimize operations and ensure timely compliance.

### 8. Reports & Dashboards
- Monthly State Performance Report  
- Drug Seizure Trends Report  
- Enforcement Efficiency Report  
- Cross-Border Intelligence Report  
- Executive Dashboard with custom KPIs  
- Investigation & Network Visualization Reports  

### 9. Historical Data Management
- Tiered data storage (Active, Archive, Deep Archive) with audit trails
- Advanced retrieval with filters (date, location, substance, case, officer)
- Bulk export (Excel, CSV, PDF) and data anonymization features
- Blockchain-based integrity verification and secure disposal

### 10. System Architecture and Operations
- Service-oriented, cloud-native design with auto-scaling
- 99.5% uptime SLA, 24x7 monitoring, proactive maintenance
- Real-time and batch processing support
- SMS delivery within 30 seconds, dashboard update within 5 seconds
- Performance: form load < 3 seconds, concurrent access up to 500 users

## Installation and Deployment
1. Prerequisites: Node.js v14+, Python 3.8+, PostgreSQL, Redis  
2. Clone repository and install dependencies:
   ```bash
   git clone <repo_url>
   cd ncb-data-analytics
   npm install
   pip install -r requirements.txt
   ```
3. Configure environment variables in `.env` (see `.env.example` for keys):
   ```bash
   cp .env.example .env
   # edit .env and provide values
   ```
4. Initialize database and run migrations:
   ```bash
   python manage.py migrate
   ```
5. Build and start services:
   ```bash
   npm run build
   npm start
   python manage.py runserver
   ```
6. Access portal at `https://<domain>/`

### Environment Variables
The application relies on the following variables in `.env`:

| Key | Description |
|-----|-------------|
| `VITE_AUTH_BASE_URL` | OAuth2 provider base URL |
| `VITE_AUTH_CLIENT_ID` | OAuth2 client ID |
| `VITE_AUTH_REDIRECT_URI` | Redirect URI registered with the provider |
| `VITE_AUTH_SCOPE` | Requested OAuth2 scopes |
| `VITE_API_URL` | Base URL for the backend API |

## Contributing
- Fork the repository and create feature branches  
- Adhere to code style and commit guidelines  
- Submit pull requests with detailed descriptions and tests  


