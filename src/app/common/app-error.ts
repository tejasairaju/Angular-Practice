export class AppError{
    constructor(public d?:any){}
}

export class NotFoundError extends AppError
{

}

export class BadRequestError extends AppError
{

}