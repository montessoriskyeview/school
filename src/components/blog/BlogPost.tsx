import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Chip,
  Avatar,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  CalendarToday,
  Person,
  Category,
  AccessTime,
} from '@mui/icons-material';

interface IBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishDate: string;
  readTime: number;
  tags: string[];
  category: string;
  featuredImage?: string;
  slug: string;
}

interface IBlogPostProps {
  post: IBlogPost;
  showBreadcrumbs?: boolean;
}

const PostContainer = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '48px 24px',
  [theme.breakpoints.down('md')]: {
    padding: '32px 16px',
  },
}));

const PostHeader = styled(Box)(({ theme }) => ({
  marginBottom: '48px',
  textAlign: 'center',
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: '24px',
  color: theme.palette.text.primary,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '24px',
  marginBottom: '32px',
  color: theme.palette.text.secondary,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '16px',
  },
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '0.875rem',
}));

const FeaturedImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '400px',
  objectFit: 'cover',
  borderRadius: '12px',
  marginBottom: '32px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const PostContent = styled(Box)(({ theme }) => ({
  fontSize: '1.125rem',
  lineHeight: 1.8,
  color: theme.palette.text.primary,
  '& h2': {
    fontSize: '1.75rem',
    fontWeight: 600,
    marginTop: '48px',
    marginBottom: '24px',
    color: theme.palette.primary.main,
  },
  '& h3': {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginTop: '32px',
    marginBottom: '16px',
  },
  '& p': {
    marginBottom: '24px',
  },
  '& ul, & ol': {
    marginBottom: '24px',
    paddingLeft: '24px',
  },
  '& li': {
    marginBottom: '8px',
  },
  '& blockquote': {
    borderLeft: '4px solid',
    borderColor: theme.palette.primary.main,
    paddingLeft: '24px',
    margin: '32px 0',
    fontStyle: 'italic',
    fontSize: '1.25rem',
    color: theme.palette.text.secondary,
  },
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px',
  marginTop: '32px',
  justifyContent: 'center',
}));

const AuthorBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '24px',
  backgroundColor: theme.palette.grey[50],
  borderRadius: '12px',
  marginTop: '48px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const BlogPost: React.FC<IBlogPostProps> = ({
  post,
  showBreadcrumbs = true,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article>
      <PostContainer>
        {showBreadcrumbs && (
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
            <Link color="inherit" href="/">
              Home
            </Link>
            <Link color="inherit" href="/blog">
              Blog
            </Link>
            <Typography color="text.primary">{post.category}</Typography>
          </Breadcrumbs>
        )}

        <PostHeader>
          <Typography
            variant="overline"
            color="primary"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            {post.category}
          </Typography>

          <PostTitle variant="h1">{post.title}</PostTitle>

          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 3, fontStyle: 'italic' }}
          >
            {post.excerpt}
          </Typography>

          <PostMeta>
            <MetaItem>
              <CalendarToday fontSize="small" />
              {formatDate(post.publishDate)}
            </MetaItem>
            <MetaItem>
              <Person fontSize="small" />
              {post.author.name}
            </MetaItem>
            <MetaItem>
              <AccessTime fontSize="small" />
              {post.readTime} min read
            </MetaItem>
            <MetaItem>
              <Category fontSize="small" />
              {post.category}
            </MetaItem>
          </PostMeta>
        </PostHeader>

        {post.featuredImage && (
          <FeaturedImage
            src={post.featuredImage}
            alt={post.title}
            loading="lazy"
          />
        )}

        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />

        <TagsContainer>
          {post.tags.map(tag => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              color="primary"
              size="small"
            />
          ))}
        </TagsContainer>

        <AuthorBox>
          <Avatar
            src={post.author.avatar}
            alt={post.author.name}
            sx={{ width: 64, height: 64 }}
          >
            {post.author.name.charAt(0)}
          </Avatar>
          <Box component="div">
            <Typography variant="h6" component="h3">
              {post.author.name}
            </Typography>
            {post.author.bio && (
              <Typography variant="body2" color="text.secondary">
                {post.author.bio}
              </Typography>
            )}
          </Box>
        </AuthorBox>
      </PostContainer>
    </article>
  );
};

export default BlogPost;
export type { IBlogPost, IBlogPostProps };
