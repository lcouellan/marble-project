import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";

export default () =>
  <div className="block">
    <div className="block-header">
      <h1 className="title title--big">Hello</h1>
      <h1 className="title">Sign in to your account</h1>
    </div>
    <form action=""
          method="post"
          className="form">
      <input className="form-input"
             id="login"
             name="login"
             placeholder="login"
      />
      <input className="form-input"
             id="password"
             name="password"
             placeholder="name"
      />
      <Link to="/" className="form-sublink">Forgot your password ?</Link>
      <label className="form-submit">
        Sign in
        <input type="submit" className="form-hidden"/>
      </label>
    </form>
    <div className="block-footer">
      <p>Don't have an account ? <Link to="/register">Create one</Link></p>
    </div>

  </div>
