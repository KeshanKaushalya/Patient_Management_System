# 🏥 Patient Management System (Microservices-Based)

A **Spring Boot Full Stack Web Application** built using the **Microservices architecture**, designed for managing patient records, billing, authentication, and analytics with high scalability and modularity.

## 📚 Overview

This project is structured into multiple microservices, each responsible for a specific domain of the healthcare system. It also includes API Gateway routing and gRPC communication for inter-service performance.

---

## 🧱 Microservices Architecture

### ✅ 1. **Patient Service**
- CRUD operations for patient information
- Stores medical records and personal data

### 💰 2. **Billing Service**
- Handles billing, invoices, and payment records
- Communicates via gRPC with other services

### 🔐 3. **Auth Service**
- Manages user authentication and roles
- JWT-based login and security

### 📊 4. **Analytics Service**
- Aggregates data across services
- Generates reports and statistics

### 🔀 5. **API Gateway**
- Central entry point for all services
- Performs routing, load balancing, and request filtering

### ⚡ 6. **gRPC Communication**
- gRPC used for high-performance communication between Billing Service and other services

---

## 🚀 Technologies Used

| Layer         | Tech Stack                              |
|---------------|------------------------------------------|
| Backend       | Java, Spring Boot, Spring Cloud, gRPC    |
| Security      | Spring Security, JWT                     |
| Communication | REST, gRPC                               |
| Gateway       | Spring Cloud Gateway                     |
| Data Storage  | MySQL / PostgreSQL / In-memory DB        |
| Build Tool    | Maven                                    |
| Version Control | Git + GitHub                           |
| Containerization | Docker *(Optional enhancement)*       |

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/pubudusanka/patient-management-system.git
cd patient-management-system
```
### 2. Configure Databases
- Update each microservice's application.yml or application.properties with your DB connection details.

### 3. Start the Services
- Each service is in a separate module. Use the following to start:
```bash
cd auth-service
./mvnw spring-boot:run
```
```bash
cd ../patient-service
./mvnw spring-boot:run
```
```bash
cd ../billing-service
./mvnw spring-boot:run
```
```bash
cd ../analytics-service
./mvnw spring-boot:run
```
```bash
cd ../api-gateway
./mvnw spring-boot:run
```
### 4. gRPC Configuration
- Make sure the gRPC server (billing-service) and client (dependent services) are configured with matching ports and protobuf contracts.

### 5. Authentication 🔐 
- JWT token-based authentication

- Role-based access: Admin / Doctor / Patient

- Login endpoint provided via Auth Service

### 6.API Endpoints 📬
| Microservice      | Endpoint Prefix  | Description               |
| ----------------- | ---------------- | ------------------------- |
| Patient Service   | `/api/patients`  | Patient CRUD operations   |
| Billing Service   | `/api/billing`   | Billing & invoices        |
| Auth Service      | `/api/auth`      | Login & registration      |
| Analytics Service | `/api/analytics` | Aggregated data & reports |

### 7. Future Enhancements 🧪
- Docker support for containerization 🐳
- Deployment on Kubernetes or cloud (AWS/GCP) 📦
- Monitoring with Spring Boot Admin / Prometheus 📈
- Notification service (email/SMS) 💬

### 8. Contributing 🤝
1. Fork this repo
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### 9. License 📄
- This project is licensed under the MIT License.
  
### 10. Contact 📬
For any inquiries or feedback, feel free to reach out:

- **GitHub**: [pubudusanka](https://github.com/pubudusanka)
- **Email**: pubudusanka79@gmail.com
