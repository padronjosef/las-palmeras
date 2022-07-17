import React, { useContext } from 'react'
import { appContext } from '../../context'
import { WrapperAbout, WrapperAboutDescription, TextDescriptivo } from '../style'

export function About() {
  const { language: { menu, description, titles } } = useContext(appContext)
  return (
    <WrapperAbout id={menu[0]}>
      <TextDescriptivo>{titles[0]}</TextDescriptivo>
      <WrapperAboutDescription>
        {description.map((item, index) =>
          <p key={index}>{item}</p>
        )}
      </WrapperAboutDescription>
    </WrapperAbout>
  )
}
