import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

export default function BrandHero() {
  return (
    <div className="mx-4 h-[32rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 h-full">
        <div className="grid my-auto gap-4 ">
          <h1 className="text-4xl font-sans font-extrabold">
            Setara Creative Studios
          </h1>
          {/* <h1 className="text-4xl font-sans font-extrabold flex gap-2 items-center bg-clip-text text-transparent bg-gradient-to-r from-[#f1563eff] to-[#f99f34ff]">
            Setara Creative Studios
          </h1> */}
          <p className="font-semibold">
            Bring ideas to life in 2D/3D synergistically to create a maximum
            visual experience for your brand.
          </p>
          <div>
            <Button variant="outline">
              Let's Explore!
              <FaArrowRight className="ms-2" />
            </Button>
          </div>
        </div>
        <div className="grid place-items-center">
          <div>motion graphic here!</div>
        </div>
      </div>
    </div>
  );
}
