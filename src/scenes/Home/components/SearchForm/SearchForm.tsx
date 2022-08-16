const SearchForm = () => (
  <form>
    <div>
      <p>Busco una playa en:</p>
      <label>
        <input type="radio" name="locality" value="any" /> Cualquier sitio
      </label>
      <label>
        <input type="radio" name="locality" value="cartagena" /> Cartagena
      </label>
    </div>
  </form>
);

export default SearchForm;
