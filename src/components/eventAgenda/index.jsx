import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const events = [
  {
    date: "11-07-2024",
    description: "Expo Maresp",
  },
  {
    date: "12-07-2024",
    description: "Expo Maresp",
  },
  {
    date: "13-07-2024",
    description: "Expo Maresp",
  },
  {
    date: "14-07-2024",
    description: "Expo Maresp",
  },
  {
    date: "15-07-2024",
    description: "Expo Maresp",
  },
  {
    date: "20-07-2024",
    description: "Cavalgada em comemoração a 3 anos do 100nois100festa",
  },
];

const EventCalendar = () => {
  return (
    <EventContainer>
      <Row gutter={[16, 16]}>
        {events.map((event, index) => (
          <Col key={index} span={24}>
            <EventItem>
              <EventDate>{event.date}</EventDate>
              <EventDescription>{event.description}</EventDescription>
            </EventItem>
          </Col>
        ))}
      </Row>
    </EventContainer>
  );
};

const EventContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
`;

const EventItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const EventDate = styled.div`
  font-size: 16px;
  color: #888;
`;

const EventDescription = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

export default EventCalendar;
