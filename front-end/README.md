# Code Challenge

We need to build a flexible site for displaying products. The site takes a schema, and according to that schema, displays the appropriate products.

## The Schema

Within the schema there is an array of fields which each represent an attribute on the product data object. There is a flow definition of the Field type below. You will also find a `types` directory within each `challenge_` directory that contains the flow definition for the schema.

```
type Field = {
  // when the field is displayed in the UI, the label is used
  "label": string,
  // a unique string for the field
  "key": string,
  "defaultValue": mixed,
  // used to determine if the field is used in the "list" view
  "listOptions": {
    // fields are only used in list view if canList is true
    "canList": boolean,
    "isSortable": boolean
  },
  "primitive": string,
  // the position is used to know what order the fields are displayed in
  "position": number,
  // presentation represents the component to use
  "presentation": string,
  // any validation restrictions will be here
  "restrictions": {
    "max": number,
    "min": number,
    "required": boolean,
    "enums": Array<mixed>
  },
  // fields can be nested within fields
  "fields": Array<Field>,
  // only fields that are inUse are displayed
  "inUse": boolean,
}
```

# Challenge 1
---

Build a React application that consists of two routes. One to list products and one to show the product details.

The two routes should be:
- `/` - showing the list of products
- `/:id` - showing the product details

You will need to mock out the interaction with the backend API. One mock to return the schema and the others to return the product/s.

Hints:
- Use the `presentation` attribute on the schema's field to determine which component to use for display.
- The columns to display in the `list` view should come from the `listOptions` attribute on the field.
- Only fields that are `inUse` should be displayed on either the list or view routes.

# Challenge 2
---

Add a route to edit the product (`/:id/edit`).

You will need to stub out the API endpoint to submit to the server. A method with a `console.log` statement with the updated product will suffice.

# Challenge 3
---

We have realized that our product pages are lacking the required detail. Please add the ability to handle product features. Features are just a nested array of fields.

# Challenge 4
---

Since our application is schema-based, it should be able to handle any data that maps to our schema contract. Add the ability to list, view, and edit users. Use the following routes:

```
/users
/users/:id
/users/:id/edit
```

# Additional Requirements
---

Please use git and separate your work on the challenges by commit or branch.

To help get yourself started, and avoid any lengthy/tedious setup, feel free to use any "base" project that you'd like. We have a simple one here: [javascript-test](https://github.com/powerchordinc/javascript-test).

# Fin
---

You did it! Thank you for completely our code challenge. We're looking forward to seeing what you come up with.
