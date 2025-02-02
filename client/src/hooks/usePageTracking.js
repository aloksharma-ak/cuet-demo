// src/hooks/usePageTracking.js
import { useEffect } from "react";

const usePageTracking = (location) => {

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location]);
};

export default usePageTracking;
