import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const reviews = [
    {
      id: 1,
      title: 'Very tasty',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fugiat totam nulla non minus vitae molestias repellendus quam eligendi velit. Aut malesuatis, ipsa ipsam laboriosam reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!',
      author: 'Emma Newman',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=1' // Add image URL here

    },
    {
      id: 2,
      title: 'I have lunch here every day',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fugiat totam nulla non minus vitae molestias repellendus quam eligendi velit. Aut malesuatis, ipsa ipsam laboriosam reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!',
      author: 'Paul Trueman',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=2' // Add image URL here

    },
    {
      id: 3,
      title: 'demnnnnn',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fugiat totam nulla non minus vitae molestias repellendus quam eligendi velit. Aut malesuatis, ipsa ipsam laboriosam reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!',
      author: 'Emma Newman',
      rating: 5,
      image: 'https://i.pravatar.cc/150?img=3' // Add image URL here

    }
  ];

  const reviewsPerPage = 2;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPageReviews = () => {
    const start = currentPage * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  };

  return (
    <ReviewsSection>
      <ReviewsContainer>
        <ReviewsHeader>
          <Title>Reviews</Title>
          <Subtitle>Don't just take our word for it. Here's what some of our satisfied customers have to say.</Subtitle>
        </ReviewsHeader>

        <ReviewsGrid>
          <AnimatePresence mode="wait">
            {getCurrentPageReviews().map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <ReviewCard>
                  <ReviewTitle>{review.title}</ReviewTitle>
                  <Stars>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i}>★</Star>
                    ))}
                  </Stars>
                  <ReviewContent>{review.content}</ReviewContent>
                  <AuthorInfo>
                    <AuthorImage src={review.image} alt={review.author}/>
                    <AuthorName>{review.author}</AuthorName>
                  </AuthorInfo>
                </ReviewCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </ReviewsGrid>

        <NavigationButtons>
          <NavButton onClick={prevSlide} disabled={currentPage === 0}>
            <CircleButton>←</CircleButton>
          </NavButton>
          <NavButton onClick={nextSlide} disabled={currentPage === totalPages - 1}>
            <CircleButton>→</CircleButton>
          </NavButton>
        </NavigationButtons>
      </ReviewsContainer>
    </ReviewsSection>
  );
};

const ReviewsSection = styled.section`
  padding: 80px 5%;
  background: #fff;
`;

const ReviewsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const ReviewsHeader = styled.div`
  text-align: left;
  margin-bottom: 40px;
  margin-left: 30px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #1E3A8A;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #64748B;
  max-width: 600px;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  min-height: 300px; /* Add fixed height to prevent layout shift */

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 8px;
`;

const ReviewTitle = styled.h3`
  font-size: 20px;
  color: #1E3A8A;
  margin-bottom: 12px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

const Star = styled.span`
  color: #FFB800;
  font-size: 20px;
`;

const ReviewContent = styled.p`
  font-size: 14px;
  color: #64748B;
  line-height: 1.6;
  margin-bottom: 24px;
  font-weight: 500;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-size: 14px;
  color: #1E3A8A;
  font-weight: 500;
`;

const NavigationButtons = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: 8px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const CircleButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #E5E7EB;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1E3A8A;
  font-size: 18px;
  transition: all 0.2s ease;

  &:hover {
    background: #1E3A8A;
    color: #fff;
    border-color: #1E3A8A;
  }
`;

export default Reviews;