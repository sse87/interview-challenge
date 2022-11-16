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
        <div className='carousel-top'>
          <div className='carousel-number'>01 / 04</div>
          <ul className='carousel-slides'>
            {hasSlides && (
              <li tabIndex='-1' aria-label={data.slides[0].heading} style={{ backgroundImage: `url(${img1})` }} />
            )}
          </ul>
          <ul className='carousel-nav'>
            <li>
              <button aria-label={`Slide 1`} onClick={() => {}} aria-current={true}>
                <span />
              </button>
            </li>
            <li>
              <button aria-label={`Slide 2`} onClick={() => {}} aria-current={false}>
                <span />
              </button>
            </li>
          </ul>
        </div>
        <div className='carousel-bottom'>
          <Heading className='carousel-heading' text={data.slides[0].heading} />
          <div className='carousel-paragraph'>
            <div className='carousel-progress-bar' />
            <p>
              We are a product design and innovation group that cracks tough problems for established organizations
              looking to change the world.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

const Heading = ({ text, ...props }) => {
  const headingWithoutLastWord = text.split(' ');
  const headingLastWord = headingWithoutLastWord.pop();

  return (
    <h2 {...props}>
      {headingWithoutLastWord.join(' ')}
      <br />
      {headingLastWord}
    </h2>
  );
};
