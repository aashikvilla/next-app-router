type Props = {
  name: String;
};

function ProductCategoryItem({ name }: Props) {
  return (
    <button
      //   onClick={onClick}
      className="bg-blue-200 hover:bg-blue-300 text-blue-700 rounded-md px-4 py-2"
    >
      {name}
    </button>
  );
}

export default ProductCategoryItem;
