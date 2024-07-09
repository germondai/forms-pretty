import './style.scss'

// base form example
document.querySelector<HTMLStyleElement>('style')!.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

    color-scheme: light;
    @media (prefers-color-scheme: dark) { color-scheme: dark; }
  }

  html,
  body,
  #app {
    width: 100%;
    height: -webkit-fill-available;
    min-height: 100vh;
    display: grid;
    place-items: center;
    overflow-x: hidden;
  }

  .cont {
    width: calc(100% / 3);
    padding: 8px 0;
  }

  .form {
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 12px;

    background-color: #f1f1f1;
    @media (prefers-color-scheme: dark) { background-color: #121316; }
  }

  @media (max-width: 1440px) {
    .cont {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .cont {
      width: 95%;
    }
  }
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="cont">
    <form action="" method="post" class="form form-overflow shdw">
      <b class="form-title">Form Example</b>
      <div class="field large">
        <input id="fullname" name="fullname" type="text" placeholder="x" required />
        <label for="fullname">Full Name</label>
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
            <input id="consent-agree" name="consent" type="radio" required />
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
      <div class="field large">
        <input id="attachment" name="attachment" type="file" placeholder="x" />
        <label for="attachment">Attachment</label>
      </div>
      <button type="submit" class="form-btn">Send</button>
    </form>
  </div>
`
