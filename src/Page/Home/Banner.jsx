import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Icon from "../../components/Icon/Icon";
const CheckAvailability = lazy(() =>
  import("../../components/CheckAvailability/CheckAvailability")
);

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        backgroundImage: "url('/src/assets/download.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="flex flex-col justify-center items-center container"
    >
      <div
        className={`mb-8 text-[#649dc1] transition-all duration-700 ease-out transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="md:text-5xl text-2xl font-semibold">
          Welcome to Hotel Al Farah
        </h1>
        <p className="flex justify-center md:text-base text-sm text-center mt-[2px]">
          <Icon name="location" />
          Maijdee, Noakhali
        </p>
      </div>

      <Suspense fallback={<Loader />}>
        <CheckAvailability />
      </Suspense>
    </div>
  );
};

export default Banner;
