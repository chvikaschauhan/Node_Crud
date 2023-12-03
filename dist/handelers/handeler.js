import controllers from "../controllers/controllers.js";
var handelers;
(function (handelers) {
    async function getAllEmp(req, res) {
        var result = await controllers.getAllEmp();
        res.status(200).send(result);
    }
    handelers.getAllEmp = getAllEmp;
    async function insertOneEmployee(req, res) {
        var obj = req.body;
        var result = await controllers.insertOneEmployee(obj.name, obj.age, obj.address, obj.salary);
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