// importamos el stylesheet en una variable para asignarla, nextjs no permite el uso
// de tags, solo clases o id, aqui se hace al reves, se crea en sass y luego se asigna
// en el jsx
import { useEffect, useState } from 'react'
import styles from './hello.module.sass'

export const Hellow: React.FC<any> = ({ data }): JSX.Element => {
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
      <div className={styles.container}>
        {lista.map((user: any) => {
          return (
            <div className={styles.box} key={user.id}>
              <h2 className={styles.title}>{user.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const filterUsers = (arr: [], name: string): Array<unknown> => {
  return arr.filter((user: any) => {
    return user.name.match(name)
  })
}
