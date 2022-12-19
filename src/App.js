import Footer from "./components/ui/Footer.component";
import Header from "./components/ui/Header.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.page";
import TodosPage from "./pages/Todos.page";
import FAQPage from "./pages/FAQ.page";
import AboutUsPage from "./pages/AboutUs.page";
import ContactUsPage from "./pages/ContactUs.page";
import Sidebar from "./components/ui/Sidebar.component";

function App() {
  return (
    <div id="outer-container">
      <Header />
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap" className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Home
// Todos
// Services
// FAQ
// AboutUs
// ContactUs
