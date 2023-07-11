async function getData() {
  const res = await fetch("https://fakestoreapi.com/users");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  //console.log("data" , res.json());

  return res.json();
}

type Props = {};

async function Users({}: Props) {
  const users = await getData();
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
