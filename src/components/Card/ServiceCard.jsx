import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ServiceCard({ service }) {
  const { _id, img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <Image
          src={img}
          alt="Shoes"
          width={500}
          height={100}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price : ${price}</p>
        <div className="card-actions  justify-end">
          <Link href={`/bookService/${_id}`}>
            <button className="btn btn-error text-3xl">
              <IoIosArrowRoundForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
