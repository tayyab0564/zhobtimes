import { wp } from '../wpapi';

export async function getStaticProps() {
  const posts = await wp.posts();
  return {
    props: { posts }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
