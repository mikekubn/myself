const Breadcrumbs = () => {
  return (
    <div className="flex flex-row items-center py-4 text-typography-primary max-w-screen-lg bg-secondary mx-auto px-6 fixed top-0 left-0 right-0 z-10">
      <code className="text-sm border border-border rounded-md px-4 py-2 bg-primary">
        ~/app/page.tsx [<span className="text-accent-primary">Overview</span>]
      </code>
    </div>
  );
};

export { Breadcrumbs };
