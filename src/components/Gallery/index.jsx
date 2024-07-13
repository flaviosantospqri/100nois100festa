import React, { useState } from "react";
import styled from "styled-components";
import { Row, Col, Pagination } from "antd";
import { photos } from "../../utils";

const GalleryWrapper = styled.div`
  padding: 24px;
`;

const GalleryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #000;
`;

const StyledImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 4px;
`;

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8;
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const handlePaginationChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <GalleryWrapper>
      <GalleryTitle>Galeria de Fotos da Tropa</GalleryTitle>
      <Row gutter={[16, 16]}>
        {currentPhotos.map((photo, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <StyledImage src={photo.url} alt={photo.title} />
          </Col>
        ))}
      </Row>
      <Pagination
        style={{ marginTop: "16px", textAlign: "center" }}
        defaultCurrent={1}
        current={currentPage}
        pageSize={photosPerPage}
        total={photos.length}
        onChange={handlePaginationChange}
      />
    </GalleryWrapper>
  );
};

export default PhotoGallery;
