// ui-components
import Spacer from "../../../../Components/UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import avatarDefault from "../../../../Assets/avatars/avatar_t2.png";

// styling
import Style from "./TestimonialsTwo.module.css";

const TestimonialsTwo = ({
  avatarUrl = avatarDefault,
  name = "John Doe",
  company = "Compnay Name",
  content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla ultricies massa, in finibus massa laoreet id. Proin pharetra ante id dolor ornare elementum.Maecenas sodales ex vitae est elem.",
}) => {
  return (
    <>
      {/* spacer preserving absolute avatar space */}
      <Spacer md />
      <div className={Style.testimonial}>
        <div
          className={Style.avatar}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        />
        <Spacer md />
        <h3 className={Style.name}>{name}</h3>
        <Spacer xs />
        <p className={Style.company}>{company}</p>
        <Spacer md />
        <div className={Style.content}>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

// prop-types checking
const { string } = PropTypes;

TestimonialsTwo.propTypes = {
  avatarUrl: string.isRequired,
  name: string.isRequired,
  company: string.isRequired,
  content: string.isRequired,
};

export default TestimonialsTwo;
