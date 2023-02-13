import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import FormPageStyled from "./FormPageStyled";

const FormPage = () => {
  return (
    <FormPageStyled>
      <div className="form-spanbar-container">
        <h2>Create your recipe</h2>
        <div>
          <label htmlFor="name" className="form-titles">
            Name
          </label>
          <SearchBar
            id="name"
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="What's the name of your recipe?"
          />
        </div>
        <div className="form-spanbar-container">
          <label htmlFor="cuisine-type" className="form-titles">
            Cuisine Type{" "}
          </label>
          <SearchBar
            id="cuisine-type"
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="What type is this recipe of?"
          />
        </div>
        <div className="form-spanbar-container">
          <label htmlFor="ingredients" className="form-titles">
            Ingredients
          </label>
          <SearchBar
            id="ingredients"
            arialabel="search-input"
            type="text"
            className="searchbar"
            placeholder="Add ingredient"
          />
        </div>
        <div className="form-spanbar-container">
          <label htmlFor="image" className="form-titles">
            Image
          </label>
          <SearchBar
            id="image"
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
