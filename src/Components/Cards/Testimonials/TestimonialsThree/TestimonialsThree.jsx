// ui-components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import avatarDefault from "../../../../Assets/avatars/avatar_t3.png";

// styling
import Style from "./TestimonialsThree.module.css";

const TestimonialsThree = ({
  avatarUrl = avatarDefault,
  name = "Jane Doe",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultricies massa, in finibus massa laoreet id.",
}) => {
  return (
    <div className={Style.testimonial}>
      <div
        className={Style.avatar}
        style={{
          backgroundImage: `url(${avatarUrl})`,
        }}
      />
      <Spacer sm />
      <h3 className={Style.name}>{name}</h3>
      <Spacer xs />
      <div className={Style.stars} />
      <Spacer md />
      <p className={Style.content}>{content}</p>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

TestimonialsThree.propTypes = {
  avatarUrl: string.isRequired,
  name: string.isRequired,
  content: string.isRequired,
};

export default TestimonialsThree;
