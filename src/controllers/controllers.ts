import client from "../postgres/db.js";
import models from "../postgres/models/models.js"

namespace controllers{
   export async function getAllEmp(): Promise<models.emp[]> {
        var result = await client.query('select * from company')
        return result.rows
    }

    export async function insertOneEmployee(name : string, age: number, address : string, salary: number) {

        try {
            var result = await client.query('insert into company(name, age, address, salary) values($1,$2,$3,$4)', [name,age,address,salary] )
            return result
        } catch (error) {
            console.log(error)
        }
        
    }
    export async function updateOneEmpSalary(id :number, value : number) {
       try {
           var res = await client.query('update company set salary = $1 where id = $2', [value, id])
           return res
       } catch (error) {
         console.log(error)
       }
    }
    export async function deleteOneEmp(id : number) {
        try {
            var res = await client.query('delete from company where id = $1', [id])
            return res
        } catch (error) {
            console.log(error)
        }
        
    }
}
 export default controllers



