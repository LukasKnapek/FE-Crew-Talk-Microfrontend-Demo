const useMfeNavigate = () => {
  const navigate = (path: string) => {
    const event = new CustomEvent("mfe__navigate", {
      detail: { path: "/catalogue" },
    });
    window.dispatchEvent(event);
  };

  return navigate;
};

export default useMfeNavigate;
