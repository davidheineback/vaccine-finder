import React from 'react'
import styled from 'styled-components'
import { StyledBackArrow } from '../../Utilities/BackArrow/BackArrowStyles'
import { Link } from 'react-router-dom'

const StyledAbout = styled.div`
  margin: 5px;
  margin-bottom: 10px;
  text-align: left;
  ${props => props.header && {
    textAlign: 'center',
    textTransform: "uppercase",
    fontWeight: "600",
  }}
`

function About() {
  return (
    <div>
      <Link to='/'>
      <StyledBackArrow/>
      </Link>
      <StyledAbout header>Om</StyledAbout>
      <StyledAbout>hittavaccintid.se är ett enklare sätt att söka efter lediga tider för vaccination mot covid-19.</StyledAbout>
      <StyledAbout>Vi utför inga bokningar eller hanterar några personuppgifter.</StyledAbout>
      <StyledAbout header>hur?</StyledAbout>
      <StyledAbout>Vi använder oss av samma API som 1177 för att hitta lediga tider efter dina önskemål. Hittar du en dag med lediga tider som passar dig så vidarebefordras du till bokningssidan hos din region.</StyledAbout>
      <StyledAbout>För de regioner som vi ännu inte kan hantera finns det en länk direkt till bokningssidan för just den regionen.</StyledAbout>
      <StyledAbout header>varför?</StyledAbout>
      <StyledAbout> hittavaccintid.se skapades för att vi såg att det var svårt för användare att dels hitta till den sidan där man kan se lediga tider/boka och dels krävdes det många klick/sökningar för att hitta lediga tider.</StyledAbout>
      <StyledAbout> Du kan heller aldrig riktigt säkert veta om det finns någon ledig tid eller inte på nästkommande vecka vilket gör att du behöver fortsätta söka eller ge upp.</StyledAbout>
    </div>
  )
}

export default About
