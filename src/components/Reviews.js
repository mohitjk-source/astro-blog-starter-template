export default function Reviews({ reviews }) {
  const filtered = reviews.filter((r) => r.caption?.toLowerCase().includes('review'));
  return (
    <section>
      <h3>Featured Reviews</h3>
      <div className="grid">
        {filtered.map((post) => (
          <div key={post.id} className="card">
            <img src={post.media_url} alt="Instagram Review" />
            <h4>{post.caption.split('\n')[0]}</h4>
            <p>{new Date(post.timestamp).toDateString()}</p>
            <a href={post.permalink} target="_blank" rel="noreferrer">Read →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
