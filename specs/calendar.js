module.exports = {
  'Calendar loads at least one meetup': browser => {
    const lansingcodes = browser.page.lansingcodes()
    lansingcodes.navigate()
    lansingcodes.expect.section('@calendar').to.be.present

    const calendar = lansingcodes.section.calendar
    calendar.expect.element('@fullWidthCalendar').to.be.visible.before(5000)
    calendar.expect.element('@meetupLinks').to.be.visible
    
    browser.end()
  }
}
