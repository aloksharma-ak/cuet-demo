import React, { Component } from "react";
import ErrorPage from "./ErrorPage"; 

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true }; // Set error state when error occurs
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary: ", error, info);
    this.setState({ hasError: true });
  }
  

  render() {
    if (this.state.hasError) {
      return <ErrorPage />; // Show the custom error page
    }
    return this.props.children; // Render children if no error
  }
}

export default ErrorBoundary;
