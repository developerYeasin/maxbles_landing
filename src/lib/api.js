// Old local API Base URL (commented out for reference): http://localhost:3034/api
// Production/Live API Base URL: https://maxbles-server.onrender.com/api/

// Use environment variable for API_BASE_URL, defaulting to the production URL
const API_BASE_URL_RAW = import.meta.env.VITE_API_BASE_URL || 'https://maxbles-server.onrender.com/api';
// Ensure API_BASE_URL does not end with a slash
const API_BASE_URL = API_BASE_URL_RAW.endsWith('/') ? API_BASE_URL_RAW.slice(0, -1) : API_BASE_URL_RAW;

export const fetchBlogPosts = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}/blog-posts${query ? `?${query}` : ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

export const fetchBlogPostBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/blog-posts/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null; // Indicate not found
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    throw error;
  }
};

export const fetchPortfolioItems = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}/portfolio-items${query ? `?${query}` : ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    throw error;
  }
};

export const fetchPortfolioItemBySlug = async (slug) => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio-items/${slug}`);
    if (!response.ok) {
      if (response.status === 404) {
        return null; // Indicate not found
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching portfolio item with slug ${slug}:`, error);
    throw error;
  }
};

export const fetchTestimonials = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const url = `${API_BASE_URL}/testimonials${query ? `?${query}` : ''}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};

export const fetchLogos = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/logos`); // Assuming your Node.js API has a /logos endpoint
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching logos:", error);
    throw error;
  }
};