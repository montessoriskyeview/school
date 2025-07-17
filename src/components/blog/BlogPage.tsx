import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Breadcrumbs, Link } from '@mui/material';
import BlogList from './BlogList';
import { blogPosts } from '../../data/blogPosts';
import { IBlogPost } from './BlogPost';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading] = useState(false);

  const handlePostClick = (post: IBlogPost) => {
    navigate(`/blog/${post.slug}`);
  };

  // Update document title for SEO
  useEffect(() => {
    document.title =
      'Montessori Blog - Expert Insights & Resources | Skye View Learning Center';
  }, []);

  return (
    <Container maxWidth="xl" sx={{ py: 0 }}>
      <Box component="div" sx={{ py: 4 }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3, px: 2 }}>
          <Link color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Blog</Typography>
        </Breadcrumbs>
      </Box>

      <BlogList
        posts={blogPosts}
        loading={loading}
        onPostClick={handlePostClick}
      />
    </Container>
  );
};

export default BlogPage;
