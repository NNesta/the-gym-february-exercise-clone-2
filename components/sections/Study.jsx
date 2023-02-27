import React from 'react';
import Wrapper from '../ui/Wrapper';
import Title from '../ui/Title';
import StudyCard from '../ui/StudyCard';

const Study = () => {
  return (
    <div className='bg-[#F1F1F1]'>
       <Wrapper>
        <div className=" pt-14 pb-24">
            <Title>Studies and courses open to all  </Title>
            {/* <p className='text-[18px] leading-[26px] tracking-[0.15px] max-w-[914px]'>At Aalto University, we create the conditions for innovation, economic growth, employment and wellbeing. A gift to the university is an investment in a better future.</p> */}
            <div className='grid lg:grid-cols-3 gap-4'>
            {
                [
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2022-06/_DSC8513_Original.jpg?h=676a11fc&itok=t3s-HUoC",
                        title: "Research & Art",
                        description:"Our research focuses on seven key areas combining four core competences in the fields of ICT, materials, arts, design and business together with three grand challenges related to energy, living environment, and health."
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2018-08/unto_rautio_aalto_1195_weblarge.jpg?h=729d90ce&itok=oX5NKBMt",
                        title:"Give for the future",
                        description: 'Join us in building a sustainable future! Together we can solve some of the toughest problems of our time.'
                    },
                    {
                        image:"https://www.aalto.fi/sites/g/files/flghsv161/files/styles/2_3_819w_356h_d/public/2019-12/musta_kysymys_suomi.png?h=5bde62e5&itok=h8s8WUgA",
                        title:"Give for the future",
                        description: 'Join us in building a sustainable future! Together we can solve some of the toughest problems of our time.'
                    },
                ].map((item,index)=><StudyCard styles="min-h-[482px]" key={index} {...item}/>)
            }
            </div>
        </div>

        </Wrapper> 
    </div>
  )
}

export default Study
