import React from 'react'
import './Form.css'

class Form extends React.Component {
  render() {
    return (
      <form action="/action_page.php">
        <div class="container_row">
          <label for="fname">Standup Duration</label>
        </div>
        <div class="container_row">
          <input type="text" id="fname" name="firstname" placeholder="15:00" />
        </div>
        <div class="container_row">
          <label for="lname">Number of Participants</label>
        </div>
        <div class="container_row">
          <input type="text" id="lname" name="lastname" placeholder="5" />
        </div>

        {/* <label for="country">A misc drop down for your thoughts</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select> */}
        <input type="submit" value="Begin meeting" />
      </form>
    )
  }
}

export default Form;
