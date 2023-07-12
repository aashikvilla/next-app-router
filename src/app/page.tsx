import { Suspense } from "react";
import LoadingUsers from "./(common)/users/loading";
import SlowUers from "./components/SlowUers";
import ProductCategories from "@/app/(common)/products/(productsListing)/@productCategories/page";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2> Streaming Data & usage of Suspence </h2>
      <p> We have 2 components Users and Products. Users will take time to load, should not impact other parts of UI</p>
      <div className="flex justify-items-center">
        <Suspense fallback={<LoadingUsers />}>
          {/* Will take longer time,should display LoadingUsers till users are loaded */}
          <SlowUers/>         
        </Suspense>
        <Suspense fallback={<div>Loading Products</div>}>
          {/* Should display products when loaded , should not wait till users are displayed  */}
         <ProductCategories />
        </Suspense>
      </div>
    </div>
  );
}
