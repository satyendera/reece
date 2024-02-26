import { shallow, configure } from "enzyme";
import TripItem from "../components/TripItem";
import Adapter from "@cfaester/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });
// Renders a div with class 'group min-h-60'
it("should render a div with class 'group min-h-60'", () => {
  const tripData = {
    heroImage: "image-url",
    unitName: "Unit 1",
    unitStyleName: "Style 1",
    checkInDate: new Date(),
  };

  const wrapper = shallow(<TripItem {...tripData} />);
  expect(wrapper.find(".group.min-h-60")).toHaveLength(1);
});

// The TripItem component should render the correct unit name

// Renders the correct unit name
it("should render the correct unit name", () => {
  const tripData = {
    heroImage: "image-url",
    unitName: "Unit 1",
    unitStyleName: "Style 1",
    checkInDate: new Date(),
  };

  const wrapper = shallow(<TripItem {...tripData} />);
  expect(wrapper.find("h3").at(0).text()).toEqual("Unit name - Unit 1");
});

// Renders trip item with an empty unit name
it("should render trip item with an empty unit name", () => {
  const tripData = {
    heroImage: "image-url",
    unitName: "",
    unitStyleName: "Style 1",
    checkInDate: new Date(),
  };

  const wrapper = shallow(<TripItem {...tripData} />);
  expect(wrapper.find("h3").at(0).text()).toEqual("Unit name - ");
});
// Renders trip item with an invalid hero image URL
it("should render trip item with an invalid hero image URL", () => {
  const tripData = {
    heroImage: null as string,
    unitName: "Unit 1",
    unitStyleName: "Style 1",
    checkInDate: new Date(),
  };

  const wrapper = shallow(<TripItem {...tripData} />);
  expect(wrapper.find("img").prop("src")).toBeNull();
});
