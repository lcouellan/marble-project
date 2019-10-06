import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route, Link } from "react-router-dom";
import BlockTop from "./Animations/BlockTop"
// import BlockTop2 from "./Animations/BlockTop2"
import BlockBottom from "./Animations/BlockBottom"

export default () =>
  <div className="block block--center">
    <div className="block-header">
      <h1 className="title title--big">Hello</h1>
      <h2 className="title title--small">Sign in to your account</h2>
    </div>
    <form action=""
          method="post"
          className="form">
      <input className="form-input"
             type="text"
             id="login"
             name="login"
             placeholder="Login"
      />
      <input className="form-input"
             type="password"
             id="password"
             name="password"
             placeholder="Password"
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
    <BlockTop></BlockTop>
    <BlockBottom></BlockBottom>
    {/* <BlockTop2></BlockTop2> */}
  </div>

