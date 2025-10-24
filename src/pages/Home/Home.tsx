import Links from "../../components/Links";
import Article from "../Article";
import Header from "../../components/Header/Header";
import CookieClicker from "../../components/CookieClicker";

export default function Home() {
  return (
    <>
      <Header title="Header stránky" phone_number={603272922} />
      <h1>Home</h1>
      <p>Toto je domovská stránka</p>
      <Article headline="React test" content="Ahoj světe" />
      <Article headline="Neco" content="Ahoj světe" />
      <Links />
      <CookieClicker />
    </>
  );
}
