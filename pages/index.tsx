import { useEffect } from 'react'
// se importan los componentes que queramos usar
import { Hellow } from '../components/hello/hello'

// se puede usar funciones o clases, depende de la finalidad
export const Home = (data: []): JSX.Element => {
  // esto es equivalente a los ciclos de vida de los componentes
  // depende de como lo estructures es uno u otro
  useEffect(() => {
    showData(data, 'browser')
  }, [])

  // la funcion retorna un jsx
  return (
    <div className="container">
      {/* de esta manera pasamos props al children, hay muchas mas formas */}
      <Hellow {...data} />
    </div>
  )
}

// // por este metodo ejecutamos funciones antes que renderice la pagina (SSR)
// Home.getInitialProps = async (): Promise<unknown> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()
//   showData(data, 'server')
//   // los devolvemos a la funcion jsx en forma de props
//   return { data }
// }

export const getStaticProps = async (): Promise<unknown> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  showData(data, 'server')
  // los devolvemos a la funcion jsx en forma de props
  return {
    props: {
      data,
    },
  }
}

const showData = (data: any, from: string): void => {
  console.log(`____FROM ${from.toUpperCase()}____\n`, data)
}

// hay que exportar default en las paginas siempre para que funcione
export default Home
