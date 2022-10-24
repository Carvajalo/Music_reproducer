import { Header } from "../components/Header/Header";
import { MusicLayout } from "../components/MusicLayout/MusicLayout";
import { Pagination } from "../components/Pagination/Pagination";
import { MusicContext } from "../context/MusicContext";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <MusicLayout></MusicLayout>
      <Pagination></Pagination>
    </>
  );
};
