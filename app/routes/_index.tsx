import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowUpRight, Globe, Menu, Send } from "lucide-react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

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
      <nav className="bg-[#00A8A8]/30">
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
      <section className="h-[34rem] bg-[#00A8A8]/30">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center gap-8 p-8 text-center">
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
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-8">
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
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-8">
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
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-8">
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

      <section className="mt-24">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-8">
          <h1 className="text-center text-4xl font-semibold">Portfolio</h1>
          <p className="text-center">
            In this collection, we invite you to explore our vibrant artistic
            journey across captivating 2D and 3D dimensions. Each piece reflects
            our passion for design and storytelling, showcasing flexibility and
            creativity that transcend various media. Immerse yourself in the
            intricate details and unique narratives that bring our works to
            life, and let your imagination be sparked by the wonders within.
            Join us on this unforgettable visual adventure!
          </p>

          <Carousel>
            <CarouselContent className="*:basis-1/3">
              <CarouselItem>
                <img src="/carousel/carousel-1.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-2.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-3.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-4.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-5.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-6.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-7.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-8.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-9.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-10.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-11.jpg" alt="" />
              </CarouselItem>
              <CarouselItem>
                <img src="/carousel/carousel-12.jpeg" alt="" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <section className="mt-24">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-8 p-8">
          <h1 className="text-center text-4xl font-semibold">Review By You</h1>
          <div className="grid grid-cols-3">
            <img src="/testimonial.png" alt="" />
            <img src="/testimonial-1.png" alt="" />
            <img src="/testimonial-2.png" alt="" />
          </div>
        </div>
      </section>

      <section className="mt-24 h-[48rem] bg-[url('/carousel/carousel-6.jpg')]">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col justify-center gap-8 p-8">
          <h1 className="text-center text-4xl font-semibold text-white">
            Frequently Asked Questions
          </h1>

          <div className="grid grid-cols-2 gap-8 *:h-fit *:rounded-2xl *:bg-[#00A8A8] *:bg-opacity-50 *:p-8 *:backdrop-blur">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold text-white">
                Do You have Any Questions? Please Reach Us!
              </h1>
              <Input placeholder="Your Name/Company" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Additional Message" />
              <Button variant="outline">Send to us</Button>
            </div>

            <Accordion type="single" collapsible className="text-white">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  What types of animation do you provide?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  How long does animation production take?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  What&apos;s required to initiate an animation project?
                </AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I contact your team?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-[#00A8A8]/30">
        <div className="mx-auto grid max-w-screen-xl grid-cols-5 gap-8 p-8">
          <div className="flex flex-col gap-4">
            <img src="/logo_setara_&_text.svg" width={120} alt="Logo Setara" />
            <h1 className="text-lg font-semibold">CREATI VITY & FANTASY</h1>
            <p>
              Jl. Kebon Sirih No.40 Lantai 1, Babakan Ciamis, Kec. Sumur
              Bandung, Kota Bandung, Jawa Barat 40117
            </p>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Services</h1>

            <Link to="#">2D Animation</Link>

            <Link to="#">3D Animation</Link>

            <Link to="#">Motion Graphic</Link>
          </div>

          <div>
            <h1 className="text-lg font-semibold">About Us</h1>
            <Link to="#">Our Team</Link>
            <Link to="#">Portfolio</Link>
            <Link to="#">How It Works</Link>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Help</h1>
            <Link to="#">FAQ</Link>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Social Media</h1>
            <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" />
              </svg>

              <Send />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>
        </div>
      </footer>
      <footer className="bg-[#00A8A8]/30">
        <div className="mx-auto max-w-screen-xl p-4 text-center">
          <span>© {new Date().getFullYear()} Setara Creative Studio</span>
        </div>
      </footer>
    </>
  );
}
