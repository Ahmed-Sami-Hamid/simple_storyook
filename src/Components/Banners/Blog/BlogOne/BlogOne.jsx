// ui-components
import Spacer from "../../../UI-Kit/Spacer/Spacer";

// libraries
import PropTypes from "prop-types";

// images
import bgDefault from "../../../../Assets/backgrounds/bg_overlay1.png";

// styling
import Style from "./BlogOne.module.css";

const BlogOne = ({
  bgUrl = bgDefault,
  tag = { tagName: "Lorem", baseClassName: null },
  title = "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.",
  subTitle,
  info = ["Popular Now", "January 26, 2022", "5 min read"],
  author,
  children,
}) => {
  return (
    <div
      className={Style.blog}
      style={
        bgUrl && {
          backgroundImage: `url(${bgUrl})`,
        }
      }
    >
      <Spacer md />
      <span className={tag.baseClassName || Style.tag}>{tag.tagName}</span>
      <Spacer xs />
      <h3 className={Style.title}>{title}</h3>
      {subTitle && (
        <>
          <Spacer sm />
          <h4 className={Style.subTitle}>{subTitle}</h4>
        </>
      )}
      <Spacer md />
      <div className={Style.info}>
        {info.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </div>
      <Spacer lg />
      {author && (
        <div className={Style.author}>
          {author.avatar.photo ? (
            <div
              className={Style.avatar}
              style={{
                backgroundImage: author.avatar.photo
                  ? `url(${author.avatar.photo})`
                  : "unset",
              }}
            />
          ) : (
            <span className={Style.avatarText}>{author.avatar.text}</span>
          )}
          <Spacer sm />
          <span className={Style.name}>{author.name}</span>
          {author.position && (
            <>
              <Spacer xs />
              <p className={Style.position}>{author.position}</p>
            </>
          )}
        </div>
      )}
      {children}
      <Spacer md />
    </div>
  );
};

// prop-types checking
const { string, object, array } = PropTypes;

BlogOne.propTypes = {
  bgUrl: string,
  tag: object.isRequired,
  title: string.isRequired,
  subtitle: string,
  info: array.isRequired,
  author: object,
};

export default BlogOne;
