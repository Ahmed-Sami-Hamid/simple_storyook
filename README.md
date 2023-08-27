# Components Library

## A ready-to-use React components library

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)

A ready-to-use components library based on [React](https://reactjs.org/) and [Hybris-software/UI-Kit](https://link-url-here.org). Components Library makes it easier to create your own custom React project within couple of days.

## Features

- Wide variety of commonly-used components simply presented using Storybook.
- Stand-alone well-documented components with data and styling on the same folder.
- Drag and drop ready-made components into website layout.
- Customize components' text and image content using props or data files.
- Apply your own styling on the components through inline style.

## Usage

1. Choose from wide variety of multiple variants of commonly-used website sections e.g. Headers, Heroes, ...etc.
2. Drag and drop your chosen components into the website layout.
3. Pass your own props to change components text and images content or edit the data.js files inside the component folder.
4. Change component styling by writing a couple of inline style in the layout.
5. Deploy your custom maintainable React website.

## Technologies

- [ReactJS](https://reactjs.org/): Along with CSS Style Modules.
- [Hybris-software/UI-Kit](https://github.com/Hybris-Software/ui-kit/tree/main/src/Components).
- [Storybook](https://storybook.js.org/).
- [Prop-types](https://www.npmjs.com/package/prop-types).
- [Jest](https://jestjs.io/).
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
- [Cypress](https://testing-library.com/docs/react-testing-library/intro).

## Installation

Components library depends on NodeJS, React and Storybook. Start by installing the dependencies and dev-dependencies then start the server.

```sh
npm install
```

This will install all the library dependencies and now you are ready to start the server.

```sh
npm run storybook
```

This will run the project on your localhost server (localhost:6006).

## Components

### Accordions

Accordion is about toggling the body content upon clicking the head with a indicator icon to show the openening status of the accordion.

- #### AccordionOne

  Accepts the following props:

  1. indicator (object, optional) includes:

     - icon: the head indicator icon accepts both svg/img.
     - activeClassName: accepts the open-state className.

  2. heading (string, required),
  3. content (string, optional)

  Note: You can pass children to change the accordion body content, children overwrite the content so if you wanna replace the content text use the content property, but if you wanna put your own content use children.

<<<<<<< HEAD
```
<AccordionOne
    indicator={{ icon: <BiAperture />, activeClassName: Style.activeIcon }}
    heading="Component Library"
>
  <img src={image} alt='image' />
  <p className={Style.content}>Lorem ipusm dolor sit amet.</p>
</AccordionOne>
```


### Lists

Lists are used to display data in an ordered format and mainly used to display images and texts .

- #### ListOne
  Accepts the following props:
  1.  bgUrl (string , optional) accepts url string to change the banner background-image,
  2.  icon (node, optional): accepts svg icon e.g. react-icons, it overwrites the backgroundImage if provided together.
  3.  body (object, optional) includes: - heading (string , optional), - content (string , optional),
      Note: You can pass children to change the heading and content, children overwrite the body so if you want to replace the heading and content text use the content property, but if you wanna put your own content use children.

```
<ListOne
  body={{ heading: "Component Library", content: "Lorem ipusm dolor sit amet." }}
  icon={<BiAperture />}
/>
```
=======
  ```
  <AccordionOne
      indicator={{ icon: <BiAperture />, activeClassName: Style.activeIcon }}
      heading="Component Library"
  >
    <img src={image} alt='image' />
    <p className={Style.content}>Lorem ipusm dolor sit amet.</p>
  </AccordionOne>
  ```

### Banners

Banners is about displaying the data in certain layout providing information about some portion of the website.

- #### BlogOne

  Accepts the following props:

  1. bgUrl (string, optional): accepts url string to change the banner background-image,
  2. tag (object, required) includes:

     - tagName: accepts string to change the tag text.
     - baseClassName: accepts className purpose is to change the icon pesudo ::before element consider the following code snippet for better understanding:

     ```
     .newTagClassName::before {
        /* place your CSS code here to replace tag icon */
     }
     ```

  3. title (string, required): accepts string to change the banner heading text content.
  4. subtitle (string, optional): accepts string to change the banner subtitle text content.
  5. info (array of strings, required): accepts list of information needed to be provided for the blog article.
  6. author (object, optional) includes:
     - name: accepts string to change the author name.
     - position: accepts string to change the author position.
     - avatar: accepts object to change the author avatar includes:
       - photo: accepts url string to place author photo.
       - text: accepts string as alternative if there is no photo provided defaults to "Author".

  Note: You can pass children to add some more content at the end of the banner component if required.

  ```
  <BlogOne
    bgUrl={bgCustom}
    tag={{ tagName: "Technology", baseClassName: Style.customClassName }}
    title="Heading lorem"
    subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum esse laudantium veniam veritatis impedit."
    info={["Lorem ipsum", "Dolor sit", "Consectetur adipisicing"]}
    author={{
      avatar: { photo: avatarCustom, text: "Author" },
      name: "Jane Doe",
      position: "Chief Executive Officer",
    }}
  >
    <div className={Style.childrenClassName}>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
    </div>
  </BlogOne>
  ```
>>>>>>> 34e0355a77f14945addec9854d3474b97ed8b958
