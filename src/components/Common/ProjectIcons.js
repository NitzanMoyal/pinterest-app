import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import {pinterest} from 'react-icons-kit/fa/pinterest'
import {speech_bubble_2} from 'react-icons-kit/ikons/speech_bubble_2'
import {bell} from 'react-icons-kit/ikons/bell'
import {more} from 'react-icons-kit/ikons/more'
import {search} from 'react-icons-kit/fa/search'

const PinterestIcon = 
    withBaseIcon({ size: 30, style: {color: '#bd081c',padding: '0 16px 0 0', width: '5%'}
})
const HeaderIcons = 
    withBaseIcon({ size: 25, style: {color: '#8e8e8e'}})


export const HeaderLogo = () => <PinterestIcon icon={pinterest}/>
export const ChatIcon = () => <HeaderIcons icon={speech_bubble_2}/>
export const NotificationIcon = () => <HeaderIcons icon={bell}/>
export const MoreIcon = () => <HeaderIcons icon={more}/>
export const SearchIcon = () => <HeaderIcons icon={search}/>

