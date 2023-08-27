import { BlogOne } from "./";

export default {
  title: "BlogOne",
  component: BlogOne,
};

export const Primary = () => (
  <BlogOne
    // bgUrl={bgCustom}
    tag={{ tagName: "Technology", baseClassName: null }}
    title="Lorem ipsum"
    subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, cum esse laudantium veniam veritatis impedit."
    info={["Lorem ipsum", "Dolor sit", "Consectetur adipisicing"]}
    author={{
      avatar: { photo: null, text: "Author" },
      name: "Jane Doe",
      position: "Chief Executive Officer",
    }}
  >
    <div className={null}>
      <span>Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
    </div>
  </BlogOne>
);
