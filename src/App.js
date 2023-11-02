import { EventGallery, Footer, Form, Header, Navbar, TradeSection, Widget } from './components';

function App() {
  return (
    <>
      <Navbar />
      <section className="FED-banner">
        <Header />
        <Widget />
        <TradeSection />
        <Form />
      </section>
      <EventGallery />
      <Footer />
    </>
  );
}

export default App;
