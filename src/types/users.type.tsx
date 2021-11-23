export default interface IUsers {
    gender: string,
    dob: {
        age: number,
    }
    name: {
        first: string,
        last: string
    },
    location: {},
    email: string,
    picture: {
        large: string,
    },
    nat: string
}
