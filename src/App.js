import './app.css';
import Header from './components/Header';
import data from './data.json';
import img1 from './images/slide-think-make-solve.jpg';

function App() {
  const hasSlides = data.slides.length > 0;

  return (
    <div className='app'>
      {hasSlides && <div className='background-box' />}
      <Header navigation={data.navigation} />
      <main>
        <ul className='carousel-slides'>
          {hasSlides && (
            <li tabIndex='-1' aria-label={data.slides[0].heading} style={{ backgroundImage: `url(${img1})` }} />
          )}
        </ul>
        <Heading text={data.slides[0].heading} />
        <div className='carousel-progress-bar' />
        <p>
          We are a product design and innovation group that cracks tough problems for established organizations looking
          to change the world.
        </p>
      </main>
    </div>
  );
}

export default App;

function Heading({ text }) {
  const headingWithoutLastWord = text.split(' ');
  const headingLastWord = headingWithoutLastWord.pop();

  return (
    <h2>
      {headingWithoutLastWord.join(' ')}
      <br />
      {headingLastWord}
    </h2>
  );
}
