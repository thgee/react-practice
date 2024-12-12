import styled from "@emotion/styled";
import { motion } from "motion/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled(motion.nav)`
  height: 100px;
  position: fixed;
  top: 0;
  background-color: #000;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 50px;
`;

export const Logo = styled(motion.svg)`
  margin-right: 90px;
  height: 38px;
  fill: ${(props) => props.theme.red};
  cursor: pointer;
  path {
    stroke-width: 8px;
    stroke: #fff;
  }
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Item = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
`;

export const LinkPointer = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  bottom: -20px;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 100px;
  background-color: ${(p) => p.theme.red};
`;

export const Search = styled(FaSearch)`
  color: #fff;
  cursor: pointer;
  margin-left: 15px;
`;

export const SearchInput = styled(motion.input)`
  border-radius: 6px;
  height: 30px;
  font-size: 1.2rem;
  padding: 20px 10px;
  width: 90%;
  transform-origin: right center;
  background-color: transparent;
  border: 2px solid #fff;
`;
