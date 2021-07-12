import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />); // every time when use mount(), must unmount() when the test is done
});

afterEach(() => {
  wrapper.unmount();
});

describe("CommentBox: Overview", () => {
  it("Should have a textarea and a button", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });
});

describe("CommentBox: Textarea", () => {
  let textarea;

  beforeEach(() => {
    textarea = wrapper.find("textarea");
    // text area starts empty
    expect(textarea.prop("value")).toEqual("");
    // simulate change event
    textarea.simulate("change", { target: { value: "new comment" } });
    // force component to re-render (update)
    textarea.update();
  });

  it("Should have a textarea that users can type in", () => {
    // textarea value updated to 'new comment'
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("When form is submitted, textarea should be empty", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");

    const form = wrapper.find("form");
    // simulate submit event
    form.simulate("submit", { preventDefault: () => {} });
    form.update();
    // textarea value updated to be empty
    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});
