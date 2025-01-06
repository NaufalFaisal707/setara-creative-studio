import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowUpRight, Globe, Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

export const meta: MetaFunction = () => {
  return [
    { title: "Setara Creative Studio" },
    {
      name: "description",
      content: "Selamat Datang Di Web Setara Creative Studio!",
    },
  ];
};

const LinkComponents = ({
  variant,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}) => (
  <>
    <Button variant={variant} asChild>
      <Link to="#">Services</Link>
    </Button>
    <Button variant={variant} asChild>
      <Link to="#">About Us</Link>
    </Button>
    <Button variant={variant} asChild>
      <Link to="#">Portfolio</Link>
    </Button>
  </>
);

const LanguageOptionsComponents = () => (
  <Select defaultValue="en">
    <SelectTrigger className="space-x-2">
      <Globe className="size-4 text-neutral-600" />
      <SelectValue placeholder="Select Languange" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">Engish</SelectItem>
      <SelectItem value="id">Indonesia</SelectItem>
    </SelectContent>
  </Select>
);

export default function Index() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#00A8A8] bg-opacity-[30%]">
        <div className="mx-auto flex max-w-screen-2xl justify-between p-4">
          <img
            className="block sm:hidden"
            src="/logo_setara.svg"
            width={24}
            alt="Logo Setara"
          />
          <img
            className="hidden sm:block"
            src="/logo_setara_&_text.svg"
            width={94}
            alt="Logo Setara"
          />

          <div className="hidden *:font-semibold lg:block">
            <LinkComponents variant="ghost" />
          </div>

          <div className="hidden w-fit space-x-2 lg:block">
            <LanguageOptionsComponents />
          </div>

          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="space-y-4">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription />
                </SheetHeader>

                <div className="grid gap-y-2">
                  <LinkComponents variant="outline" />
                </div>

                <SheetFooter>
                  <LanguageOptionsComponents />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* BIG HERO */}
      <section className="h-[34rem] bg-[#00A8A8] bg-opacity-[30%]">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-8 p-4 text-center">
          <h1 className="text-5xl font-semibold">
            Create simple videos with animation to enhance the effectiveness and
            conversion of your services or goods.
          </h1>

          <h3 className="text-2xl">
            Making your products and services look great with simple animations
            to attract more clients.
          </h3>

          <Button size="lg">Contact Us</Button>
        </div>
      </section>

      <section className="bg-[#FDDFBB]">
        <div className="mx-auto flex max-w-screen-xl justify-evenly p-4 *:text-xl *:font-semibold">
          <h1>Universitas Indonesia</h1>
          <h1>4W</h1>
          <h1>PT Chrorine</h1>
          <h1>PT Yumi</h1>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-screen-xl justify-evenly p-4 *:text-xl *:font-semibold">
          <h1>100+ Followers</h1>
          <h1>10 Partners</h1>
          <h1>10+ Projetcs</h1>
        </div>
      </section>

      {/* Services */}
      <section className="mt-24">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 rounded-3xl border-2 border-black p-8">
          <h1 className="text-2xl font-semibold">Our Services</h1>

          <div className="grid grid-cols-3 gap-8 *:rounded-2xl *:border-2 *:border-black">
            {/* 2d animation card */}
            <div className="flex flex-col gap-4 p-4">
              <div className="flex">
                <h1 className="grow text-xl font-semibold">2D Animation</h1>
                <Button>
                  <ArrowUpRight className="min-w-fit" />
                </Button>
              </div>
              <p>
                Pizza ipsum dolor meat lovers buffalo. Style anchovies broccoli
                peppers pesto stuffed ranch steak stuffed. Chicken NY personal
                personal ipsum spinach.
              </p>
              <img
                src="2d-animation.jpg"
                alt="2d animation"
                className="overflow-hidden rounded-xl"
              />
            </div>

            {/* 3d animation card */}
            <div className="flex flex-col gap-4 p-4">
              <div className="flex">
                <h1 className="grow text-xl font-semibold">3D Animation</h1>
                <Button>
                  <ArrowUpRight className="min-w-fit" />
                </Button>
              </div>
              <p>
                Pizza ipsum dolor meat lovers buffalo. Style anchovies broccoli
                peppers pesto stuffed ranch steak stuffed. Chicken NY personal
                personal ipsum spinach.
              </p>
              <img
                src="3d-animation.jpg"
                alt="3d animation"
                className="overflow-hidden rounded-xl"
              />
            </div>

            {/* motion graphic */}
            <div className="flex flex-col gap-4 p-4">
              <div className="flex">
                <h1 className="grow text-xl font-semibold">Motion Graphic</h1>
                <Button>
                  <ArrowUpRight className="min-w-fit" />
                </Button>
              </div>
              <p>
                Pizza ipsum dolor meat lovers buffalo. Style anchovies broccoli
                peppers pesto stuffed ranch steak stuffed. Chicken NY personal
                personal ipsum spinach.
              </p>
              <img
                src="motion-graphic.jpg"
                alt="motion graphic"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
