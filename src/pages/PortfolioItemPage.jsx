import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

// Re-import the portfolioItems data from PortfolioPage.jsx to simulate fetching
// In a real app, this would come from an API or CMS
const portfolioItems = [
  {
    slug: "e-commerce-redesign-luxeboutique",
    title: "E-commerce Redesign: LuxeBoutique",
    category: "Web Design",
    type: "website", // Added type
    liveUrl: "https://www.example.com/luxeboutique", // Example live URL
    githubUrl: "https://github.com/example/luxeboutique", // Example GitHub URL
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
    description: "A complete overhaul of an existing e-commerce platform, focusing on user experience and conversion rates. Implemented modern UI/UX principles and a responsive design for all devices, resulting in a 30% increase in sales.",
    fullContent: `
      <p class="mb-4">The LuxeBoutique project involved a comprehensive redesign of an outdated e-commerce platform. Our primary goals were to enhance the user experience, modernize the visual design, and significantly improve conversion rates across all devices.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The existing website suffered from a clunky navigation, slow loading times, and a non-responsive design, leading to high bounce rates and low sales. The brand image also felt dated and didn't reflect the luxury products it offered.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>User Research & UX Audit:</strong> Conducted extensive user research, including heatmaps and user interviews, to identify pain points and opportunities for improvement.</li>
        <li><strong>Responsive UI/UX Design:</strong> Developed a sleek, modern, and fully responsive design that provides an optimal viewing and interaction experience across desktops, tablets, and mobile phones.</li>
        <li><strong>Streamlined Checkout Process:</strong> Redesigned the checkout flow to be intuitive and minimize steps, reducing cart abandonment.</li>
        <li><strong>Performance Optimization:</strong> Implemented image optimization, lazy loading, and efficient code practices to drastically improve page load speeds.</li>
        <li><strong>Enhanced Product Presentation:</strong> Integrated high-resolution imagery, 360-degree product views, and detailed descriptions to better showcase products.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The redesign led to a remarkable <strong>30% increase in overall sales</strong> within the first three months post-launch. User engagement metrics, such as time on site and pages per session, also saw significant improvements. The new design successfully elevated the brand's online presence to match its luxury positioning.</p>
    `,
    tags: ["Shopify", "UI/UX", "Responsive Design", "Conversion Optimization"]
  },
  {
    slug: "mobile-app-fitlife-tracker",
    title: "Mobile App: FitLife Tracker",
    category: "App Development",
    type: "mobile-app", // Added type
    liveUrl: "https://www.example.com/fitlife-app", // Example app store link
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
    description: "Developed a cross-platform mobile application for a fitness brand, featuring personalized workout plans, progress tracking, and social sharing. Built with React Native for seamless iOS and Android experience, achieving 100k+ downloads.",
    fullContent: `
      <p class="mb-4">FitLife Tracker is a comprehensive cross-platform mobile application designed to empower users on their fitness journey. We partnered with a leading fitness brand to create an intuitive and engaging app that caters to diverse workout needs.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The client needed a mobile presence that could offer personalized fitness experiences, track user progress effectively, and foster a community, all while being cost-efficient to develop for both iOS and Android platforms.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>React Native Development:</strong> Chose React Native for its ability to build native mobile apps for both iOS and Android from a single codebase, ensuring consistency and reducing development time.</li>
        <li><strong>Personalized Workout Plans:</strong> Implemented an algorithm that generates customized workout routines based on user goals, fitness levels, and available equipment.</li>
        <li><strong>Advanced Progress Tracking:</strong> Developed features for logging workouts, tracking calories, monitoring weight, and visualizing progress through interactive charts and graphs.</li>
        <li><strong>Social Integration:</strong> Incorporated social sharing functionalities, allowing users to share achievements, challenge friends, and participate in community forums.</li>
        <li><strong>API Integration:</strong> Connected with third-party fitness devices and health APIs for seamless data synchronization.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The FitLife Tracker app achieved over <strong>100,000 downloads</strong> within six months of its launch. User retention rates significantly improved due to the personalized content and engaging social features. The app received high ratings on both the App Store and Google Play, establishing the client as a leader in digital fitness.</p>
    `,
    tags: ["React Native", "iOS", "Android", "Fitness Tech", "API Integration"]
  },
  {
    slug: "brand-identity-quantum-innovations",
    title: "Brand Identity: Quantum Innovations",
    category: "Branding",
    type: "digital-marketing", // Added type
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
    description: "Crafted a comprehensive brand identity for a new tech startup, including logo design, typography, color palette, and brand guidelines. Established a strong visual presence from the ground up, aiding in successful seed funding.",
    fullContent: `
      <p class="mb-4">Quantum Innovations, a nascent tech startup, approached us to build their brand identity from the ground up. Their vision was to be perceived as cutting-edge, reliable, and forward-thinking in the competitive tech space.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">As a new entrant, Quantum Innovations needed a distinctive and memorable brand identity that would resonate with investors and early adopters, conveying their innovative spirit and technical prowess.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Discovery Workshop:</strong> Conducted in-depth workshops with the Quantum Innovations team to understand their core values, target audience, and long-term aspirations.</li>
        <li><strong>Logo Design:</strong> Developed a unique and scalable logo that visually represents innovation and precision, incorporating elements that hint at their advanced technology.</li>
        <li><strong>Typography & Color Palette:</strong> Selected a modern and professional typography system and a vibrant yet sophisticated color palette that reflects their brand personality.</li>
        <li><strong>Brand Guidelines:</strong> Created a comprehensive brand style guide detailing logo usage, color codes, typography rules, imagery style, and tone of voice to ensure consistent brand application across all touchpoints.</li>
        <li><strong>Marketing Collateral:</strong> Designed initial marketing materials, including business cards, letterheads, and presentation templates, to kickstart their outreach efforts.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The new brand identity was instrumental in Quantum Innovations' successful seed funding round, helping them secure significant investment. The cohesive and professional visual presence garnered positive attention and established credibility, setting a strong foundation for their market entry.</p>
    `,
    tags: ["Logo Design", "Brand Guidelines", "Visual Identity", "Startup Branding"]
  },
  {
    slug: "saas-platform-ui-dataflow-analytics",
    title: "SaaS Platform UI: DataFlow Analytics",
    category: "UI/UX",
    type: "website", // Added type
    liveUrl: "https://www.example.com/dataflow-analytics", // Example live URL
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
    description: "Designed an intuitive and efficient user interface for a complex SaaS analytics platform. Focused on data visualization and streamlined workflows to enhance user productivity and reduce learning curve by 25%.",
    fullContent: `
      <p class="mb-4">DataFlow Analytics is a powerful SaaS platform designed for businesses to gain deep insights from their data. Our task was to create a user interface that could handle complex data visualization and analysis while remaining intuitive and user-friendly.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The existing platform was highly functional but suffered from a steep learning curve and an overwhelming interface, making it difficult for new users to adopt and for existing users to maximize their productivity.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>User-Centered Design:</strong> Conducted extensive user interviews and usability testing to understand user needs and pain points.</li>
        <li><strong>Information Architecture Redesign:</strong> Simplified the navigation and organized complex features into logical, easy-to-find sections.</li>
        <li><strong>Intuitive Data Visualization:</strong> Designed custom dashboards and charts that present complex data in clear, digestible formats, allowing users to quickly grasp insights.</li>
        <li><strong>Streamlined Workflows:</strong> Optimized common user tasks, such as report generation and data filtering, to reduce clicks and improve efficiency.</li>
        <li><strong>Consistent Design System:</strong> Developed a comprehensive design system to ensure consistency across the entire platform, improving learnability and reducing cognitive load.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The new UI/UX design led to a <strong>25% reduction in the average learning curve</strong> for new users and a significant increase in overall user satisfaction. Existing users reported improved productivity and a more enjoyable experience, solidifying DataFlow Analytics' position as a leading tool in its niche.</p>
    `,
    tags: ["SaaS UI", "Data Visualization", "Dashboard Design", "User Research"]
  },
  {
    slug: "marketing-campaign-ecogrow-launch",
    title: "Marketing Campaign: EcoGrow Launch",
    category: "Digital Marketing",
    type: "digital-marketing", // Added type
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
    description: "Executed a multi-channel digital marketing campaign that resulted in a 40% increase in lead generation and 20% higher engagement rates. Utilized SEO, SEM, and social media strategies for maximum impact.",
    fullContent: `
      <p class="mb-4">The EcoGrow Launch campaign was a multi-faceted digital marketing initiative aimed at introducing a new line of sustainable gardening products to the market. Our goal was to generate significant leads and build brand awareness among environmentally conscious consumers.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The client needed to quickly establish a presence in a competitive market and educate consumers about the unique benefits of their eco-friendly products, all while driving measurable results.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Comprehensive SEO Strategy:</strong> Optimized product pages and created blog content around sustainable living and gardening to capture organic search traffic.</li>
        <li><strong>Targeted SEM Campaigns:</strong> Launched highly targeted Google Ads and social media ad campaigns, focusing on demographics interested in sustainability and gardening.</li>
        <li><strong>Engaging Social Media Content:</strong> Developed a content calendar for Instagram, Facebook, and Pinterest, featuring visually appealing posts, user-generated content, and interactive stories.</li>
        <li><strong>Influencer Collaborations:</strong> Partnered with eco-conscious influencers to reach a wider, engaged audience and build credibility.</li>
        <li><strong>Email Marketing Automation:</strong> Implemented a lead nurturing email sequence for new subscribers, providing valuable content and product information.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The EcoGrow Launch campaign achieved outstanding results, including a <strong>40% increase in lead generation</strong> and a <strong>20% higher engagement rate</strong> across social media platforms. The integrated approach successfully positioned EcoGrow as a leader in sustainable gardening, exceeding the client's initial expectations.</p>
    `,
    tags: ["SEO", "SEM", "Social Media Marketing", "Lead Generation", "Content Marketing"]
  },
  {
    slug: "corporate-website-globalconnect",
    title: "Corporate Website: GlobalConnect",
    category: "Web Development",
    type: "website", // Added type
    liveUrl: "https://www.example.com/globalconnect", // Example live URL
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/08/2-10.jpg",
    description: "Developed a modern, secure, and scalable corporate website for a large enterprise. Integrated various third-party services and ensured compliance with accessibility standards, improving corporate communication.",
    fullContent: `
      <p class="mb-4">The GlobalConnect project involved developing a robust, secure, and highly scalable corporate website for a multinational enterprise. The goal was to create a central hub for corporate communications, investor relations, and global brand presence.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The client required a website capable of handling high traffic, integrating with numerous internal and external systems, and adhering to strict security and accessibility compliance standards across different regions.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Enterprise-Grade Architecture:</strong> Built on a scalable and secure architecture, utilizing modern web technologies to ensure high performance and reliability.</li>
        <li><strong>CMS Integration:</strong> Integrated a powerful Content Management System (CMS) to allow internal teams to easily manage and update content without developer intervention.</li>
        <li><strong>Third-Party Service Integration:</strong> Seamlessly integrated with investor relations platforms, news feeds, career portals, and other essential corporate services.</li>
        <li><strong>Accessibility Compliance (WCAG 2.1 AA):</strong> Ensured the website met WCAG 2.1 AA accessibility standards, making it usable for individuals with disabilities.</li>
        <li><strong>Multi-language Support:</strong> Implemented a robust multi-language system to cater to GlobalConnect's diverse international audience.</li>
        <li><strong>Advanced Security Measures:</strong> Incorporated comprehensive security protocols, including WAF, DDoS protection, and regular security audits.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The new GlobalConnect website significantly improved corporate communication efficiency and enhanced the company's global digital footprint. The secure and accessible platform received positive feedback from stakeholders and users alike, solidifying the client's reputation as a forward-thinking global leader.</p>
    `,
    tags: ["Enterprise Web", "CMS Integration", "Accessibility", "Security"]
  },
  {
    slug: "custom-crm-system-clienthub",
    title: "Custom CRM System: ClientHub",
    category: "Software Development",
    type: "software", // Added type
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2021/10/2.jpg",
    description: "Built a bespoke CRM system to manage client relationships and sales pipelines, significantly improving operational efficiency and data management for our client. Reduced manual data entry by 50%.",
    fullContent: `
      <p class="mb-4">ClientHub is a custom-built CRM (Customer Relationship Management) system developed to address the unique operational needs of a growing service-based business. The goal was to centralize client data, streamline sales processes, and improve overall team efficiency.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The client was struggling with disparate spreadsheets, manual data entry, and a lack of a unified view of their customer interactions, leading to inefficiencies, missed opportunities, and inconsistent client service.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Tailored Module Development:</strong> Designed and developed custom modules for lead management, client profiles, project tracking, invoicing, and communication logs, all tailored to the client's specific workflows.</li>
        <li><strong>Intuitive Dashboard:</strong> Created a centralized dashboard providing a quick overview of sales pipeline, client status, and key performance indicators.</li>
        <li><strong>Automation Features:</strong> Implemented automation for routine tasks such as follow-up reminders, task assignments, and report generation, reducing manual effort.</li>
        <li><strong>Secure Data Management:</strong> Ensured robust data security and access control mechanisms to protect sensitive client information.</li>
        <li><strong>Scalable Architecture:</strong> Built the system with a scalable architecture to accommodate future growth and additional features.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The implementation of ClientHub led to a significant improvement in operational efficiency, with a <strong>50% reduction in manual data entry</strong>. The unified client view enabled better decision-making and improved client satisfaction. The system streamlined sales processes, contributing to a noticeable increase in conversion rates.</p>
    `,
    tags: ["Custom Software", "CRM", "Automation", "Business Process Optimization"]
  },
  {
    slug: "interactive-kiosk-retail-experience",
    title: "Interactive Kiosk: Retail Experience",
    category: "UI/UX",
    type: "software", // Added type
    image: "https://obelisk1.themescamp.com/demo2/wp-content/uploads/sites/3/2020/08/3-10.jpg",
    description: "Designed and developed an interactive kiosk interface for a retail environment, providing customers with product information, self-service options, and loyalty program sign-ups. Enhanced in-store engagement.",
    fullContent: `
      <p class="mb-4">This project involved designing and developing an interactive kiosk interface for a modern retail store, aiming to enhance the in-store customer experience and provide self-service options.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Challenge:</h3>
      <p class="mb-4">The client wanted to reduce customer wait times, provide instant access to product information, and offer a seamless way for customers to engage with their loyalty program, all within the physical store environment.</p>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Solution:</h3>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li><strong>Intuitive Touchscreen UI:</strong> Designed a large-format, touch-friendly interface with clear navigation and large, tappable elements for ease of use by all customers.</li>
        <li><strong>Product Information Hub:</strong> Integrated a comprehensive product catalog, allowing customers to browse items, view detailed descriptions, check stock availability, and see customer reviews.</li>
        <li><strong>Self-Service Options:</strong> Enabled features like order pickup notifications, loyalty program sign-ups, and personalized recommendations based on browsing history.</li>
        <li><strong>Interactive Maps:</strong> Included in-store navigation to help customers locate products or departments.</li>
        <li><strong>Backend Integration:</strong> Connected the kiosk system with the store's inventory management and CRM systems for real-time data updates.</li>
      </ul>
      <h3 class="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">Results:</h3>
      <p class="mb-4">The interactive kiosks successfully enhanced the in-store retail experience, leading to increased customer engagement and satisfaction. The self-service options reduced the burden on staff and improved operational efficiency, contributing to a more modern and convenient shopping environment.</p>
    `,
    tags: ["Interactive Design", "Retail Tech", "Touchscreen UI", "Customer Engagement"]
  },
];

const PortfolioItemPage = () => {
  const { slug } = useParams();
  const item = portfolioItems.find(p => p.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Portfolio Item Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">The portfolio item you are looking for does not exist.</p>
          <Link to="/portfolio">
            <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Portfolio
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
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-lg mb-8 shadow-md" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gradient-primary mb-4 leading-tight">{item.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 text-md mb-6">
            Category: <span className="font-semibold text-primary dark:text-primary-foreground">{item.category}</span>
          </p>

          <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-8" dangerouslySetInnerHTML={{ __html: item.fullContent }}>
          </div>

          {item.tags && item.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Technologies & Tags:</h3>
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag, index) => (
                  <span key={index} className="bg-primary/10 text-primary dark:bg-primary-foreground/10 dark:text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {(item.type === 'website' || item.type === 'mobile-app') && item.liveUrl && (
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Project Links:</h3>
              <div className="flex flex-wrap gap-4">
                {item.liveUrl && (
                  <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-md hover:scale-105 transition-transform">
                      <ExternalLink className="h-5 w-5 mr-2" /> Live Preview
                    </Button>
                  </a>
                )}
                {item.githubUrl && (
                  <a href={item.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 shadow-md hover:scale-105 transition-transform">
                      <Github className="h-5 w-5 mr-2" /> GitHub Repo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          )}

          {item.type === 'website' && item.liveUrl && (
            <div className="mt-10 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Live Website Preview:</h3>
              <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-xl border border-primary/30 dark:border-primary/60"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={item.liveUrl}
                  title={`${item.title} Live Preview`}
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                Note: Some websites may prevent embedding in an iframe due to security policies (X-Frame-Options).
              </p>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link to="/portfolio">
              <Button variant="outline" className="text-primary dark:text-primary-foreground border-primary dark:border-primary-foreground hover:bg-primary/10 dark:hover:bg-primary-foreground/10">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Projects
              </Button>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioItemPage;