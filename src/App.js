import { useEffect, useReducer } from 'react';
import { useMedia } from 'react-use';
import './app.css';
import Header from './components/Header';
import data from './data.json';
import useProgress from './hooks/useProgress';

const SLIDE_DURATION = 6000;
const AUTOPLAY_TIMER = 4000;

function App() {
  const isDesktop = useMedia('(min-width: 1280px)');
  const { slides } = data;

  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case 'NEXT':
        case 'PROGRESS':
          return { ...state, isPlaying: action.type === 'PROGRESS', currIndex: (state.currIndex + 1) % slides.length };
        case 'PLAY':
          return { ...state, isPlaying: true };
        case 'PAUSE':
          return { ...state, isPlaying: false, currIndex: 0 };
        case 'GOTO':
          return { ...state, isPlaying: false, currIndex: action.index };
        default:
          throw new Error();
      }
    },
    {
      currIndex: 0,
      isPlaying: true,
    },
  );

  useEffect(() => {
    if (!isDesktop && state.isPlaying) {
      dispatch({ type: 'PAUSE' });
    }
  }, [isDesktop, state.isPlaying]);

  useEffect(() => {
    if (isDesktop && !state.isPlaying) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'PLAY' });
      }, AUTOPLAY_TIMER);
      return () => clearTimeout(timeoutId);
    }
  }, [isDesktop, state.isPlaying]);

  useEffect(() => {
    if (state.isPlaying) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'PROGRESS' });
      }, SLIDE_DURATION);
      return () => clearTimeout(timeoutId);
    }
  }, [isDesktop, state.currIndex, state.isPlaying]);

  return (
    <div className='app'>
      <div className='background-box' />
      <Header navigation={data.navigation} />
      <main>
        <div className='carousel-top'>
          <div className='carousel-number'>
            {(state.currIndex + 1).toString().padStart(2, '0')} / {slides.length.toString().padStart(2, '0')}
          </div>
          <ul className='carousel-slides'>
            {isDesktop ? (
              slides.map((slide, index) => (
                <li
                  key={slide.heading}
                  tabIndex='-1'
                  aria-label={slide.heading}
                  style={{ backgroundImage: `url(${require('.' + slide.imageUrl)})` }}
                  aria-hidden={index !== state.currIndex}
                />
              ))
            ) : (
              <li
                tabIndex='-1'
                aria-label={slides[0].heading}
                style={{ backgroundImage: `url(${require('.' + slides[0].imageUrl)})` }}
              />
            )}
          </ul>
          <ul className='carousel-nav'>
            {slides.map((_, index) => (
              <li key={index}>
                <button
                  aria-label={`Slide ${index + 1}`}
                  onClick={() => dispatch({ type: 'GOTO', index })}
                  aria-current={index === state.currIndex}
                >
                  <span />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='carousel-bottom'>
          <Heading className='carousel-heading' text={slides[state.currIndex].heading} />
          <div className='carousel-paragraph'>
            <ProgressBar key={state.currIndex + state.isPlaying} isPlaying={state.isPlaying} />
            <p>{slides[state.currIndex].paragraph}</p>
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

const ProgressBar = ({ isPlaying }) => {
  const progress = useProgress(isPlaying, SLIDE_DURATION);
  return (
    <div className='carousel-progress-bar'>
      <div style={{ width: `${progress * 100}%` }} />
    </div>
  );
};
