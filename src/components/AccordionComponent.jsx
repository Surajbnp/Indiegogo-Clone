import React from 'react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const AccordionComponent = () => {
  return (
    <div>
        <Accordion allowToggle  defaultIndex={0}>
                <AccordionItem>
                    <h2>
                    <AccordionButton >
                        <Box  textAlign='left'>
                          Tech & Innovation
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={10} lineHeight={2.2}>
                       <h2 style={{color:"#e51075"}}>Audio</h2>
                       <h2>Camera Gear</h2>
                       <h2>Education</h2>
                       <h2>Energy & Green Tech</h2>
                       <h2>Fashion & Wearables</h2>
                       <h2>Food & Beverages</h2>
                       <h2>Health & Fitness</h2>
                       <h2>Home</h2>
                       <h2>Phones & Accessories</h2>
                       <h2>Productivity</h2>
                       <h2>Transportation</h2>
                       <h2>Travel & Outdoors</h2>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton >
                        <Box  textAlign='left'>
                            Creative Works 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={10} lineHeight={2.2}>
                        <h2>Art</h2>
                        <h2>Comics</h2>
                        <h2>Dance & Theater</h2>
                        <h2>Film</h2>
                        <h2>Music</h2>
                        <h2>Photography</h2>
                        <h2>Podcasts, Blogs & Vlogs</h2>
                        <h2>Tabletop Games</h2>
                        <h2>Video Games</h2>
                        <h2>Web Series & TV Shows</h2>
                        <h2>Writing & Publishing</h2>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                    <AccordionButton >
                        <Box textAlign='left'>
                            Community Projects 
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pl={10} lineHeight={2.2}>
                        <h2>Culture</h2>
                        <h2>Environment</h2>   
                        <h2>Human Rights</h2>
                        <h2>Local Businesses</h2>
                        <h2>Wellness</h2>
                    </AccordionPanel>
                </AccordionItem>
        </Accordion>
    </div>
  )
}

export default AccordionComponent