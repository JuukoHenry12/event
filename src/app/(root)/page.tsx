import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-3 md:py-2">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col items-center justify-center  gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events,On Our Platform!
            </h1>
            <p className="p-regular-20 md:regular-24">
              Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.
            </p>
            
          </div>
            

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[40vh]"
          />

        </div>
        <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
      </section>
      <section id="event" className="wrapper my-8 flex flex-col gap-8 md:gap-8">
        <h2 className="h2-bold text-center">Trust by <span className="text-primary-500">  Thousands </span>of Events</h2>
      </section>
    </>
  );
}
