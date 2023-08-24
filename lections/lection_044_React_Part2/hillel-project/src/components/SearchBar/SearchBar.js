import { useState, memo, useEffect } from "react";
import { Button } from "../../UI-Components/Button/Button";
import Input from "./Input";

const SearchBar = (props) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [isValidForm, setIsValidForm] = useState(false);

  console.log("---render SearchBar ----");

  const updateTitle = (v) => {
    setTitle(v);
  };

  const updateGanre = (v) => {
    setGenre(v);
  };

  const onClickHandler = (event) => {
    event.preventDefault();
    props.onUpdate({ title, genre });
  };

  //   useEffect(() => {
  //     console.log("---dom rendered---");
  //     const itervalId = setInterval(() => {
  //       console.log("---call----");
  //     }, 1000);

  //     return () => {
  //       console.log("--clean---");
  //       clearInterval(itervalId);
  //     };
  //   }, []);

  useEffect(() => {
    console.log("----- call useEffect ----");

    const timeoutId = setTimeout(() => {
      console.log("-----Update setIsValidForm----");

      setIsValidForm(Boolean(title && genre));
    }, 500);

    return () => {
      console.log("--  clean up ---");
      clearTimeout(timeoutId);
    };
  }, [title, genre]);

  return (
    <form className="search-bar">
      <Input
        type="text"
        label="Title"
        placeholder="Title"
        onUpdate={updateTitle}
        onValidate={(v) => Boolean(v) || "Required!!"}
      />
      <Input
        type="text"
        label="Genre"
        placeholder="Genre"
        onUpdate={updateGanre}
        onValidate={(v) => Boolean(v) || "Required!!"}
      />
      <Button onClick={onClickHandler} disabled={!isValidForm}>
        send
      </Button>
    </form>
  );
};

export default memo(SearchBar);
