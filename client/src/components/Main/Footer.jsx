import { Grid } from '@mui/material'
import React from 'react'
import Movflix from '../../assets/images/logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footerHome from '../../assets/styles/footer.module.css'
import cardsVisa from '../../assets/images/card_img.png'
import { Link } from 'react-router-dom'
import EditLocationIcon from '@mui/icons-material/EditLocation';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import DraftsIcon from '@mui/icons-material/Drafts';
const Footer = () => {
    return (
        <footer style={{ width: '100%' }}>

            <div className={footerHome.footer} style={{ padding: '30px 50px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <ul style={{ color: 'white', listStyle: 'none', lineHeight: '2em' }}>
                            <li><img width={200} src={Movflix} alt='logo' /></li>
                            <li>Movflx Online the relase etras thats sheets continig passag.</li>
                            <li> <EditLocationIcon /> Address : PO Box W75 Street</li>
                            <li><HeadphonesIcon />  Phone : +24 1245 654 235</li>
                            <li><DraftsIcon />  Email : info@exemple.com</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <ul style={{ color: 'white', listStyle: 'none', lineHeight: '2.5em' }}>
                            <li><h2>Categories</h2></li>
                            <li>Action Movies</li>
                            <li>Horror</li>
                            <li>Movies</li>
                            <li>Streaming</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <ul style={{ color: 'white', listStyle: 'none', lineHeight: '2.5em' }}>
                            <li><h2>Recent Posts</h2></li>
                        </ul>
                    </Grid>



                    <Grid item xs={12} sm={6} md={3}>

                        <ul style={{ color: 'white', listStyle: 'none', lineHeight: '2.5em' }}>
                            <li><h2>Follow us</h2></li>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <li><Link to='https://www.facebook.com/ColorsTV/'><FacebookIcon style={{ color: 'rgb(59,89,152)', fontSize: '45px' }} /></Link></li>
                                <li><Link to='https://twitter.com/ColorsTV?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><TwitterIcon style={{ color: 'rgb(85,172,238)', fontSize: '45px' }} /></Link></li>
                                <li><Link to='https://in.pinterest.com/ColorsTv/'><PinterestIcon style={{ color: 'rgb(215,30,24)', fontSize: '45px' }} /></Link></li>
                                <li><Link to='https://www.linkedin.com/company/colorstv'><LinkedInIcon style={{ color: 'rgb(21,101,192)', fontSize: '45px' }} /></Link></li>
                            </div>
                        </ul>

                    </Grid>
                </Grid>
            </div>

            <div style={{  padding: '15px 40px', backgroundColor: '#222' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ color: 'gray',margin: 0 }}>Copyright © 2022 All Rights Reserved By Movflx</p>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src={cardsVisa} alt='cards' />
                    </Grid>
                </Grid>
            </div>
        </footer>

    )
}

export default Footer