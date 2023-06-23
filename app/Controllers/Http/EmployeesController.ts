import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import employees from 'App/Models/employees'

export default class ModelsController {
    public async authen(){
        
    }
    public async selectAllRows(){
        const result = await employees.all()
        if(result.length == 0){
            return "No rows are selected"
        }else{
            return result
        }
    }

    public async selectById({ params }: HttpContextContract){
        const result = await employees.findBy('id', params.id)
        if(result == null){
            return "No rows are selected"
        }else{
            return result
        }
    }    
        

    public async updateTable({ request, params }: HttpContextContract){
        try{
            const newPostSchema = schema.create({
                emp_name: schema.string(),
                dept_id: schema.number(),
                salary: schema.number(),
            })
            const payload = await request.validate({ schema: newPostSchema })
            const result = await employees.findOrFail(params.id)
            result.emp_name = payload.emp_name
            result.dept_id = payload.dept_id
            result.salary = payload.salary 
            await result.save()
            return "Success!!"
        }catch(err){
            return "Not Updated!!"
        }
    }

    public async insertRow({ request }: HttpContextContract){
        try{
        const newPostSchema = schema.create({
                        emp_name: schema.string(),
                        dept_id: schema.number(),
                        salary: schema.number(),
                      })
        const payload = await request.validate({ schema: newPostSchema })
        
        const result = await employees.create({
            emp_name: payload.emp_name,
            dept_id: payload.dept_id,
            salary: payload.salary
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
            const result = await employees.findOrFail(params.id)
            await result.delete()
            return "Deleted Successfully!"
        }catch(err){
            return "Not Deleted Successfully!"
        }
    }
}
