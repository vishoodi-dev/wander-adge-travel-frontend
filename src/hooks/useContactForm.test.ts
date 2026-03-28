import { renderHook } from "@testing-library/react";
import { useContactForm } from "./useContactForm";
import { INITIAL_VALUES } from "../utils/contactFormValidation";

describe("useContactForm", () => {
  it("should initialize with default values", () => {
    const { result } = renderHook(() => useContactForm());

    expect(result.current.values).toEqual(INITIAL_VALUES);
    expect(result.current.errors).toEqual({});
    expect(result.current.isSubmitting).toBe(false);
    expect(result.current.submitMessage).toBe("");
  });
});