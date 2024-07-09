import React from "react";
import styled from "styled-components";
import { Calendar, Badge } from "antd";

const EventCalendar = () => {
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

  const dateCellRender = (value) => {
    const formattedDate = value.format("DD-MM-YYYY");
    const event = events.find((event) => event.date === formattedDate);

    return (
      <StyledDateCell>
        {event && <Badge status="success" text={event.description} />}
      </StyledDateCell>
    );
  };

  return <Calendar cellRender={dateCellRender} />;
};

// Estilos com styled components
const StyledDateCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default EventCalendar;
