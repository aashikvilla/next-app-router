async function getUsers() {
    
    const res = await fetch("https://fakestoreapi.com/users", {
      cache: "no-store",
    });
  
    if (!res.ok) {    
      throw new Error("Failed to fetch data");
    }
   
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return res.json();    
  }
type Props = {}

async function SlowUers({}: Props) {
    const users = await getUsers();
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
  )
}

export default SlowUers