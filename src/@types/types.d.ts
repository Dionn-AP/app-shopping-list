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

interface Item {
    id?: number;
    name: string;
    quantity?: number;
    unit?: string;
    price?: number;
    status?: string;
}

export interface ListItem {
    id: number;
    name: string;
    createdAt: string;
    statusList: string;
    items: Item[]; // items é um array de Item
}

export interface DataList {
    name: string;
    items: Partial<Item[
        {
            name: string;
            quantity: number;
            unit: string;
            price: number;
            status: string;
        }
    ]>
}