import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import from @react-spring/web
import styles from './BlogPosts.module.css';

const posts = [
  {
    href: "",
    title: "Solve 100+ CAT Level Algebra Questions in 10 Hours : Algebra Marathon by iQuanta",
    category: { href: "", name: "CAT & Non-CAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "IPMAT Registration Details: Fees, Last Date, Eligibility & More",
    category: { href: "", name: "IPMAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "TISS 2024 Forms Out : Check Selection Criteria, CAT Cutoff & Application",
    category: { href: "", name: "CAT & Non-CAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "TISS 2024 Forms Out : Check Selection Criteria, CAT Cutoff & Application",
    category: { href: "", name: "CAT & Non-CAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CLAT Mini Mock Series by iQuanta: 11th November 2024",
    category: { href: "", name: "CLAT Mini Mock Series" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CAT 2024 : Last 2 Week Strategy & Mistakes to Avoid",
    category: { href: "", name: "CAT & Non-CAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "How Karan Converted FMS Delhi with Less Than 60% in Graduation",
    category: { href: "", name: "CAT & Non-CAT" },
    date: "2024-11-11",
  },
  {
    href: "",
    title: "CLAT Fees 2025 : Application Form, Eligibility & More",
    category: { href: "", name: "Uncategorized" },
    date: "2024-11-09",
  },
];

const BlogPosts = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollingInterval, setScrollingInterval] = useState(null);
  const containerHeight = useRef(0); // Holds the container's total scrollable height
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Spring for smooth scrolling animation
  const props = useSpring({
    from: { scrollY: 0 },
    to: { scrollY: scrollPosition },
    config: { tension: 100, friction: 15 },
  });

  // Start automatic scrolling when the component mounts
  useEffect(() => {
    // Set the container height dynamically once content is available
    if (containerRef.current) {
      containerHeight.current = containerRef.current.scrollHeight;
    }

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev + 1 >= containerHeight.current) {
          return 0; // Reset the scroll position when it reaches the bottom
        }
        return prev + 1; // Scroll by 1px every 80ms
      });
    }, 100);

    setScrollingInterval(interval); // Store the interval ID

    // Cleanup when component unmounts
    return () => {
      if (scrollingInterval) {
        clearInterval(scrollingInterval); // Clear the interval when the component unmounts
      }
    };
  }, []);

  // Update viewport width on window resize
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle mouse events for drag-to-scroll functionality
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartY(event.clientY); // Track the initial mouse position
    if (scrollingInterval) {
      clearInterval(scrollingInterval); // Stop auto-scrolling on mouse down
      setScrollingInterval(null); // Remove the interval
    }
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const deltaY = startY - event.clientY; // Calculate how much the mouse has moved
      setScrollPosition((prev) => prev + deltaY); // Update scroll position based on the mouse movement
      setStartY(event.clientY); // Update the starting point for the next move
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging when the mouse is released
    // Start auto-scrolling again after dragging ends
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        if (prev + 1 >= containerHeight.current) {
          return 0; // Reset the scroll position when it reaches the bottom
        }
        return prev + 1; // Scroll by 1px every 80ms
      });
    }, 100);
    setScrollingInterval(interval); // Start a new interval for scrolling
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false); // Stop dragging if the mouse leaves the container
    }
  };

  // Attach mousemove and mouseup events when mouse is down
  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup listeners
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startY]);

  // Calculate the maxHeight based on viewport width
  const calculateMaxHeight = () => {
    if (viewportWidth <= 480) return '55vh';
    if (viewportWidth <= 768) return '65vh';
    if (viewportWidth <= 1200) return '75vh';
    return '85vh'; // Default value for larger screens
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      style={{ overflowY: 'auto', maxHeight: calculateMaxHeight() }}
      onMouseDown={handleMouseDown} // Start dragging on mouse down
      onMouseEnter={() => { if (scrollingInterval) clearInterval(scrollingInterval); }} // Stop scrolling on mouse enter
      onMouseLeave={handleMouseLeave} // Resume scrolling on mouse leave
    >
      <animated.div
        style={{
          transform: props.scrollY.to((y) => `translateY(-${y}px)`),
        }}
      >
        {posts.map((post, index) => (
          <div key={index} className={styles.post}>
            <div className={styles.content}>
              <h3 className={styles.title}>
                <a href={post.href} rel="bookmark" title={post.title}>
                  {post.title}
                </a>
              </h3>
              <div className={styles.meta}>
                <a href={post.category.href}>
                  <span>|</span>
                  {post.category.name}
                  <span>|</span>
                </a>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default BlogPosts;
