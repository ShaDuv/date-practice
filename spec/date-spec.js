describe('Day of the Week', function() {
  it('should display day of the week based on user input', function() {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const testDow = new Date('June 5, 2019');
    expect(days[testDow.getDay()]).toEqual('Wednesday');
  });

  });
