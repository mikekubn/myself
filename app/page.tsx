import { Companies } from "@/components/companies";

import { Intro } from "../components/intro";
import { Technologies } from "../components/technologies";

const HomePage = () => {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-6 flex flex-col gap-24 pb-12">
      <Intro />
      <Technologies />
      <Companies />
    </section>
  );
};

export default HomePage;
