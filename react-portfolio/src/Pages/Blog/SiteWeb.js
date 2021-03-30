import React from 'react'
import Tittle from '../../Components/Tittle'
import ImageSection from '../../Components/ImageSection';
import SkillsSection from '../../Components/SkillsSection';
import ServicesSection from '../../Components/ServicesSection';
import design from '../../img/design.svg';
import logo from '../../img/logoApolline.jpg';
import BlogArticles from '../../Components/BlogArticles';

function SiteWeb() {
    return(
        <div className="AboutPage">
            <Tittle title={'Site web'} span={'Site web'} />
            <BlogArticles/>
        </div>
    )
}


export default SiteWeb;