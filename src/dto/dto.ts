import { IsNotEmpty, IsString } from "class-validator";


export class signUpDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    password : string
    @IsString()
    role:string
}

export class signInDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    password : string
}
