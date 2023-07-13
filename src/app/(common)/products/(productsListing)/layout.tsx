type Props = {
  children: React.ReactNode;
  productList: React.ReactNode;
  productCategories: React.ReactNode;
  productDescription: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <>
      {props.children}
      {props.productCategories}
      {props.productList}
      {props.productDescription}
    </>
  );
}
