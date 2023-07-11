async function getData() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

type Props = {};

export default async function Products({}: Props) {
  const data:String[] = await getData();
  console.log(data);
  return (
    <div>
      <h2>Products</h2>
      { data.length >0 &&
        data.map((c,ind)=>{
          return <p key={ind}>{c}</p>
        })
      }
    </div>
  );
}
