import React from "react";
import { MaterialCard } from "../constants";
import { IMaterialsProps } from "@/app/types";
import Image from "next/image";

const Materials = () => {
  return (
    <div className="materials">
      <h2 className="h2-bold">Мы используем только качественные материалы:</h2>
      <ul className="material-cards">
        {MaterialCard().map((card: IMaterialsProps) => {
          return (
            <li key={card.label} className="material-card">
              <Image
                src={card.imgURL}
                alt="material"
                width={250}
                height={200}
                className=" rounded-lg ml-1"
              />
              <p className="body-bold mt-2">{card.label}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Materials;
