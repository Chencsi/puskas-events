import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import Footer from './components/footer.component';
import Navbar from './components/navbar.component';

const body = createRoot(document.querySelector("body"));

body.render([
    <header>
        <Navbar />
    </header>,
    <main>
        <App />
    </main>,
    <footer>
        <Footer />
    </footer>
]);