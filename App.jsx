// App.jsx — root for the 440 mobile homepage
function App() {
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
