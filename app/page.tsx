import { Companies } from "@/components/companies";
import { ElevatorPitch } from "@/components/elevator-pitch";

import { Intro } from "../components/intro";
import { Technologies } from "../components/technologies";

const HomePage = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-6 flex flex-col gap-24 pb-12">
      <Intro />
      <Technologies />
      <ElevatorPitch />
      <Companies />
    </section>
  );
};

export default HomePage;
