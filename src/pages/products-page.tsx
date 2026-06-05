import { useRef } from "react";
import { ProductTargetComponent } from "../components/product-target-component";
import { DialogProductComponent } from "../components/dialog-product-component";
import { FormProductsComponents } from "../components/form-products-component";

export const ProductsPage = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <section>
        <FormProductsComponents />
      </section>
      <section className="grid grid-cols-2 gap-10 p-3">
        <ProductTargetComponent dialog={dialogRef} />
      </section>
      <DialogProductComponent dialog={dialogRef} />
    </>
  );
};
