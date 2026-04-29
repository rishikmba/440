// App.jsx — root for the 440 mobile homepage
function App() {
  React.useEffect(() => {
    const targets = document.querySelectorAll('.app > section, .app > footer');
    targets.forEach((el) => el.classList.add('fade-section'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="app">
      <window.TopNav />
      <window.Hero />
      <window.TrustMarquee />
      <window.WhatYouGet />
      <window.Comparison />
      <window.RevoltEcosystem />
      <window.FeaturedArtists layout="circle" />
      <window.Testimonial />
      <window.HowItWorks />
      <window.FAQ />
      <window.FinalCTA />
      <window.Footer />
    </div>
  );
}

window.App = App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
