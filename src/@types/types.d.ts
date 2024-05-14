export interface IPropsUser {
    token: string;
    user: {
        id?: number;
        username?: string
        email: string;
        password: string;
        phone?: string;
        tutorial: boolean;
    }
}

export interface IPropsRegisterUser {
    username?: string;
    email: string;
    password: string;
    confirmPass: string;
    phone?: string;
} 