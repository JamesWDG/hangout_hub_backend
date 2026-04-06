export type CreateUserBody = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
};

export type LoginUserBody = {
    email: string;
    password: string;
};