import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8284/api/wallet";

class EmployeeService {

    getEmployees(){
        return axios.get("http://localhost:8284/api/wallet/list");
    }

    createEmployee(currency,id,name){
 //       alert(currency);
  return axios.post("http://localhost:8284/api/wallet/create", null, { params: { 
  id,  
  currency,
  name
  }})    
}

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()