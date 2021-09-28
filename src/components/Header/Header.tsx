import {
  Blue,
  HeaderWrapper,
  SubTitle,
  Title,
  Menu,
  AccountIcon,
  ListIcon,
  List,
  ListButton,
  On,
  Off,
  RightWrapper,
} from "./HeaderStyle";
import { BiLogOut } from "react-icons/bi";
import { RiGalleryLine, RiAccountCircleFill } from "react-icons/ri";
import { useState } from "react";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const isListVisibleHandler = () =>
    setIsListVisible((isListVisible) => !isListVisible);

  const [isAccountVisible, setIsAccountVisible] = useState(true);

  const isAccountVisibleHandler = () => {
    window.innerWidth <= 768
      ? setIsAccountVisible(false)
      : setIsAccountVisible(true);
  };

  window.addEventListener("resize", () => isAccountVisibleHandler());
  document.addEventListener('DOMContentLoaded', () => isAccountVisibleHandler());


  const authContext = useContext(AuthContext);

  return (
    <HeaderWrapper>
      <div>
        <Title>
          Photo<Blue>Map</Blue>
        </Title>
        <SubTitle>
          Find out where your picture was taken in just a few clicks!
        </SubTitle>
      </div>
      <RightWrapper>
        {isAccountVisible && (
          <>
            <AccountIcon />
            <p>{authContext.name}</p>
          </>
        )}

        <Menu>
          <div>
            <ListIcon onClick={isListVisibleHandler} />

            {isListVisible ? (
              <On>
                <List>
                  {!isAccountVisible && (
                    <>
                      <AccountIcon />
                      <p>{authContext.name}</p>
                    </>
                  )}

                  <ListButton onClick={authContext.logout}>
                    <BiLogOut />
                    <p>Logout</p>
                  </ListButton>
                  <ListButton>
                    <RiGalleryLine />
                    <p>View Gallery</p>
                  </ListButton>
                </List>
              </On>
            ) : (
              <Off>
                <List>
                  {!isAccountVisible && (
                    <>
                      <AccountIcon />
                      <p>{authContext.name}</p>
                    </>
                  )}

                  <ListButton>
                    <BiLogOut />
                    <p>Logout</p>
                  </ListButton>
                  <ListButton>
                    <RiGalleryLine />
                    <p>View Gallery</p>
                  </ListButton>
                </List>
              </Off>
            )}
          </div>
        </Menu>
      </RightWrapper>
    </HeaderWrapper>
  );
};

export default Header;
