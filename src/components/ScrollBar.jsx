import { useEffect } from "react";

export default function ScrollBar() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      document.getElementById("scroll-progress").style.width = `${scrolled}%`;
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    });

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return <div id="scroll-progress" style={progressStyle} />;
}

const progressStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "10px",
  background: "#ff6340",
  width: "0%",
  zIndex: 9999,
  transition: "width 0.1s ease-out",
};