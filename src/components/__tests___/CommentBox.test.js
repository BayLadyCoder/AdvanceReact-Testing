import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("CommentBox", () => {
  it("Should have a textarea and a button", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("Should have a textarea that users can type in", () => {
    const textarea = wrapper.find("textarea");
    // text area starts empty
    expect(textarea.prop("value")).toEqual("");
    // simulate change event
    textarea.simulate("change", { target: { value: "new comment" } });
    // force component to re-render (update)
    textarea.update();
    // textarea value updated to 'new comment'
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });
});
