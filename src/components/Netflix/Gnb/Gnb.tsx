import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "motion/react";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import {
  Nav,
  Col,
  Logo,
  Items,
  Item,
  LinkPointer,
  SearchInput,
  Search,
} from "./style";
import { SubmitHandler, useForm } from "react-hook-form";

interface ISearch {
  query: string;
}

export const Gnb = () => {
  const mainMatch = useMatch("/netflix");
  const tvMatch = useMatch("/netflix/tv");
  const [isOpenSearchInput, setIsOpenSearchInput] = useState(false);
  const { scrollY } = useScroll();

  const { register, handleSubmit } = useForm<ISearch>();

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<ISearch> = (data) => {
    navigate(`search?query=${data.query}`);
  };

  // 특정 상황에 애니메이션을 넣을 수 있도록 함
  const navAnimation = useAnimation();
  // motionValue는 애니메이션 진행중에 리렌더링이 되지 않기 때문에
  // 해당 훅을 통해서 변화를 감지해야함
  useMotionValueEvent(scrollY, "change", (scrollPos) => {
    if (scrollPos > 100) navAnimation.start("scroll");
    else navAnimation.start("top");
  });

  return (
    <Nav variants={navVariants} initial={"top"} animate={navAnimation}>
      <Col>
        <Logo
          onClick={() => {
            navigate("");
          }}
          viewBox="0 0 1024 276.742"
        >
          <motion.path
            animate={"animate"}
            variants={pathVariants}
            d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
          />
        </Logo>
        <Items>
          <Item to="">
            Home
            {mainMatch && <LinkPointer layoutId="linkPointer" />}
          </Item>
          <Item to="tv">
            Tv Shows
            {tvMatch && <LinkPointer layoutId="linkPointer" />}
          </Item>
        </Items>
      </Col>
      <Col as="form" onSubmit={handleSubmit(onSubmit)}>
        <SearchInput
          {...register("query", { required: true })}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isOpenSearchInput ? 1 : 0 }}
          placeholder="검색어를 입력하세요."
        />

        <Search
          size={"25px"}
          onClick={() => setIsOpenSearchInput((value) => !value)}
        />
      </Col>
    </Nav>
  );
};

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  scroll: {
    backgroundColor: "rgba(0, 0, 0, 1)",
  },
};

const pathVariants: Variants = {
  animate: {
    pathLength: [0, 0.2, 0],
    transition: { repeat: Infinity, duration: 3, repeatDelay: 1 },
  },
};
