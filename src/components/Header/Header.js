import logo from '../../logo.svg';
import Navigation from '../Navigation';
import './header.css'

const Header = ({ navigation }) => (
  <header>
    <a href={navigation.logo.url}>
      <img className='logo' src={logo} alt={navigation.logo.title} />
    </a>
    <Navigation items={navigation.items} />
  </header>
);

export default Header;
