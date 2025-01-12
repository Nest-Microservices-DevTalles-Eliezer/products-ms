import { Type } from 'class-transformer'
import { IsNumber, IsPositive, IsString } from 'class-validator'

export class CreateProductDto {
  @IsString()
  public name: string

  @IsNumber({
    maxDecimalPlaces: 4,
  })
  @IsPositive()
  @Type(() => Number)
  public price: number
}
