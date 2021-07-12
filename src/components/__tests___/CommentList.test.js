import React from "react";
import Root from "Root";
import { mount } from "enzyme";
import CommentList from "components/CommentList";

let wrapper;
const initialState = {
  comments: ["Comment 1", "Comment 2"],
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("CommentList", () => {
  it("Should create one <li> per comment", () => {
    expect(wrapper.find("li").length).toEqual(2);
  });
});
