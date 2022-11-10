import { useLoaderData } from "react-router-dom";

const ProductsDetail = () => {
  const productDetail = useLoaderData();
  const { ratings, title, price, img, dec, cat } = productDetail[0];
  console.log(productDetail, price);

  return (
    <div className="p-12">
      <section className=" grid grid-cols-1 lg:grid-cols-3  text-gray-900">
        <div>
          <img src={img} className="rounded-lg h-full lg:h-96 w-full" alt="" />
        </div>
        <div className="col-span-2 py-12 px-24 space-y-4">
          <h2 className="text-4xl font-bold ">{title}</h2>
          <h4 className="text-2xl text-red-600"> ${price}</h4>
          <p>{dec}</p>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default ProductsDetail;
