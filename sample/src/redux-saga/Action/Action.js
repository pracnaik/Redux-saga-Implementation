import { get_User } from "./actionType";

export const User = (user) => ({
    type: 'USER_FETCH_REQUESTED',
    payload: user
}
);
