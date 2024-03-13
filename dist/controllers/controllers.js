import client from "../postgres/db.js";
var controllers;
(function (controllers) {
    async function getAllEmp() {
        var result = await client.query('select * from company');
        return result.rows;
    }
    controllers.getAllEmp = getAllEmp;
    async function getOneEmp(emp_id) {
        console.log("Emp id in controller", emp_id);
        var result = await client.query('select * from company where id = $1', [emp_id]);
        console.log("result in controller", result.rows);
        return result.rows;
    }
    controllers.getOneEmp = getOneEmp;
    async function insertOneEmployee(name, age, address, salary) {
        try {
            var result = await client.query('insert into company(name, age, address, salary) values($1,$2,$3,$4)', [name, age, address, salary]);
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    controllers.insertOneEmployee = insertOneEmployee;
    async function updateOneEmpSalary(id, value) {
        try {
            var res = await client.query('update company set salary = $1 where id = $2', [value, id]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    controllers.updateOneEmpSalary = updateOneEmpSalary;
    async function deleteOneEmp(id) {
        try {
            var res = await client.query('delete from company where id = $1', [id]);
            return res;
        }
        catch (error) {
            console.log(error);
        }
    }
    controllers.deleteOneEmp = deleteOneEmp;
})(controllers || (controllers = {}));
export default controllers;
//# sourceMappingURL=controllers.js.map