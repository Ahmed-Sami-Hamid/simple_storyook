// components
import AccordionOne from "../AccordionOne";

// enzyme
import Enzyme, { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

// @testing-library/react
import { render, fireEvent, screen } from "@testing-library/react";

// snapshot test
Enzyme.configure({ adapter: new Adapter() });

describe("snapshot testing of component render", () => {
  it("should render with no problem", () => {
    const wrapper = shallow(<AccordionOne heading="Test Heading" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

// unit test
describe("Head click effect on state and icon", () => {
  it("should change isActive state and in turn change of the icon className upon clicking the head element", () => {
    render(<AccordionOne heading="Test Heading" />);
    expect(screen.getByTestId("accordion-icon").className).toBe("icon");
    fireEvent.click(screen.getByTestId("accordion-head"));
    expect(screen.getByTestId("accordion-icon").className).toBe("activeIcon");
  });
});

describe("Props checking", () => {
  describe("Indicator property", () => {
    it("should use the className provided in activeClassName property", () => {
      render(
        <AccordionOne
          heading="Test Heading"
          indicator={{ activeClassName: "testActiveClass" }}
        />
      );
      fireEvent.click(screen.getByTestId("accordion-icon"));
      expect(screen.getByTestId("accordion-icon").className).toBe(
        "testActiveClass"
      );
    });
    it("should use the icon provided in icon property", () => {
      render(
        <AccordionOne
          heading="Test Heading"
          indicator={{
            icon: <img alt="this is provided icon" />,
          }}
        />
      );
      expect(screen.getByTestId("accordion-icon").firstChild.alt).toBe(
        "this is provided icon"
      );
    });
    it("should not render the content if the chidlren is provided", () => {
      render(
        <AccordionOne heading="Test Heading" content="content text">
          <h2>chidlren</h2>
        </AccordionOne>
      );
      expect(
        screen.getByTestId("accordion-body").firstChild.textContent
      ).toEqual("chidlren");
    });
  });
});
