describe('Blank', () => {
    it('upButton is ok', function () {
        browser.url('/')
        browser.waitForVisible('#main')
        const elem = $('#ul-id-0-20');
        elem.scroll();
        $('#upbutton-container').click()
    });
});