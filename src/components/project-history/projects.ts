export type Project = {
  id: string;
  name: string;
  description: string;
};

const articles = import.meta.glob<string>("../../articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});

const acronyms = new Set(["tv", "md", "pos"]);

export const PROJECTS: Project[] = Object.entries(articles)
  .sort(([left], [right]) => left.localeCompare(right, "en", { numeric: true }))
  .map(([path, description]) => {
    const id = path.slice(path.lastIndexOf("/") + 1, -3);
    const name = id
      .replace(/^\d+[_-]?/, "")
      .split("-")
      .map((word) => {
        if (acronyms.has(word)) return word.toUpperCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    return { id, name, description };
  });
