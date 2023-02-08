import AddButtonStyled from "./AddButtonStyled";

const AddButton = (): JSX.Element => {
  return (
    <AddButtonStyled className="add-button">
      <button>+</button>
    </AddButtonStyled>
  );
};

export default AddButton;
