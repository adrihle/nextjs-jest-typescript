// con esto pillamos los datos en el query del url como el nombre
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

// esto es una pagina dinamica, segun los datos que manden apuntando a esta pagina
// se adapta al contenido que le llega
const PersonPage = ({ data }: Person): JSX.Element => {
  const router = useRouter()
  console.log(data)
  return (
    <div>
      <div>{router.query.person} Page (desde front)</div>
      <div>{data.name} Page (desde server)</div>
    </div>
  )
}

export default PersonPage

// para paginas dinamicas hay que usar getServerSideProps (atento al ctx)
export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
): Promise<unknown> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  let data = await res.json()

  // aqui filtramos los datos en el server
  data = data.filter((person) => {
    // con el ctx (contexto) tambien podemos pillar los parametros del query
    return person.name.match(ctx.query.person)
  })
  console.log('____FROM PERSON PAGE SERVER____')
  console.log(data)
  // los devolvemos a la funcion jsx en forma de props
  return {
    props: {
      data: data[0],
    },
  }
}

interface Person {
  data: Record<string, string>
}
