import React, { useState, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Pagination,
  Skeleton,
  Button,
} from '@mui/material';
import { Search, CalendarToday, AccessTime, Person } from '@mui/icons-material';
import { IBlogPost } from './BlogPost';

interface IBlogListProps {
  posts: IBlogPost[];
  loading?: boolean;
  onPostClick?: (post: IBlogPost) => void;
}

const BlogListContainer = styled(Box)(({ theme }) => ({
  padding: '48px 24px',
  maxWidth: '1200px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    padding: '32px 16px',
  },
}));

const HeaderSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '48px',
}));

const FiltersSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  marginBottom: '32px',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '16px',
  },
}));

const PostCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
}));

const PostCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '200px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const PostCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
}));

const PostMeta = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
  flexWrap: 'wrap',
}));

const MetaItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const TagsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginTop: 'auto',
  paddingTop: '16px',
}));

const PaginationContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '48px',
}));

const BlogList: React.FC<IBlogListProps> = ({
  posts,
  loading = false,
  onPostClick,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(posts.map(post => post.category))
    );
    return uniqueCategories.sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(startIndex, startIndex + postsPerPage);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePostClick = (post: IBlogPost) => {
    if (onPostClick) {
      onPostClick(post);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const renderPostCard = (post: IBlogPost) => (
    <Grid item xs={12} sm={6} md={4} key={post.id}>
      <PostCard onClick={() => handlePostClick(post)}>
        {post.featuredImage ? (
          <PostCardMedia image={post.featuredImage} title={post.title} />
        ) : (
          <Box
            sx={{
              height: '200px',
              backgroundColor: 'grey.200',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              No Image
            </Typography>
          </Box>
        )}

        <PostCardContent>
          <Typography
            variant="overline"
            color="primary"
            sx={{ mb: 1, fontWeight: 600 }}
          >
            {post.category}
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            sx={{
              mb: 2,
              fontWeight: 600,
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {post.excerpt}
          </Typography>

          <PostMeta>
            <MetaItem>
              <CalendarToday fontSize="small" />
              {formatDate(post.publishDate)}
            </MetaItem>
            <MetaItem>
              <AccessTime fontSize="small" />
              {post.readTime} min
            </MetaItem>
            <MetaItem>
              <Person fontSize="small" />
              {post.author.name}
            </MetaItem>
          </PostMeta>

          <TagsContainer>
            {post.tags.slice(0, 3).map(tag => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                color="primary"
              />
            ))}
            {post.tags.length > 3 && (
              <Chip
                label={`+${post.tags.length - 3}`}
                size="small"
                variant="outlined"
              />
            )}
          </TagsContainer>
        </PostCardContent>
      </PostCard>
    </Grid>
  );

  const renderSkeleton = () => (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <Skeleton variant="rectangular" height={200} />
        <CardContent>
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="text" width="100%" height={24} />
          <Skeleton variant="text" width="100%" height={24} />
          <Skeleton variant="text" width="80%" height={16} />
          <Skeleton variant="text" width="60%" height={16} />
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <BlogListContainer>
      <HeaderSection>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 700 }}>
          Montessori Insights & Resources
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          Discover expert insights, practical tips, and Montessori wisdom for
          your child's development
        </Typography>
      </HeaderSection>

      <FiltersSection>
        <TextField
          placeholder="Search articles..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{ minWidth: '300px' }}
        />

        <FormControl sx={{ minWidth: '200px' }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={e => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </FiltersSection>

      <Box component="div" sx={{ mb: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Showing {filteredPosts.length} of {posts.length} articles
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {loading
          ? Array.from({ length: 6 }).map((_, index) => renderSkeleton())
          : paginatedPosts.map(renderPostCard)}
      </Grid>

      {!loading && totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            size="large"
          />
        </PaginationContainer>
      )}

      {!loading && filteredPosts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
            No articles found
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Try adjusting your search terms or category filter
          </Typography>
          <Button
            variant="outlined"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
          >
            Clear Filters
          </Button>
        </Box>
      )}
    </BlogListContainer>
  );
};

export default BlogList;
