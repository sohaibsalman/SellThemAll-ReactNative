import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { string } from "yup/lib/locale";

import AppForm from "../components/AppForm";
import AppFormField from "../components/AppFormField";
import AppFormPicker from "../components/AppFormPicker";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <AppFormField autoCorrect={false} name="title" placeholder="Title" />
        <AppFormField
          autoCorrect={false}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormField
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
});

const categories = [
  {
    label: "Clothing",
    value: 1,
  },
  {
    label: "Furniture",
    value: 2,
  },
  {
    label: "Cameras",
    value: 3,
  },
];

export default ListingEditScreen;
