import './PageWrapper.scss';

function PageWrapper({ bgImage, minHeight = '70vh', children }) {
  return (
    <div className="page-wrapper">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${bgImage})`,
          minHeight: minHeight,
        }}
      />
      <main className="page-content">
        {children}
      </main>
    </div>
  );
}

export default PageWrapper;
