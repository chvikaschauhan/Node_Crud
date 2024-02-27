import { Request, Response, json} from "express";
import controllers from "../controllers/controllers.js";
import emp from "../postgres/models/models.js";
import models from "../postgres/models/models.js";

namespace handelers {
    export async function getAllEmp(req: Request, res: Response) {
      var result = await controllers.getAllEmp()
  
      res.status(200).send(result)
      
   }
   export async function getOneEmp(req : Request,res : Response) {

    var emp_id = parseInt(req.params.id)
    console.log("Emp id in handelers", emp_id)
    var result = await controllers.getOneEmp(emp_id)
    console.log("result in hand", result)
    res.status(200).send(result)
    
   }
    export async function insertOneEmployee(req : Request, res: Response) {
      
       var obj : models.emp = req.body
      var result = await controllers.insertOneEmployee(obj.name,obj.age,obj.address,obj.salary)
      res.status(200).send(result) 
    }
    export async function updateOneEmpSalary(req:Request, res : Response) {
      
      var obj : models.salaryUpdate = req.body
      var result = await controllers.updateOneEmpSalary(obj.id,obj.salary)
      res.status(200).send(result)
    }
    export async function deleteOneEmp(req:Request, res : Response) {
      var obj : models.salaryUpdate = req.body
      var result = await controllers.deleteOneEmp(obj.id)
      res.status(200).send(result)
    }

}
 export default handelers

 

