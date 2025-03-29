
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './grabbl-app/home/index';
import ContactUs from './grabbl-app/contact-us';
import BlogPost from './grabbl-app/blog-post';
import Blogs from './grabbl-app/blogs';
import GrabblMerchants from './grabbl-app/grabbl-merchants';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog-post" element={<BlogPost />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/grabbl-merchants" element={<GrabblMerchants />} />
      </Routes>
    </Router>
  );
}
