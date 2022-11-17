const Navigation = ({ items }) => {
  return (
    <nav aria-label='Main'>
      <ul>
        {items.map(({ url, title }) => (
          <li key={title}>
            <a href={url}>{title}</a>
          </li>
        ))}
      </ul>
      <button className='contact-us'>Let’s talk</button>

      <button className='menu'>Menu</button>
    </nav>
  );
};

export default Navigation;
