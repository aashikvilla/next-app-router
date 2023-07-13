import { getDelayedUsers } from "../apiService/ApiCalls";

async function SlowUers() {
  const users = await getDelayedUsers();
  return (
    <div className="p-10">
      <div>Users</div>

      <ul>
        {users.map((user: any) => (
          <p key={user.id} className="text-blue-900">
            {user.email}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default SlowUers;
