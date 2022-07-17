import React, { useContext } from 'react'
import { appContext } from '../../context'
import { MapWrapper, TextDescriptivo, Direccion } from "../style";

export const Map = () => {
  const { language: { menu, titles, address } } = useContext(appContext)
  // const coords = "https://maps.google.com/maps?q=Cali,+Valle+del+Cauca,+Colombia/@3.395397,-76.665753,11z/data=!3m1!4b1!4m5!3m4!1s0x8e30a6f0cc4bb3f1:0x1f0fb5e952ae6168!8m2!3d3.4516467!4d-76.5319854?hl=en=&output=embed"
  const coords = "https://maps.google.com/maps?q=calle%2010%2019%20la%20torre%20rozo+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;?hl=en=&output=embed"

  return (
    <>
      <TextDescriptivo>{titles[2]}</TextDescriptivo>
      <MapWrapper
        data-aos="fade-right"
        id={menu[2]}
        src={coords}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0">
      </MapWrapper>
      <Direccion>{address}</Direccion>
    </>
  )
}