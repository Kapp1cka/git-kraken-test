import { useEffect, useState } from "react";

export default function CookieClicker() {
  const [clicks, setClicks] = useState<number>(0);

  const increaseCookies = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    document.title = `Total number of cookies: ${clicks}`;
  }, [clicks])

  return (
    <>
      <button onClick={increaseCookies} style={{ fontSize: "2rem" }}>
        Cookie
      </button>
      <p>{clicks} total cookies</p>
    </>
  );
}
