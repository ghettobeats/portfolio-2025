export const useRouter = () => {
  const base = import.meta.env.BASE_URL;

  const push = (path: string) => {
    if (typeof window !== "undefined") {
      // The intercepted pushState in useRoute.ts will automatically trigger path updates
      window.history.pushState(null, "", base + path);
    }
  };

  const replace = (path: string) => {
    if (typeof window !== "undefined") {
      // The intercepted replaceState in useRoute.ts will automatically trigger path updates
      window.history.replaceState(null, "", base + path);
    }
  };

  const back = () => {
    if (typeof window !== "undefined") {
      window.history?.back?.();
    }
  };

  return {
    push,
    replace,
    back,
  };
};
