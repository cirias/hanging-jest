describe('another', () => {
  it('should wait', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
  });
})
