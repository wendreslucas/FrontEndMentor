import React from 'react'
import ThemeOn from '../../../public/themeOn.svg'
import ThemeOff from '../../../public/themeOff.svg'
import { Icone } from '../ui/ui'

const claro = <Icone src={ThemeOn} alt="tema claro" />
const escuro = <Icone src={ThemeOff} alt="tema escuro" />

// eslint-disable-next-line import/no-anonymous-default-export
// eslint-disable-next-line react/display-name
export default ({ tema }) => (tema ? escuro : claro)
