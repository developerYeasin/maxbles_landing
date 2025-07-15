import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import BlogPostPage from "./pages/BlogPostPage"; // Import the new blog post page
import PortfolioItemPage from "./pages/PortfolioItemPage"; // Import the new portfolio item page
import ScrollToTopButton from "./components/ScrollToTopButton";
import UseScrollToTop from "./hooks/useScrollToTop";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <BrowserRouter>
      <UseScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioItemPage />} /> {/* New route for single portfolio item */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* New route for single blog post */}
        <Route path="/contact" element={<ContactPage />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  </TooltipProvider>
);

export default App;