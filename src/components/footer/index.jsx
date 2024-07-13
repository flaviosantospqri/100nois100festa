import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MailOutlined, InstagramOutlined } from "@ant-design/icons";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  bottom: 0;
`;

const ContactSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const CopyrightSection = styled.div`
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ContactSection>
        <ContactIcon>
          <MailOutlined />
        </ContactIcon>
        tropa100nois100festa@gmail.com
        <ContactIcon style={{ marginLeft: "20px" }}>
          <InstagramOutlined />
        </ContactIcon>
        @tropa100nois100festa
      </ContactSection>
      <CopyrightSection>
        &copy; Desenvolvido por Flavio Santos.
        <br /> Todos os direitos reservados a 100nois100festa.
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
