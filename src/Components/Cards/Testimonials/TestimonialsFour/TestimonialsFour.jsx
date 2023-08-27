// ui-components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import avatarDefault from "../../../../Assets/avatars/avatar_t4.png";

// styling
import Style from "./TestimonialsFour.module.css";

const TestimonialsFour = ({
  avatarUrl = avatarDefault,
  name = "Jane Doe",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultricies massa, in finibus massa laoreet id. Proin pharetra ante id dolor ornare elementum.Maecenas sodales ex vitae est elem.",
}) => {
  return (
    <div className={Style.testimonial}>
      <h3 className={Style.name}>{name}</h3>
      <Spacer sm />
      <div className={Style.content}>
        <p>{content}</p>
      </div>
      <Spacer md />
      <div className={Style.avatarStar}>
        <div
          className={Style.avatar}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        />
        <div className={Style.stars} />
      </div>
    </div>
  );
};

// prop-types checking
const { string } = PropTypes;

TestimonialsFour.propTypes = {
  avatarUrl: string.isRequired,
  name: string.isRequired,
  content: string.isRequired,
};

export default TestimonialsFour;
