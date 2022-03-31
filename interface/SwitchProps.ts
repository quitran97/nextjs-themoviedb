interface SwitchProps {
  valueName1?: string;
  valueName2?: string;
  borderColor?: string;
  colorGeneral?: string;
  backgroundActive?: string;
  colorActive?: string;
  colorDisActive?: string;
  onChange?: (isLeftActive: boolean) => void;
}

export default SwitchProps;
