import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import dynamic from 'next/dynamic'

export default function Home() {
  return (
    <>
    <Head>
      <title>Helados 4 Bocas - Delivery Page</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@900&display=swap" rel="stylesheet"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    </Head>
    {/* Solucionar error de numero y redireccion */}
    <div className="divContainer">
      <form className="formContainer bg-light" action={process.env.NUMBER}>
        <div className="divInput ">
          <strong><label className="labelInput">Nombre</label></strong>
          <input className="form-control name" type="text" name="name"/>
        </div>
        <div className="divInput">
          <strong><label className="labelInput">Apellido</label></strong>
          <input className="form-control surname" type="text" name="%0Asurname"/>
        </div>
        <div className="divInput">
          <strong><label className="labelInput">Dirección</label></strong>
          <input className="form-control adress" type="text" name='%0Aadress'/>
        </div>
        <button className="form-control btn btn-primary">Ingresar datos</button>
      </form>
      <p className="labelInput textLabelCreator">Creado por Franco Piccirilli</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </>
  )
}