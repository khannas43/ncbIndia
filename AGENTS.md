# Codex Agents Configuration

This document codifies a suite of specialized AI agents to accelerate development of the NCB Data Collection & Analytics System frontend. Each agent is scoped to a key domain, leveraging the project context and technology stack to ensure scalable, maintainable, and high-quality deliverables.

**Tech Stack**:
- **Framework**: Vite + React  
- **Language**: TypeScript  
- **State Management**: Redux Toolkit (with RTK Query)  
- **Routing**: React Router v6+  
- **UI Kit**: Material UI (MUI)  
- **Data Visualization**: D3.js for custom charts; react-leaflet for GIS dashboards  
- **Form Management**: React Hook Form  
- **Authentication**: OAuth2  

---

## Agents

### 1. FrontendAppAgent
**Scope**: Bootstrap and orchestrate the global application  
**Responsibilities**:
- Initialize Vite React+TS project with optimal configuration  
- Establish directory structure (components, features, services, assets)  
- Configure TypeScript path aliases, ESlint, Prettier, and Husky pre-commit hooks  
- Integrate Material UI theme provider and baseline styling  
- Implement global context providers (Redux store, Auth context)  
- Set up core entry point (`src/main.tsx`) and root component  

### 2. StateManagementAgent
**Scope**: Define and manage application state  
**Responsibilities**:
- Configure Redux Toolkit store with modular slice architecture  
- Implement RTK Query API services for all backend endpoints (data ingestion, analytics, reports)  
- Create reusable entity adapter patterns for normalized state  
- Provide typed hooks (`useAppDispatch`, `useAppSelector`)  
- Embed middleware for logging, caching, and error handling  

### 3. RoutingAgent
**Scope**: Architect and implement client-side routing  
**Responsibilities**:
- Define a declarative route tree using React Router v6+  
- Implement code-splitting and lazy loading for feature modules  
- Enforce role-based access control on routes via OAuth2 guard components  
- Provide fallback UI (skeleton loaders, error boundaries) for route transitions  

### 4. UIComponentAgent
**Scope**: Develop a cohesive UI component library  
**Responsibilities**:
- Create reusable Material UI components (buttons, dialogs, tables, form fields)  
- Enforce design tokens and theme overrides for consistency  
- Document component API with PropTypes and JSDoc  
- Optimize components for accessibility (ARIA attributes, keyboard navigation)  

### 5. DataVisualizationAgent
**Scope**: Build interactive analytics and GIS visualizations  
**Responsibilities**:
- Implement D3.js modules for line, bar, pie, heatmap, and network graphs  
- Develop react-leaflet map components with choropleth layers and clustering  
- Abstract data transformation utilities for chart ingestion  
- Incorporate responsive and performant rendering strategies  

### 6. FormAgent
**Scope**: Handle complex form workflows and validation  
**Responsibilities**:
- Leverage React Hook Form for controlled and uncontrolled form patterns  
- Integrate Yup or Zod schemas for declarative validation  
- Support dynamic field arrays, conditional rendering, and bulk-edit views  
- Provide seamless UX with context-aware error messages and focus management  

### 7. AuthAgent
**Scope**: Secure application via OAuth2  
**Responsibilities**:
- Implement OAuth2 authorization code flow with PKCE  
- Manage token lifecycle (storage, refresh, revocation)  
- Expose Auth context and hooks (`useAuth`, `withAuthGuard`)  
- Align session management with backend security policies  

### 8. APIIntegrationAgent
**Scope**: Standardize backend communication  
**Responsibilities**:
- Define RESTful endpoints in RTK Query services with auto-generated hooks  
- Implement global error interceptor and retry logic  
- Enforce rate limits and exponential backoff strategies  
- Serialize/deserialize payloads according to API contracts  

---

## Usage Guidelines

- Prefix prompts with `[@AgentName]` to engage the relevant Codex agent.  
- Maintain concise, actionable directives: e.g.,  
  ```
  [@DataVisualizationAgent]
  Create a D3.js line chart component to display monthly narcotics seizure trends, using MUI for tooltips.
  ```  
- Leverage this modular agent architecture to ensure synergy, reduce scope creep, and optimize delivery velocity.  
