import React, { Dispatch, SetStateAction } from 'react'
import ShowModalForm from '../modal/ShowModalForm'
import ButtonGroupSelect from '../button/btnGroup/ButtonGroupSelect'

interface MyfilterMenProps {
  titleFilter: string,
  indexRole? : number,
  setIndexRole? : Dispatch<SetStateAction<number>>
}

export default function FilterMenu(props: MyfilterMenProps) {
  return (
    <>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
          background: ''
        }}
      >
        <h1>{props.titleFilter}</h1>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ShowModalForm />
          <ButtonGroupSelect indexRole={props.indexRole} setIndexRole={props.setIndexRole} />
        </div>
      </div>
      <p style={{
        background: "#EEEEEE",
        width: "100%",
        height: "1px",
        marginTop: "15px  ",
      }}></p>
    </>
  )
}
