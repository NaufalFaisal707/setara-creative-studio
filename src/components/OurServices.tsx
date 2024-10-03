// components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// icons
import { FaCube } from "react-icons/fa6";

export default function OurServices() {
  return (
    <div id="our-services" className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 space-y-9 pt-24">
          <h1 className="font-sans text-xl font-bold">Our Services</h1>

          <div className="text-center">
            <h3 className="text-lg font-semibold">
              We Provide The Best Services
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum fuga
              omnis nulla sapiente adipisci facilis enim quo unde ipsum
              consectetur asperiores ab, corrupti quaerat officia exercitationem
              odit natus excepturi accusantium?
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Card className="w-80">
              <CardHeader>
                <CardTitle>TTL</CardTitle>
                <CardDescription>2D animation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum veritatis natus dolore consequatur voluptates,
                  dignissimos mollitia alias pariatur nesciunt omnis deleniti
                  ratione, sequi tempora et vitae sint eum? Quisquam, rerum.
                </p>
              </CardContent>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <CardTitle>
                  <FaCube />
                </CardTitle>
                <CardDescription>3D animation</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis incidunt quisquam atque illo magnam repellendus
                  nesciunt itaque non facilis beatae architecto nihil minima at
                  enim, consectetur omnis, expedita dolores quo?
                </p>
              </CardContent>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <CardTitle>TTL</CardTitle>
                <CardDescription>Motion Graphic</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem recusandae non reprehenderit explicabo nobis quisquam
                  rem enim itaque, cupiditate modi, suscipit optio officiis.
                  Omnis, iure quod facere expedita nostrum odit!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
