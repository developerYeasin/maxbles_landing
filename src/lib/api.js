const API_BASE_URL = 'http://localhost:3000/api'; // Make sure this matches your Node.js server URL

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