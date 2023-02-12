import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FormPageStyled from "./FormPageStyled";

const FormPage = () => {
  return (
    <FormPageStyled>
      <div className="form-spanbar-container">
        <h2>Create your recipe</h2>
        <div>
          <span className="form-titles">Name</span>
          <SearchBar
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="What's the name of your recipe?"
          />
        </div>
        <div className="form-spanbar-container">
          <span className="form-titles">Cuisine Type</span>
          <SearchBar
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="What type is this recipe of?"
          />
        </div>
        <div className="form-spanbar-container">
          <span className="form-titles">Ingredients</span>
          <SearchBar
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="Add ingredient"
          />
        </div>
        <div className="form-spanbar-container">
          <span className="form-titles">Image</span>
          <SearchBar
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="Add URL to an image"
          />
        </div>

        <Button
          aria-label="add-button"
          className="button-recipe"
          content={
            <div className="button-recipe-container">
              <i className="fa-regular fa-square-plus"> </i>
              <i className="button-recipe-content">Create recipe</i>
            </div>
          }
        />
      </div>
    </FormPageStyled>
  );
};

export default FormPage;
