/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
//import DepartmentsController from 'App/Controllers/Http/DepartmentsController'
//Route.get('controller', 'TestsController.index')
//Route.post('multiInsert', 'sController.multiInsertRows')


Route.post('insertDept','DepartmentsController.insertRow')
Route.patch('updateDept/:id', 'DepartmentsController.updateTable')
Route.get('selectAllDept', 'DepartmentsController.selectAllRows')
Route.get('selectByDeptId/:id', 'DepartmentsController.selectById')
Route.get('deleteDept/:id', 'DepartmentsController.deleteById')

Route.get('selectAllEmp', 'EmployeesController.selectAllRows')
Route.put('updateEmp/:id', 'EmployeesController.updateTable')
Route.get('selectByEmpId/:id', 'EmployeesController.selectById')
Route.post('insertEmp', 'EmployeesController.insertRow')
Route.get('deleteEmp/:id', 'EmployeesController.deleteById')

Route.get('join','DepartmentsController.joinTables')
Route.get('joinById/:id','DepartmentsController.joinTablesById')
Route.get('/searchAll/','DepartmentsController.searchAll')