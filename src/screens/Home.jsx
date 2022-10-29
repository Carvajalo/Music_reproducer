import { Header } from "../components/Header/Header";
import { MusicLayout } from "../components/MusicLayout/MusicLayout";
import { Pagination } from "../components/Pagination/Pagination";

export const Home = () => {
  return (
    <>
      <div className="flex w-6/12 flex-col">
        <Header></Header>
        <MusicLayout></MusicLayout>
        <Pagination></Pagination>
      </div>
    </>
  );
};
