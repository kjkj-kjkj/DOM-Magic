// this uses chai!

describe ('magic of 3 and 5 should be 125' , ()=> {
    expect(CalculateMagic(3, 5)).to.equal(125);
});

describe ('magic of 12 and 30 should be 212' , ()=> {
    expect(CalculateMagic(12, 30)).to.equal(212);
});

describe ('magic of 99 and 1 should be 264' , ()=> {
    expect(CalculateMagic(99, 1)).to.equal(264);
});

describe ('magic of 5 and 2022 should be 59615' , ()=> {
    expect(CalculateMagic(5, 2022)).to.equal(59615);
});
