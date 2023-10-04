export class RegisterModel{

    UserName:string;
    Email:string;
    PasswordHash:string;

    constructor(){}
}
export class LoginModel{
    UserName:string;
    PasswordHash:string;
    RememberMe:boolean = false;
}