import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const BlogDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      fetchBlogData(slug);
    }
  }, [slug]);

  const fetchBlogData = async (slug) => {
    try {
      const response = await axios.get(`/api/blog/${slug}`);
      setBlogData(response.data);
      fetchRelatedPosts(response.data.related_posts);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const fetchRelatedPosts = async (relatedPostIds) => {
    try {
      const response = await axios.post('/api/blog/related', { ids: relatedPostIds });
      setRelatedPosts(response.data);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">{blogData.title}</h1>
      <div className="markdown-content mt-4">
        <ReactMarkdown>{blogData.content}</ReactMarkdown>
      </div>
      <div className="related-posts mt-8">
        <h2 className="text-2xl font-bold text-center">Related Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {relatedPosts.map((post) => (
            <div key={post.id} className="related-post-card p-4 border rounded shadow">
              <h3 className="text-xl font-bold">{post.title}</h3>
              <p>{post.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
