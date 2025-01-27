  **Student Survey Application**

This application implements a **Student Survey System** leveraging **Angular**, **Node.js**, **Spring Boot**, and **MySQL** to enable comprehensive **CRUD (Create, Read, Update, Delete)** operations.

## **Features**

The application provides the following functionalities:

- **Homepage**: 
  - The homepage features three primary navigation links:
    - **Home**
    - **Student Survey Form**
    - **List All Surveys**

- **Student Survey Form**:
  - Users are redirected to a dedicated survey page where they can complete and submit the survey form.

- **List All Surveys**:
  - Displays all submitted surveys.
  - Allows users to update or delete specific survey entries.

This user-friendly interface ensures efficient management of survey data.

---

## **Technologies Used**

- **Frontend**:  
  - **Angular** for building the user interface.
  
- **Backend**:  
  - **Node.js** and **Spring Boot** for server-side logic.
  
- **Database**:  
  - **MySQL** for storing survey data.

---

## **Prerequisites**

To run this application, ensure the following tools are installed:

- **JDK** (version 17 or higher)
- **Angular CLI** (version 15 or higher)
- **Node.js** (version 18 or higher)
- **Spring Boot** (version 3.0 or above)

---

## **IDE Setup**

- **Eclipse IDE** (With Spring Tools Suite installed)
- **Visual Studio Code**
- **MySQL Server** or **Workbench**

---

## **Application Code Setup**

Follow these steps to set up the application:

### **1. Install Node.js**

- Download and install **Node.js** from the official website.
- Verify installation by running the following commands in the command line:
 
  npm -v
  node -v
  

### **2. Install Angular CLI**

- Install **Angular CLI** globally:

  npm install -g @angular/cli

- Verify its installation:
 
  ng version
  

### **3. Install JDK**

- Download and install **JDK** from the Oracle website.
- Verify installation:

  java -version
  

### **4. Install Spring Boot**

- Verify **Spring Boot** installation:

  spring --version
  

### **5. IDE Installation**

- Install **Eclipse IDE** and **Visual Studio Code**.

### **6. Angular Project Setup**

- In the command line, create a new Angular project:

  ng new project-name
  cd project-name
  
- Generate the necessary components:
 
  ng generate component homeComponent
  ng generate component surveyFormComponent
  ng generate component survey-listComponent
  

### **7. Spring Boot Setup**

- Create a **Spring Boot** project using **Spring Initializr** and select the following dependencies:
  - **Spring Web**
  - **Spring Data JPA**
  - **MySQL JDBC Driver**

- Download the generated project and extract it to your desired location.

- Import the extracted project into **Eclipse IDE** as a Maven project and finish the import.

### **8. Run Spring Boot Application**

- Right-click on the project in Eclipse and select:

  Run As > Spring Boot App
  

- Once the Spring Boot application is running, you can access the application at:

  http://localhost:8080
 

### **9. Run Angular Application**

- Navigate to the Angular project directory in the command line and run:
  
  ng serve
 

- Access the Angular application at:
 
  http://localhost:4200
  

### **10. Access the Full Application**

- Open a web browser and access both the **Spring Boot backend** and **Angular frontend** at the respective URLs to view and interact with the application.

---

## **Project Structure**

- **Frontend**:  
  - Angular components and views for handling survey form submission and display.
  
- **Backend**:  
  - Spring Boot REST controllers for managing survey data, including endpoints for CRUD operations.
  - MySQL database integration for survey data persistence.

---

