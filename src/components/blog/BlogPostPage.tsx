import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Button, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import BlogPost from './BlogPost';
import { getBlogPostBySlug } from '../../data/blogPosts';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = slug ? getBlogPostBySlug(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Skye View Learning Center`;
    } else {
      document.title = 'Blog Post Not Found | Skye View Learning Center';
    }
  }, [post]);

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Blog Post Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          The blog post you're looking for doesn't exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/blog')}
          startIcon={<ArrowBack />}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Button
          variant="text"
          onClick={() => navigate('/blog')}
          startIcon={<ArrowBack />}
          sx={{ mb: 2 }}
        >
          Back to Blog
        </Button>
      </Container>

      <BlogPost post={post} showBreadcrumbs={false} />
    </Box>
  );
};

export default BlogPostPage;
