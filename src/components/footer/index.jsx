import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MailOutlined, InstagramOutlined } from "@ant-design/icons";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 0;
  transition: transform 0.3s ease-out;
  transform: translateY(${(props) => (props.isVisible ? "100%" : "0")});
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <FooterContainer isVisible={isVisible}>
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
