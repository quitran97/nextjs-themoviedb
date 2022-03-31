import clsx from "clsx";
import React, { useRef } from "react";
import { useState, useLayoutEffect } from "react";
import switchCSS from "./switchSelector.module.css";
import SwitchProps from "interface/SwitchProps";

const SwitchSelector = ({
  valueName1 = "ON TV",
  valueName2 = "In Theaters",
  borderColor,
  colorGeneral,
  backgroundActive,
  colorActive,
  colorDisActive,
  onChange,
}: SwitchProps) => {
  const [widthStyle, setWidthStyle] = useState("");
  const [leftStyle, setLeftStyle] = useState("");
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputLeft = 1;

  const handleSwitch = (e: any, input?: number) => {
    setWidthStyle(e.target.offsetWidth + "px");
    setLeftStyle(e.target.offsetLeft + "px");
    if (input === 1) {
      setActive1(true);
      setActive2(false);
      if (onChange) {
        onChange(true);
      }
    } else {
      setActive1(false);
      setActive2(true);
      if (onChange) {
        onChange(false);
      }
    }
  };

  useLayoutEffect(() => {
    setWidthStyle(inputRef.current?.offsetWidth + "px");
    setLeftStyle(inputRef.current?.offsetLeft + "px");
    setActive1(true);
    setActive2(false);
  }, []);

  return (
    <React.Fragment>
      <div
        className={clsx(switchCSS.switchGeneral)}
        style={{ color: colorGeneral }}
      >
        <input
          ref={inputRef}
          type="button"
          value={valueName1}
          style={{
            borderColor: borderColor,
            color: active1 ? colorActive : colorDisActive,
          }}
          className={clsx(switchCSS.inputFirst, switchCSS.switchGeneral, {
            [switchCSS.inputActive]: active1,
          })}
          onClick={(e) => {
            handleSwitch(e, inputLeft);
          }}
        />
        <input
          type="button"
          value={valueName2}
          style={{
            borderColor: borderColor,
            color: active2 ? colorActive : colorDisActive,
          }}
          className={clsx(switchCSS.inputSecond, switchCSS.switchGeneral, {
            [switchCSS.inputActive]: active2,
          })}
          onClick={(e) => {
            handleSwitch(e);
          }}
        />
        <div
          className={clsx(switchCSS.switchTransition)}
          style={{
            width: widthStyle,
            left: leftStyle,
            background: backgroundActive,
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default SwitchSelector;
