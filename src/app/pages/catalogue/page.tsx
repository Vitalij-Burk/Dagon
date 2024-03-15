import { homeWorksImg } from "@/app/components/constants";
import { IHomeWorksImgProps } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Catalogue = () => {
  return (
    <div className="catalogue">
      <h1 className="h1-bold mb-20">Каталог</h1>
      <ul className="catalogue-cards">
        {homeWorksImg().map((image: IHomeWorksImgProps) => {
          return (
            <Link href={image.route}>
              <li key={image.label} className="catalogue-card">
                <Image
                  src={image.imgURL}
                  alt="image"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />

                <p className="mt-4 h3-bold">{image.label}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Catalogue;
