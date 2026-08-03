export default function ContactForm() {
  return (
    <form className="contactForm">
      <label>
        Name
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" name="email" placeholder="your@example.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows="4" placeholder="Tell me about your project" />
      </label>
      <button type="submit">Send message</button>
    </form>
  );
}
