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