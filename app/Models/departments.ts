import { DateTime } from 'luxon'
import employees from 'App/Models/employees'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Department extends BaseModel {
  // @hasMany(() => employees, {
  //   foreignKey: 'dept_id'
  // })
  //public Employee_model: HasMany<typeof employees>

  @column({ isPrimary: true })
  public id: number

  @column()
  public dept_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
