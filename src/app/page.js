// Home.jsx
import Header from "@/Component/Header";
import MainPage from "./MainPage/page";

export default function Home() {
  return (
    <div
      className="w-full min-h-screen"
      style={{
        background: "linear-gradient(97deg, rgba(40,54,6,1), rgba(15,21,0,1))",
      }}
    >
      {/* <Header /> */}
      <MainPage />
    </div>
  );
}
