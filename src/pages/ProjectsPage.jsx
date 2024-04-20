import React from 'react'
import Project from '../components/Project'
import mental_health_project from "../assets/projects/mental_health.png";
import shopify_project from "../assets/projects/shopify.png";
import employee_management_project from "../assets/projects/employee_management.png";
import Particle from '../components/Particle';

const ProjectsPage = () => {
  return (
    <>
    <Particle />
    <div className='mx-5 sm:flex sm:gap-10 sm:mt-10 sm:justify-center'>
        <Project title="Mental Health Consulting Project" desc="It is a Consulting Web App for teenagers struggling with mental health issues." image={mental_health_project} link="https://mental-health-therapy.netlify.app/" />

        <Project title="Shopify" desc="an ecommerce website for clothes of men and women." image={shopify_project} link="https://github.com/mohtashim21/shopify" />

        <Project title="Employee Managenent System" desc="an Employee Management system which can store read write info of emoloyees." image={employee_management_project} link="https://employee-management-react-redux.netlify.app/" />
    </div>
    </>
  )
}

export default ProjectsPage