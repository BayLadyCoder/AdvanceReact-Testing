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
  it("Should show correct text for each comment", () => {
    // expect(wrapper.render().text()).toContain("Comment 1");
    // expect(wrapper.render().text()).toContain("Comment 2");
    expect(wrapper.find("li").at(0).text()).toContain("Comment 1");
    expect(wrapper.find("li").at(1).text()).toContain("Comment 2");
  });
});
