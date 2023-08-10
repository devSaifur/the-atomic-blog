import { PostProvider } from "./PostProvider";
import DarkModeBtn from "./components/DarkModeBtn";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";
import Footer from "./components/Footer";

function App() {
  return (
    <section>
      <DarkModeBtn />

      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
