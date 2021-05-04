import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { ItemContext } from "../context/Items/ItemContext";
import { useState, useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AddCategory = () => {
  const {
    user: { sub },
  } = useAuth0();
  let { postNewCategory } = useContext(ItemContext);
  let [title, setTitle] = useState("");

  let post = (e) => {
    e.preventDefault();
    postNewCategory({ title: title, user_id: sub });
  };
  return (
    <Form onSubmit={(e) => post(e)}>
      {console.log(title)}
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="text"
          id="title"
          placeholder="Create new quicklist"
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default AddCategory;
