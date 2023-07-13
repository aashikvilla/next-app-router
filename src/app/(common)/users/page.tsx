import { getUsers } from "@/app/apiService/ApiCalls";
import { User } from "@/app/types/User";

async function Users() {
  const users: User[] = await getUsers();
  console.log(users);
  return (
    <div>
      <h2>Users</h2>

      <ul>
        {users.map((user: any) => (
          <p key={user.id} className="text-black-500">
            {user.email}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Users;
