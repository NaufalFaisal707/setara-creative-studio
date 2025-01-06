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

      <section className="mt-24">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
          <h1 className="text-center text-4xl font-semibold">
            Make your story ideas come to life with animated videos
          </h1>
          <h3 className="text-center text-2xl">
            with us get more profits for your business
          </h3>

          <div className="grid grid-cols-2">
            <img
              src="/story-ideas.jpg"
              alt="story ideas"
              className="my-auto overflow-hidden rounded-3xl"
            />
            <div className="flex flex-col gap-4 text-start">
              <h1 className="text-xl font-semibold">01 Marketing</h1>
              <p>
                Improve your audience engagement, Increases brand awareness,
                Boosts sales conversions, Simplifies product/service
                understanding, Enhances website traffic, Builds customer trust.
              </p>

              <h1 className="text-xl font-semibold">02 Communication</h1>
              <p>
                Strengthen your business brand awareness, Simplifies complex
                concepts, Enhances product/service understanding, Reduces
                customer doubts, Improves communication effectiveness. Clearly
                conveys messages.
              </p>

              <h1 className="text-xl font-semibold">03 Production</h1>
              <p>
                High-quality, unique, and distinctive animation video production
                based on your brand identity.
              </p>

              <Button className="w-fit" size="lg">
                Try Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Setara Works */}
      <section className="mt-24">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8">
          <h1 className="text-center text-4xl font-semibold">
            How Setara Studio Works?
          </h1>

          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/strategic-consulting.png"
                alt="strategic consulting"
                className="mx-auto my-auto w-40"
              />
              <p>
                Consultation: involves collaborative analysis, concept
                development and content creation to achieve marketing goals
                efficiently.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/thinking-pana.png"
                alt="storytelling"
                className="mx-auto my-auto w-40"
              />
              <p>
                Storytelling: Develop compelling narratives that engage and
                captivate the audience
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/rb_6056.png"
                alt="visual stunning"
                className="mx-auto my-auto w-40"
              />
              <p>
                Create visually stunning animations with attention to detail,
                color, composition, and aesthetics.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/map-pana.png"
                alt="innovation and creativity"
                className="mx-auto my-auto w-40"
              />
              <p>
                Innovation and Creativity: Push boundaries and explore new
                techniques, styles, and approaches to animation.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/team-pana.png"
                alt="collaboration"
                className="mx-auto my-auto w-40"
              />
              <p>
                Collaboration: Foster effective teamwork and communication among
                animators, designers, and other team members involved in the
                animation process.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-xl border bg-[#FCFCF7] p-4 text-start">
              <img
                src="/rb_7301.png"
                alt="client satisfaction"
                className="mx-auto my-auto w-40"
              />
              <p>
                Client Satisfaction: Ensure that the animation meets or exceeds
                client expectations and requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 bg-[#FDDFBB]">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-4">
          <h1 className="text-center text-4xl font-semibold">
            One Team, One Goal: Producing the Best Explainer Video for You
          </h1>
          <h3 className="text-center text-2xl">
            We&apos;re not just animators, but visual storytellers too!
          </h3>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">About Us</h1>
            <p>
              We offer high-quality services that focus on storytelling and a
              deep understanding of clients&apos; needs in increasing business
              conversions with explainer videos. Utilizing technology and
              creative approach, we are ready to be your trusted partner in
              achieving success in the digital world. Our services include 2D/3D
              animated videos, motion graphics, and visual effects designed for
              advertisements, presentations, and other digital content, ensuring
              that each project excels and leaves a lasting impression.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">
              Brilliant and Creative Team
            </h1>
            <div className="grid grid-cols-4 *:rounded-2xl">
              <img src="/Team.jpg" alt="team-1" />
              <img src="/Team-1.jpg" alt="team-2" />
              <img src="/Team-2.jpg" alt="team-3" />
              <img src="/Team-3.jpg" alt="team-4" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
