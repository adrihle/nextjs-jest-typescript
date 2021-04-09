import { useEffect } from 'react'
// se importan los componentes que queramos usar
import { Hello } from '../components/'

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
      <Hello {...data} />
    </div>
  )
}

// ?? este metodo tambien se puede usar como el getStaticProps, pero esta deprecated ya
// Home.getInitialProps = async (): Promise<unknown> => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json()
//   showData(data, 'server')
//   // los devolvemos a la funcion jsx en forma de props
//   return { data }
// }

// por este metodo ejecutamos funciones antes que renderice la pagina (SSR)
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
