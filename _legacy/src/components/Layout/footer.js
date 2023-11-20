import Link from "../shared/link";

import React from "react";
import { useTranslation } from "react-i18next";
import tw from "twin.macro";
import Btn from "../shared/btn";
import Logo from "../../assets/svg/Logo2.svg";
import Mapa from "../../assets/mapa.png";

export default () => {
  const date = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <Footer>
      <Box>
        <Logo className='mr-auto w-32 md:ml-10 my-5 md:mb-10 xl:mb-0' />
      </Box>
      <Box className='md:mr-10'>
        <List>
          <ListItem>
            <Btn
              to='/contact'
              className='bg-black text-white md:ml-5 my-10 md:my-0 mt-auto'
            >
              {t("shared.footer_cta_contact")}
            </Btn>
          </ListItem>
          <ListItem>
            <Link to='/terms-and-cookies' className='hover:underline'>
              {t("shared.footer_terms")}
            </Link>
          </ListItem>
          <ListItem>
            <Link to='/legal' className='hover:underline'>
              {t("shared.legal")}
            </Link>
          </ListItem>
          <ListItem>{date}</ListItem>
        </List>
      </Box>
      <Mapka src={Mapa} />
    </Footer>
  );
};

export const Footer = tw.footer`w-full items-center flex flex-col-reverse justify-between md:flex-row px-4 md:px-8 xl:px-16 border-t-2`;
export const Box = tw.div`w-full md:w-auto px-4  md:px-0 flex flex-col md:flex-row text-lg items-center items-center`;
export const List = tw.ul`px-4 md:p-0 w-full md:w-auto flex flex-col md:items-center justify-end xl:flex-row text-primary-500 mb-10 lg:mb-0`;
export const ListItem = tw.li`text-lg xl:ml-10 my-4 xl:my-0 `;
export const Mapka = tw.img`xl:ml-10 w-96 xl:w-96 rounded-lg m-6`;
