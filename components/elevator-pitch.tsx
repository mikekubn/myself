const ElevatorPitch = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-card p-12 rounded-lg">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold font-mono text-variable">Summary</h2>
        <code className="text-sm text-typography-secondary">A short summary of my skills and experience</code>
      </div>

      <div className="text-comment italic leading-relaxed tracking-widest">
        Digital Craftsman specializing in frontend architecture and full-stack delivery. I create reliable, user-centric
        applications across the modern JavaScript/TypeScript ecosystem — React, Next.js, Vue, Nuxt, Tailwind, Vite, and
        NestJS — blending intuitive UI with scalable architecture. With a focus on frontend engineering, security, and
        maintainability, I design end-to-end solutions that balance performance and developer experience. My teammates
        and I also build interesting things at{" "}
        <a
          href="https://the12st.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-primary hover:underline"
        >
          the12st
        </a>{" "}
        agency.
      </div>
    </div>
  );
};

export { ElevatorPitch };
