import { IsNotEmpty } from 'class-validator';

export class DevotrixDTO {
    @IsNotEmpty()
    first: number;
  
    @IsNotEmpty()
    second : number;
  
  }