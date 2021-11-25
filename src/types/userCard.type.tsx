import IUsers from "./users.type";

export default interface IUserCard {
    user: IUsers,
    getUser: () => void,
}
