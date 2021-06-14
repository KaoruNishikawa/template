"use strict"

const { add } = require("../src/example")

test("Example test", () => {
    expect( add(1, 2) ).toBe( 3 )
})
