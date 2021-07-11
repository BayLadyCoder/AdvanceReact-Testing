import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapper;

// run this before every single test
beforeEach(() => {
  wrapper = shallow(<App />);
});

describe("App", () => {
  it("Should show a comment box", () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
  });
  it("Should show a comment list", () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
  });
});
