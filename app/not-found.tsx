import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found"
};

const NotFoundPage = () => {
  return (
    <section className="font-sourceCodePro flex flex-col items-center h-screen justify-center max-w-screen-lg mx-auto px-6 gap-3 md:gap-6">
      <h1 className="text-[32px]  md:text-[62px] font-bold font-mono text-variable">404</h1>
      <p className="text-[20px] md:text-[28px] text-center font-mono text-comment italic">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </section>
  );
};

export default NotFoundPage;
