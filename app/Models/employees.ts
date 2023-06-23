import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Department from './departments'

export default class employees extends BaseModel {
  
 // public static table = 'employees'
 // public static connection = 'pg'
//  static get table () {
//   return 'employees'
// }
  @column({ isPrimary: true })
  public id: number

  @column()
  public emp_name: string

  @column()
  public dept_id: number

  @column()
  public salary: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // @belongsTo(() => Department, {
  //   localKey: 'dept_id'
  // })
  public employee_model: BelongsTo<typeof Department>
}
//module.exports = employees
