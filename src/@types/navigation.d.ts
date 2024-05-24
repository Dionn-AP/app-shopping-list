import { ListItem } from "./types";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            start: undefined,
            login: string | undefined;
            getstarted: undefined;
            signup: undefined;
            forgot: undefined;
            home: undefined;
            mylists: undefined;
            newlist: undefined;
            successfull: undefined;
            userinfo: undefined;
            listoppened: { itemsList: ListItem };
            listfinished: { itemsList: ListItem };
        }
    }
}