import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("Actions: saveComment()", () => {
  it("Should have the correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it("Should have the correct payload", () => {
    const action = saveComment("New comment!");
    expect(action.payload).toEqual("New comment!");
  });
});
