export interface IPropsUser {
    user: {
        id?: number;
        username?: string
        email: string;
        password: string;
        phone?: string;
    }
}