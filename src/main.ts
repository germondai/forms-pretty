import './style.scss'

// base form example
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="w-1/3">
    <form action="" method="post" class="form flex-col gap-2 p-4 rounded-xl shdw">
      <b class="form-title">Form Example</b>
      <div class="field large">
        <input id="username" name="username" type="text" placeholder="x" required />
        <label for="username">Username</label>
      </div>
      <div class="field large">
        <input id="email" name="email" type="email" placeholder="x" required />
        <label for="email">Email</label>
      </div>
      <div class="field">
        <textarea id="message" name="message" placeholder="x" required></textarea>
        <label for="message">Message</label>
      </div>
      <div class="field large">
        <select id="type" name="type" placeholder="x" required>
          <option disabled selected>Select an option</option>
          <option value="ticket">Support Ticket</option>
          <option value="compliment">Compliment</option>
        </select>
        <label for="type">Type</label>
      </div>
      <div class="multi">
        <b>Terms of condition</b>
        <div class="field">
          <div class="box">
            <input id="consent-agree" name="consent" type="radio" required class="w-12" />
            <label for="consent-agree">Agree</label>
          </div>
          <div class="box">
            <input id="consent-disagree" name="consent" type="radio" required />
            <label for="consent-disagree">Disagree</label>
          </div>
        </div>
      </div>
      <div class="multi">
        <div class="field">
          <input id="newsletter" name="newsletter" type="checkbox" />
          <label for="newsletter">Newsletter</label>
        </div>
      </div>
      <button type="submit" class="form-btn">Send</button>
    </form>
  </div>
`
