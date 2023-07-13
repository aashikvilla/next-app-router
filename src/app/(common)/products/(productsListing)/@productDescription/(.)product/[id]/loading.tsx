import CustomModal from "@/app/components/CustomModal";

export default async function Loading() {
  return <CustomModal isOpen={true} children={<h1>Loading ..</h1>} />;
}
