import React from "react";
import Status from "./Status";
import {create} from "react-test-renderer";

describe("Status component", () => {
    test("status from props should be in state", () => {
        const component = create(<Status status = "Hello, my friends!" />)
        const instance = component.getInstance()
        expect(instance.state.localStorageStatus).toBe("Hello, my friends!")
    })
})