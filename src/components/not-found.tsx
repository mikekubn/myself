import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-20">
      <p className="text-center text-2xl font-bold font-mono text-muted">Not found!</p>
      <Link
        to="/"
        className="flex items-center justify-center rounded-lg border border-border p-4 text-center text-sm text-white hover:bg-white/5 hover:underline underline-offset-2"
      >
        Return to root
      </Link>
    </div>
  );
};

export { NotFound };
