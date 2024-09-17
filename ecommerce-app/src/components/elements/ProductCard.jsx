/* eslint-disable react/prop-types */
import ButtonLogin from "./ButtonPrimmary";

const ProductCard = ({ product }) => {
  return (
    <div className="card glass w-[410px] shadow-md">
      <figure>
        <img src={"https://placehold.co/420x200"} alt={product.name} />
      </figure>
      <div className="flex flex-col gap-1 p-4">
        <div className="flex justify-between">
          <h2 className="card-title">{product.name}</h2>
          <p className="text-green-600">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(product.price)}
          </p>
        </div>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <div className="card-actions justify-end mt-2">
          <ButtonLogin text={"Add to cart"} />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
