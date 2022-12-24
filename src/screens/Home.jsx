import { Header } from "../components/Header/Header";
import { MusicLayout } from "../components/MusicLayout/MusicLayout";
import { Pagination } from "../components/Pagination/Pagination";
import PlayBar from "../components/PlayBar/PlayBar";

export const Home = () => {
  return (
    <>
      <div className="flex w-6/12 flex-col max-sm:w-full max-sm:h-full justify-center">
        <Header></Header>
        <MusicLayout></MusicLayout>
        <PlayBar></PlayBar>
        <Pagination></Pagination>
      </div>
    </>
  );
};
