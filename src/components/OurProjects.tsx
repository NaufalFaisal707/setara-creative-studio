// components
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// icons
import { FaCube } from "react-icons/fa6";

export default function OurProjetcs() {
  return (
    <div id="our-projects" className="overflow-hidden">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 space-y-4 pt-24">
          <h1 className="font-sans text-xl font-bold">Our Projetcs</h1>

          <Tabs defaultValue="all" className="space-y-9">
            <div className="grid place-content-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="2d_animation">2D Animation</TabsTrigger>
                <TabsTrigger value="3d_animation">3D Animation</TabsTrigger>
                <TabsTrigger value="motion_graphic">Motion Graphic</TabsTrigger>
              </TabsList>
            </div>

            {/* all */}
            <TabsContent value="all">
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
                      dignissimos mollitia alias pariatur nesciunt omnis
                      deleniti ratione, sequi tempora et vitae sint eum?
                      Quisquam, rerum.
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
                      Perspiciatis incidunt quisquam atque illo magnam
                      repellendus nesciunt itaque non facilis beatae architecto
                      nihil minima at enim, consectetur omnis, expedita dolores
                      quo?
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
                      Dolorem recusandae non reprehenderit explicabo nobis
                      quisquam rem enim itaque, cupiditate modi, suscipit optio
                      officiis. Omnis, iure quod facere expedita nostrum odit!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 2d animation */}
            <TabsContent value="2d_animation">
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
                      dignissimos mollitia alias pariatur nesciunt omnis
                      deleniti ratione, sequi tempora et vitae sint eum?
                      Quisquam, rerum.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 3d animation */}
            <TabsContent value="3d_animation">
              <div className="flex justify-center gap-4">
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
                      Perspiciatis incidunt quisquam atque illo magnam
                      repellendus nesciunt itaque non facilis beatae architecto
                      nihil minima at enim, consectetur omnis, expedita dolores
                      quo?
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* motion graphic */}
            <TabsContent value="motion_graphic">
              <div className="flex justify-center gap-4">
                <Card className="w-80">
                  <CardHeader>
                    <CardTitle>TTL</CardTitle>
                    <CardDescription>Motion Graphic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem recusandae non reprehenderit explicabo nobis
                      quisquam rem enim itaque, cupiditate modi, suscipit optio
                      officiis. Omnis, iure quod facere expedita nostrum odit!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
