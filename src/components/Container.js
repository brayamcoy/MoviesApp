import React from "react";
import Cards from "./Cards";

export default function Container({ data, results, search }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
      <Cards movies={search ? results : data} />
    </div>
  );
}
