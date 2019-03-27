import React from 'react'
import AppRouter from './Public/AppRouter'
import Bottom from "./Public/Animations/Bottom"
import Center from "./Public/Animations/Center"

export default () =>
<main className="container">
  <div className="layout layout--full">
    <img className="layout__logo" src="images/logo.png" alt="Logo"/>
    <AppRouter/>
    <Center></Center>
    <Bottom></Bottom>
  </div>
</main>
