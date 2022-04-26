import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import Header from '../components/Header'

export default function Home({ sabores }) {
  return (
    <>
    <Header/>
    {/* Solucionar error de numero y redireccion */}
    <div className="divContainer">
      <form className="formContainer bg-light" action={`https://wa.me/5491141414141`}> {/* El numero es falso, puedes corregirlo con un env.local o modificarlo desde aqui! :D */}
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
        <div className="divInput">
          <strong><label className="labelInput">Tamaño del empaque</label></strong>
          <select name="select" className='form-control'>
            <option value="value1">1 kilo</option>
            <option value="value2" selected>1/4</option>
          </select>
        </div>
        <div className="divInput">
          <strong><label className="labelInput">Sabor del Helado</label></strong>
          <select name="select" className='form-control'>
            {
              sabores.map((sabor) => {
                return (
                  <option key={sabor.id}>{sabor.nombre}</option>
                )
              })
            }
          </select>
        </div>
        <button className="form-control btn btn-primary">Ingresar datos</button>
      </form>
      <p className="labelInput textLabelCreator">~ Creado por Franco Piccirilli 🌌 </p>
    </div>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://localhost:3000/heladoSabores.json')
  const json = await res.json()
  return {
    props: {
      sabores: json,
    }
  }
}