import React, { useEffect } from "react"
import Page from "./Page"

function About() {
  return (
    <Page title="About Us">
      <h2>About Us</h2>
      <p className="lead text-muted">
        This app has been created as a personal project using the directions in the UDEMY training course <strong>React for the rest of us</strong>
      </p>
      <p>
        Please forward all questions/inquiries and bugs to my email by clicking <a href="mailto:tonizeno5@gmail.com">Here</a>
      </p>
      <p>
        <strong>PS: Testing credentials:</strong>
        <br />
        <i>username: test</i>
        <br />
        <i>password: test12345678</i>
      </p>
    </Page>
  )
}

export default About
