import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import departments from 'App/Models/departments'
import employees from 'App/Models/employees'

export default class TestsController {
    
    public async selectAllRows(){
        const result = await departments.all()
        if(result.length == 0){
            return "No rows are selected"
        }else{
            return result
        }
    }

    public async selectById({ params }: HttpContextContract){
        const result = await departments.findBy('id', params.id)
        if(result == null){
            return "No rows are selected"
        }else{
            return result
        }
    }    
        

    public async updateTable({ request, params }: HttpContextContract){
        try{
            const newPostSchema = schema.create({
                dept_name: schema.string(),
            })
            const payload = await request.validate({ schema: newPostSchema })
            const result = await departments.findOrFail(params.id)
            result.dept_name = payload.dept_name
            await result.save()
            return "Success!!"
        }catch(err){
            return "Not Updated!!"
        }
    }

    public async insertRow({ request }: HttpContextContract){
        try{
        const newPostSchema = schema.create({
                        dept_name: schema.string(),
                      })
        const payload = await request.validate({ schema: newPostSchema })
        
        const result = await departments.create({
            dept_name: payload.dept_name,
          })
          
        if(result.$isPersisted){
            return "Inserted Successfully"
        }else{
            return "Unsuccessful Insertion"
        }}
        catch(err){
            console.log(err)
        }
        

    }

    public async deleteById({ params }: HttpContextContract){      
        try{
            const result = await departments.findOrFail(params.id)
            await result.delete()
            return "Deleted Successfully!"
        }catch(err){
            return "Not Deleted Successfully!"
        }
    }

    public async joinTables(){
       const Database = employees.query()
        .join('departments', 'employees.dept_id', '=', 'departments.id')
        const result = (await Database).map((obj) =>
        {
            return{
                id: obj.$attributes.id,
                emp_name: obj.$attributes.emp_name,
                salary: obj.$attributes.salary,
                dept_id: obj.$attributes.dept_id,
                dept_name: obj.$extras.dept_name
            }
        })


        
        return result

    }
}
