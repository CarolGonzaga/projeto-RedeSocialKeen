import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";

const StyledContainerMenu = styled.div`
  position: relative;
`;

const StyledMenuIcon = styled(EllipsisHorizontalIcon)`
  color: ${(props) => props.theme.black};
  width: 25px;
  height: 25px;

  :hover {
    color: ${(props) => props.theme.inputColor};
  }
`;

const StyledMenu = styled.div`
  position: absolute;
  right: 0;
  width: 150px;
  box-sizing: border-box;

  background: #ffffff;
  border: 1px solid #f6f1e9;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  display: ${(props) => (props.show ? "block" : "none")};
`;

const StyledOption = styled.div`
  font-size: 12px;
  padding: 15px;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: #efeeee;
  }
`;

const StyledTrashIcon = styled(TrashIcon)`
  color: ${(props) => props.theme.black};
  width: 15px;
  height: 15px;
`;

const StyledPencilIcon = styled(PencilIcon)`
  color: ${(props) => props.theme.black};
  width: 15px;
  height: 15px;
`;

const iconComponents = {
  StyledPencilIcon: <StyledPencilIcon />,
  StyledTrashIcon: <StyledTrashIcon />,
};

const MenuButton = ({ options = [] }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuRef]);

  const handleClick = (onClick) => {
    setShow(false);
    onClick();
  };

  return (
    <StyledContainerMenu>
      <StyledMenuIcon onClick={() => setShow(!show)} />
      <StyledMenu show={show} ref={menuRef} onBlur={() => setShow(false)}>
        {options.map((option, pos) => (
          <StyledOption
            key={`menu-option-${pos}`}
            onClick={() => handleClick(option.onClick)}
          >
            <span>{option.text}</span>
            {iconComponents[option.icon]}
          </StyledOption>
        ))}
      </StyledMenu>
    </StyledContainerMenu>
  );
};

export default MenuButton;
