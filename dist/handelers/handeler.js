import controllers from "../controllers/controllers.js";
var handelers;
(function (handelers) {
    async function getAllEmp(req, res) {
        var result = await controllers.getAllEmp();
        res.status(200).send(result);
    }
    handelers.getAllEmp = getAllEmp;
    async function getOneEmp(req, res) {
        var emp_id = parseInt(req.params.id);
        console.log("Emp id in handelers", emp_id);
        var result = await controllers.getOneEmp(emp_id);
        console.log("result in hand", result);
        res.status(200).send(result);
    }
    handelers.getOneEmp = getOneEmp;
    async function insertOneEmployee(req, res) {
        var obj = req.body;
        try {
            var result = await controllers.insertOneEmployee(obj.name, obj.age, obj.address, obj.salary);
        }
        catch (error) {
            res.status(500).send(error);
        }
        res.status(200).send(result);
    }
    handelers.insertOneEmployee = insertOneEmployee;
    async function updateOneEmpSalary(req, res) {
        var obj = req.body;
        var result = await controllers.updateOneEmpSalary(obj.id, obj.salary);
        res.status(200).send(result);
    }
    handelers.updateOneEmpSalary = updateOneEmpSalary;
    async function deleteOneEmp(req, res) {
        var obj = req.body;
        var result = await controllers.deleteOneEmp(obj.id);
        res.status(200).send(result);
    }
    handelers.deleteOneEmp = deleteOneEmp;
})(handelers || (handelers = {}));
export default handelers;
//# sourceMappingURL=handeler.js.map