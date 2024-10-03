// components
import { Button } from "@/components/ui/button";

// icons
import { FaArrowRight } from "react-icons/fa6";

export default function BrandHero() {
  return (
    <div className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 grid min-h-[32rem] grid-cols-1 md:grid-cols-6">
          {/* brand name */}
          <div className="col-span-4 my-auto grid gap-4 lg:col-span-3">
            <h1 className="font-sans text-4xl font-extrabold">
              Setara Creative Studios
            </h1>
            {/* <h1 className="text-4xl font-sans font-extrabold flex gap-2 items-center bg-clip-text text-transparent bg-gradient-to-r from-[#f1563eff] to-[#f99f34ff]">
              Setara Creative Studios
            </h1> */}
            <p>
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

          {/* brand graphic */}
          <div className="relative col-span-2 grid place-items-center lg:col-span-3">
            <span className="absolute left-0 top-0 h-[32rem] w-svw origin-top-left -rotate-[23deg] rounded-bl-[100px] bg-[#B0EDED]"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
