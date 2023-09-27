import Image from "next/image";
import React from "react";

export default function intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image src="/me.jpg" alt="Axel Olivecrona" width="192" height="192" />
        </div>
      </div>
    </section>
  );
}
