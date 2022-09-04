import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/blogs'}>
        <a>Blogs</a>
      </Link>
      <Link href={'/cv'}>
        <a>CV</a>
      </Link>
      <Link href={'/portfolio'}>
        <a>Portfolio</a>
      </Link>
      <Link href={'/about'}>
        <a>About</a>
      </Link>
    </>
  );
};

export default Header;
