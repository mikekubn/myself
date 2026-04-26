const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-2 text-comment py-8">
      <p>No Data Collected, created in 🇪🇺.</p>
      <code>
        Powered by{" "}
        <a
          href="https://www.the12st.com/"
          className="text-accent-primary hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          the12st
        </a>{" "}
        professionals
      </code>
    </footer>
  );
};

export { Footer };
