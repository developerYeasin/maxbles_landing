import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Re-import the blogPosts data from BlogPage.jsx to simulate fetching
// In a real app, this would come from an API or CMS
const blogPosts = [
  {
    slug: "the-future-of-web-design-trends-to-watch-in-2024",
    title: "The Future of Web Design: Trends to Watch in 2024",
    date: "October 26, 2023",
    excerpt: "Explore the exciting new trends shaping the landscape of web design and user experience, from AI integration to immersive interfaces. Stay ahead of the curve with our expert insights.",
    content: `
      <p class="mb-4">The digital landscape is constantly evolving, and web design is at the forefront of this transformation. As we move further into 2024, several key trends are emerging that will redefine how we interact with online spaces.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">1. AI-Powered Personalization</h3>
      <p class="mb-4">Artificial intelligence is no longer a futuristic concept; it's actively shaping user experiences. AI will enable websites to offer highly personalized content, recommendations, and interfaces based on user behavior, preferences, and even emotional states. This leads to more engaging and relevant interactions.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">2. Immersive Experiences (VR/AR Integration)</h3>
      <p class="mb-4">Beyond traditional 2D interfaces, web design is moving towards more immersive experiences. Expect to see more virtual reality (VR) and augmented reality (AR) elements integrated directly into websites, offering interactive product views, virtual tours, and enhanced storytelling.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">3. Motion Design and Micro-interactions</h3>
      <p class="mb-4">Subtle animations, transitions, and micro-interactions will become even more sophisticated. These elements not only add visual appeal but also provide crucial feedback to users, guiding them through the interface and making the experience more intuitive and delightful.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">4. Sustainable Web Design</h3>
      <p class="mb-4">With growing environmental awareness, "green" web design is gaining traction. This involves optimizing websites for lower energy consumption, using efficient coding practices, and choosing eco-friendly hosting solutions. A lighter website is not only better for the planet but also faster for users.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">5. Advanced Accessibility</h3>
      <p class="mb-4">Designing for inclusivity will continue to be a top priority. Beyond basic accessibility standards, future web design will focus on truly universal design principles, ensuring that websites are usable and enjoyable for people of all abilities, including those with cognitive or motor impairments.</p>
      <p class="mt-6">Staying informed about these trends is crucial for anyone involved in digital product development. Embracing these innovations will not only keep your online presence fresh but also ensure you're delivering the best possible experience to your audience.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
    author: "Alex Rivera",
    readTime: "7 min read"
  },
  {
    slug: "mastering-seo-a-comprehensive-guide-for-small-businesses",
    title: "Mastering SEO: A Comprehensive Guide for Small Businesses",
    date: "September 15, 2023",
    excerpt: "Unlock the secrets to improving your search engine rankings and driving organic traffic. This guide covers everything from keyword research to technical SEO best practices.",
    content: `
      <p class="mb-4">For small businesses, SEO (Search Engine Optimization) is not just a buzzword; it's a critical strategy for survival and growth in the digital age. Appearing high in search results can mean the difference between thriving and struggling.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">1. Keyword Research: The Foundation</h3>
      <p class="mb-4">Start by identifying the terms and phrases your target audience uses to find products or services like yours. Tools like Google Keyword Planner, Ahrefs, or SEMrush can help you discover high-volume, low-competition keywords. Focus on long-tail keywords (e.g., "best organic coffee beans in Brooklyn") for better targeting.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">2. On-Page SEO: Optimizing Your Content</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Title Tags & Meta Descriptions:</strong> Craft compelling, keyword-rich titles and descriptions for each page. These appear in search results and influence click-through rates.</li>
        <li><strong>Header Tags (H1, H2, H3):</strong> Use headers to structure your content and include relevant keywords. H1 should be your main topic.</li>
        <li><strong>Content Quality:</strong> Create high-quality, original, and valuable content that directly addresses user intent. Google prioritizes content that truly helps users.</li>
        <li><strong>Image Optimization:</strong> Compress images for faster loading and use descriptive alt text with keywords.</li>
        <li><strong>Internal Linking:</strong> Link relevant pages within your website to help search engines understand your site structure and pass "link juice."</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">3. Technical SEO: The Backend Basics</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Mobile-Friendliness:</strong> Ensure your website is responsive and provides a seamless experience on all devices. Google's mobile-first indexing means this is non-negotiable.</li>
        <li><strong>Site Speed:</strong> Optimize images, leverage browser caching, and minimize code to ensure fast loading times. Users and search engines prefer fast sites.</li>
        <li><strong>XML Sitemaps:</strong> Submit an XML sitemap to Google Search Console to help search engines crawl and index your pages efficiently.</li>
        <li><strong>Schema Markup:</strong> Implement structured data (Schema.org) to help search engines understand the context of your content, potentially leading to rich snippets in search results.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">4. Off-Page SEO: Building Authority</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Backlinks:</strong> Acquire high-quality backlinks from reputable websites. These act as "votes of confidence" for your site's authority. Focus on natural link building through valuable content.</li>
        <li><strong>Local SEO:</strong> For local businesses, optimize your Google My Business profile, ensure consistent NAP (Name, Address, Phone) information across directories, and encourage local reviews.</li>
        <li><strong>Social Media:</strong> While not a direct ranking factor, an active social media presence can drive traffic to your site and increase brand visibility, indirectly benefiting SEO.</li>
      </ul>
      <p class="mt-6">SEO is an ongoing process, not a one-time task. Regularly monitor your performance using tools like Google Analytics and Search Console, adapt to algorithm changes, and continuously refine your strategy to stay competitive.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
    author: "Maria Chen",
    readTime: "10 min read"
  },
  {
    slug: "why-mobile-first-design-is-crucial-in-todays-digital-world",
    title: "Why Mobile-First Design is Crucial in Today's Digital World",
    date: "August 01, 2023",
    excerpt: "Understand the importance of designing for mobile devices first in today's digital world. Learn how a mobile-first approach can enhance user experience and boost your online presence.",
    content: `
      <p class="mb-4">In an era where smartphones are ubiquitous, the way we access and consume information has drastically shifted. This change has profound implications for web design, making "mobile-first" not just a trend, but a fundamental necessity.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">What is Mobile-First Design?</h3>
      <p class="mb-4">Mobile-first design is an approach where designers and developers begin the design process for the smallest screen (mobile devices) and progressively enhance the experience for larger screens (tablets, desktops). This is in contrast to the traditional "desktop-first" approach, where a desktop site is scaled down for mobile.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Why is it Crucial?</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Google's Mobile-First Indexing:</strong> Google primarily uses the mobile version of your content for indexing and ranking. If your mobile site isn't optimized, it can negatively impact your search visibility.</li>
        <li><strong>User Behavior:</strong> A significant portion of internet traffic now comes from mobile devices. Users expect fast, intuitive, and easy-to-navigate experiences on their phones. A poor mobile experience leads to high bounce rates.</li>
        <li><strong>Performance:</strong> Designing for mobile first forces you to prioritize content and performance. You strip away unnecessary elements, leading to faster loading times and a cleaner user interface, which benefits all users, regardless of device.</li>
        <li><strong>Accessibility:</strong> Mobile-first design often inherently leads to better accessibility. By focusing on core content and clear navigation for smaller screens, you create a more streamlined experience that can benefit users with various needs.</li>
        <li><strong>Future-Proofing:</strong> The number of mobile devices and screen sizes continues to grow. A mobile-first strategy ensures your website is adaptable and ready for new technologies and devices as they emerge.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Key Principles of Mobile-First Design:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Content Prioritization:</strong> Identify the most important content and features for mobile users and make them easily accessible.</li>
        <li><strong>Simple Navigation:</strong> Use clear, concise navigation menus that are easy to tap.</li>
        <li><strong>Touch-Friendly Elements:</strong> Ensure buttons and interactive elements are large enough for finger tapping.</li>
        <li><strong>Optimized Images and Media:</strong> Use responsive images and lazy loading to reduce page load times on mobile networks.</li>
        <li><strong>Fluid Layouts:</strong> Employ flexible grids and images that adapt to different screen sizes.</li>
      </ul>
      <p class="mt-6">Embracing mobile-first design is no longer an option but a necessity for any business aiming for a strong and effective online presence. It's about putting your users first, regardless of how they choose to access your content.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
    author: "David Kim",
    readTime: "5 min read"
  },
  {
    slug: "the-power-of-storytelling-in-digital-marketing",
    title: "The Power of Storytelling in Digital Marketing",
    date: "July 10, 2023",
    excerpt: "Discover how compelling narratives can transform your digital marketing efforts, creating deeper connections with your audience and driving brand loyalty. Learn to craft impactful stories.",
    content: `
      <p class="mb-4">In a world saturated with information and advertisements, how do brands cut through the noise and truly connect with their audience? The answer often lies in the ancient art of storytelling.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Why Storytelling Works in Marketing:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Emotional Connection:</strong> Stories evoke emotions, making your brand more relatable and memorable than dry facts or statistics.</li>
        <li><strong>Memorability:</strong> People remember stories far better than they remember bullet points. A well-told story sticks with your audience.</li>
        <li><strong>Building Trust:</strong> Stories allow you to share your brand's values, mission, and authenticity, fostering trust and loyalty.</li>
        <li><strong>Simplifying Complex Ideas:</strong> Complex products or services can be explained more easily through a narrative that shows their impact on real people.</li>
        <li><strong>Differentiation:</strong> In a crowded market, a unique brand story can set you apart from competitors.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Elements of a Great Brand Story:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Protagonist (Your Customer):</strong> Position your customer as the hero of the story, facing a challenge.</li>
        <li><strong>Conflict/Problem:</strong> What problem does your customer face that your product/service can solve?</li>
        <li><strong>Mentor (Your Brand):</strong> Your brand acts as the guide, providing the solution or tools for the hero to overcome their challenge.</li>
        <li><strong>Transformation:</strong> Show how the hero's life improves after using your product/service.</li>
        <li><strong>Authenticity:</strong> Be genuine. Consumers can spot inauthentic stories from a mile away.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Where to Use Storytelling in Digital Marketing:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Website "About Us" Page:</strong> Share your brand's origin story, mission, and values.</li>
        <li><strong>Blog Posts:</strong> Use narratives to illustrate concepts, case studies, or customer success stories.</li>
        <li><strong>Social Media:</strong> Share behind-the-scenes stories, customer testimonials, or short video narratives.</li>
        <li><strong>Email Marketing:</strong> Craft email sequences that tell a story about your product's benefits or a customer's journey.</li>
        <li><strong>Video Marketing:</strong> Videos are incredibly powerful for visual storytelling, allowing you to combine visuals, audio, and narrative.</li>
      </ul>
      <p class="mt-6">By weaving compelling stories into your digital marketing strategy, you can move beyond simply selling products and instead build meaningful relationships with your audience, turning them into loyal advocates for your brand.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
    author: "Sophia Lee",
    readTime: "8 min read"
  },
  {
    slug: "choosing-the-right-cms-for-your-business-website",
    title: "Choosing the Right CMS for Your Business Website",
    date: "June 20, 2023",
    excerpt: "Navigating the world of Content Management Systems can be daunting. Our guide helps you choose the perfect CMS that aligns with your business goals and technical requirements.",
    content: `
      <p class="mb-4">A Content Management System (CMS) is the backbone of almost every modern website, allowing you to create, manage, and modify content without needing deep technical knowledge. But with so many options available, choosing the right one for your business can be a complex decision.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Key Considerations When Choosing a CMS:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Ease of Use:</strong> How intuitive is the interface for content creators? Can non-technical staff easily update pages, add blog posts, or manage products?</li>
        <li><strong>Scalability:</strong> Can the CMS grow with your business? Will it handle increased traffic, more content, or new functionalities without performance issues?</li>
        <li><strong>Customization & Flexibility:</strong> How easily can you customize the design and add specific features? Does it support integrations with other tools you use (CRM, email marketing, analytics)?</li>
        <li><strong>SEO Capabilities:</strong> Does the CMS offer built-in SEO tools or easy integration with SEO plugins to help your site rank higher?</li>
        <li><strong>Security:</strong> How robust are its security features? Are there regular updates and a strong community to address vulnerabilities?</li>
        <li><strong>Cost:</strong> Consider not just the licensing fees (if any) but also hosting, maintenance, and potential development costs for customization.</li>
        <li><strong>Support & Community:</strong> Is there a strong community forum, good documentation, or reliable customer support available?</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Popular CMS Types and Examples:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Traditional CMS (Monolithic):</strong>
          <ul class="list-circle list-inside ml-4">
            <li><strong>WordPress:</strong> Extremely popular, versatile, vast plugin ecosystem, good for blogs and small to medium business sites. Can be complex to manage at scale.</li>
            <li><strong>Drupal:</strong> More robust and flexible than WordPress, often used for complex, enterprise-level websites. Steeper learning curve.</li>
            <li><strong>Joomla:</strong> A balance between WordPress and Drupal, offering good flexibility.</li>
          </ul>
        </li>
        <li><strong>Headless CMS:</strong> (As discussed previously, ideal for React apps)
          <ul class="list-circle list-inside ml-4">
            <li><strong>Contentful, Strapi, Sanity.io, Prismic, DatoCMS:</strong> These provide content via API, allowing you to use any frontend technology (like React). Great for performance, security, and multi-channel content delivery.</li>
          </ul>
        </li>
        <li><strong>Website Builders with CMS Features:</strong>
          <ul class="list-circle list-inside ml-4">
            <li><strong>Shopify, Wix, Squarespace:</strong> All-in-one solutions, very easy to use for non-developers, but offer less customization and flexibility compared to open-source CMS or headless solutions.</li>
          </ul>
        </li>
      </ul>
      <p class="mt-6">The best CMS for your business depends entirely on your specific needs, technical capabilities, and long-term goals. Take the time to evaluate each option against your requirements to make an informed decision that will serve your business well into the future.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
    author: "Chris Evans",
    readTime: "6 min read"
  },
  {
    slug: "maximizing-roi-with-data-driven-marketing",
    title: "Maximizing ROI with Data-Driven Marketing",
    date: "May 05, 2023",
    excerpt: "Learn how to leverage data analytics to optimize your marketing campaigns, improve targeting, and achieve a higher return on investment. Data is your most powerful asset.",
    content: `
      <p class="mb-4">In today's competitive digital landscape, guesswork in marketing is a luxury few businesses can afford. Data-driven marketing is the strategic approach that uses insights from data to optimize marketing efforts, leading to better results and a higher return on investment (ROI).</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">What is Data-Driven Marketing?</h3>
      <p class="mb-4">It's the process of collecting, analyzing, and acting upon data gathered from various marketing channels (website, social media, email, ads, CRM) to understand customer behavior, predict trends, and personalize marketing messages. Instead of relying on intuition, decisions are made based on concrete evidence.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Benefits of Data-Driven Marketing:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Improved Targeting:</strong> Understand your audience segments better to deliver highly relevant messages to the right people at the right time.</li>
        <li><strong>Enhanced Personalization:</strong> Tailor content, offers, and experiences to individual customer preferences, increasing engagement and conversion rates.</li>
        <li><strong>Optimized Campaigns:</strong> Identify what's working and what's not in real-time, allowing for quick adjustments to improve campaign performance.</li>
        <li><strong>Better ROI:</strong> By focusing resources on effective strategies and channels, you minimize wasted spend and maximize your return.</li>
        <li><strong>Deeper Customer Insights:</strong> Gain a comprehensive understanding of the customer journey, pain points, and motivations.</li>
        <li><strong>Competitive Advantage:</strong> Businesses that leverage data effectively can outmaneuver competitors by making smarter, faster decisions.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Key Data Sources:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Website Analytics:</strong> Google Analytics, Adobe Analytics (traffic, bounce rate, time on page, conversion paths).</li>
        <li><strong>CRM Data:</strong> Customer demographics, purchase history, interaction logs.</li>
        <li><strong>Social Media Analytics:</strong> Engagement rates, reach, follower growth, sentiment.</li>
        <li><strong>Email Marketing Platforms:</strong> Open rates, click-through rates, conversion rates.</li>
        <li><strong>Advertising Platforms:</strong> Impressions, clicks, cost-per-click, conversion data.</li>
        <li><strong>Surveys & Feedback:</strong> Direct customer insights.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Steps to Implement Data-Driven Marketing:</h3>
      <ol class="list-decimal list-inside mb-4 space-y-2">
        <li><strong>Define Goals:</strong> Clearly articulate what you want to achieve (e.g., increase website traffic, boost sales, improve lead quality).</li>
        <li><strong>Collect Data:</strong> Set up tracking tools and integrate data sources.</li>
        <li><strong>Analyze Data:</strong> Use analytics tools to identify patterns, trends, and insights. Look for correlations and causal relationships.</li>
        <li><strong>Segment Audience:</strong> Group your audience based on shared characteristics or behaviors.</li>
        <li><strong>Personalize & Optimize:</strong> Tailor your marketing messages and campaigns based on your data insights. A/B test different approaches.</li>
        <li><strong>Measure & Iterate:</strong> Continuously monitor performance against your goals and use new data to refine your strategies.</li>
      </ol>
      <p class="mt-6">Embracing data-driven marketing is an ongoing journey of learning and optimization. By making data the cornerstone of your marketing strategy, you empower your business to make more informed decisions, achieve better results, and build stronger, more profitable customer relationships.</p>
    `,
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
    author: "Jessica Wong",
    readTime: "9 min read"
  },
];

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">The post you are looking for does not exist.</p>
          <Link to="/blog">
            <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-20">
        <article className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg border border-primary/20 dark:border-primary/50 animate-fade-in-up">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8 shadow-md" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4 leading-tight">{post.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-md mb-6">
            By <span className="font-semibold text-primary dark:text-primary-foreground">{post.author}</span> on {post.date} &bull; {post.readTime}
          </p>
          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: post.content }}>
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog">
              <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Posts
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;