
export type User = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
    login: Login;
    address: Address;
    phone: string;
    website: string;
    company: Company;
};

type Login = {
    uuid: string;
    username: string;
    password: string;
    md5: string;
    sha1: string;
    registered: string;
};

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};

type Geo = {
    lat: string;
    lng: string;
};

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
};

type UsersProps = {
    users: User[];
}

export default function Users({ users }: UsersProps) {

    return (
        <div id="users">
            <h1>Users-Data-Fetching</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <h2>{user.firstname} {user.lastname}</h2>
                        <p>{user.company.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}
