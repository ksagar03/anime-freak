import loading from "@/public/bars-scale.svg";
import Image from "next/image";

const LoadMore = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <Image
        src={loading}
        alt="loading"
        width={58}
        height={58}
        className="object-contain"
      />
    </section>
  );
};

export default LoadMore;
