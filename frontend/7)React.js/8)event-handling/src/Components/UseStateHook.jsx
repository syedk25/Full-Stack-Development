 import { useState } from 'react' 
 
 function LoginForm() {

  const [form, setForm] = useState({ username: "", password: "" });

  function handleChange(event) {
    const { name, value } = event.target; 
    setForm(prev => ({ ...prev, [name]: value }));
  }

  return (
    <form>
      <input type="text" name="username" value={form.username} onChange={handleChange} placeholder="Username"/>
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password"/>
      <p>Username: {form.username}</p>
      <p>Password: {form.password}</p>
    </form>
  );
}
export { LoginForm };