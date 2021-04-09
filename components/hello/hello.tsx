// importamos el stylesheet en una variable para asignarla, nextjs no permite el uso
// de tags, solo clases o id, aqui se hace al reves, se crea en sass y luego se asigna
// en el jsx
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './hello.module.sass'
import Link from 'next/link'

export const Hello: React.FC<any> = ({ data }): JSX.Element => {
  const [name, setName] = useState('')
  const [lista, setLista] = useState(data)

  // otra forma de usarlo, es pasarle una variable al array, asi dispara con
  // cada cambio que haga como un listener de esa variable
  useEffect(() => {
    setLista(filterUsers(data, name))
  }, [name])

  return (
    <div className={styles.body}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="filter"
      />
      {/* la forma de introducir codigo js es con las llaves {} */}
      <div className={lista.length ? styles.container : styles.empty}>
        {lista.length ? (
          lista.map((user: any) => {
            return (
              // para rutas dinamicas hay que incluir el decorador as para que no
              // refresque la pagina entera
              <Link href="/[person]" as={`/${user.name}`} key={user.id}>
                <div className={styles.box}>
                  <h2 className={styles.title}>{user.name}</h2>
                </div>
              </Link>
            )
          })
        ) : (
          <div>
            <Image src="/icons-mmm.svg" alt="me" width="64" height="64" />
            <p>Smell like bitch here...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const filterUsers = (arr: [], name: string): Array<unknown> => {
  return arr.filter((user: any) => {
    return user.name.match(name)
  })
}
