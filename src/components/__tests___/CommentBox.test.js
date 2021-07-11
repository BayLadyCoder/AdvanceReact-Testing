import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

describe("CommentBox", () => {
  it("Should have a textarea and a button", () => {
    const wrapper = mount(<CommentBox />);

    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });
});
