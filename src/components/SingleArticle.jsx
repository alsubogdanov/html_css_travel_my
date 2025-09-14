import Comments from './Comments';
import CommentsWithReplay from './CommentsWithReplay';
import Hero from './Hero';

function SingleArticle() {
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Blog Single',
    text: 'Home / Blog Single',
  };
  const data = {
    id: 1,
    title: 'How to Start with React',
    category: 'ravel guide',
    img: '/img/posts01.jpg',
    author: 'John Smith',
    createDate: '2025-08-10',
    description: "A beginner's guide to starting your first React project.",
    content: [
      { type: 'h2', text: 'Introduction' },
      {
        type: 'p',
        text: 'React is a popular JavaScript library for building user interfaces. It is component-based and declarative.',
      },
      { type: 'h2', text: 'Installation' },
      {
        type: 'p',
        text: 'To start with React, you can use Create React App or Vite to quickly set up your environment. After installation, you can run the development server and start building components.',
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'React is powerful, flexible, and supported by a large community, making it a great choice for modern web apps.',
      },
    ],
  };
  return (
    <div>
      <Hero content={heroContent} />
      <article>
        <div className='container'>
          {data && (
            <div className='article__wrap'>
              <div className='block_data'>
                <p>
                  by <span>{data.author}</span> on {data.createDate}
                </p>
              </div>
              <h2 className='article_title'>{data.title}</h2>
              <img src={data.img} alt='' />

              {data.content.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                if (block.type === 'p') return <p key={i}>{block.text}</p>;
              })}
            </div>
          )}
        </div>
      </article>
      {/* <Comments articleId={data.id} /> */}
      <CommentsWithReplay articleId={data.id} />
    </div>
  );
}

export default SingleArticle;
