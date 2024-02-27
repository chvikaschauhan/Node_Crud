import  Express  from "express";
import handelers from "../../handelers/handeler.js";
var router = Express.Router();

// Get all company employee
router.get("/getAllEmp", handelers.getAllEmp)
router.get("/getOneEmp/:id",handelers.getOneEmp)
router.post("/insertEmp", handelers.insertOneEmployee)
router.put("/updateSalary", handelers.updateOneEmpSalary)
router.delete("/deleteOneEmp",handelers.deleteOneEmp)

export default router
