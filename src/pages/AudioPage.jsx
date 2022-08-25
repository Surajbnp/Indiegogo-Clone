import { 
  Box, 
  Stack, 
  InputGroup, 
  InputLeftElement, 
  Input, 
  Select,
  Text,
  Flex,
  Image
 } from '@chakra-ui/react'
import { Progress } from '@chakra-ui/react'
import { Radio } from '@chakra-ui/react'

import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart, AiTwotoneFire } from "react-icons/ai"
import { MdWatchLater } from "react-icons/md"  

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAudioProjectData } from '../Redux/AppReducer/actions'
import style from "./CssFolder/audio.module.css"
import AccordionComponent from '../components/AccordionComponent'
import { Link } from 'react-router-dom'

const AudioPage = () => { 

   const audioData = useSelector((state)=>state.appReducer.audioProjects)
   const loading = useSelector((state)=>state.appReducer.isLoading)
   const dispatch = useDispatch() 

   console.log(audioData)

   useEffect(()=>{
       if(audioData.length === 0 ){
           dispatch(getAudioProjectData())
       }
   },[dispatch, audioData.length])

  return (
    <div>
        <div className={style.topSectionSMR}>
           <h2>Audio</h2>
           <h3>Life in hi-hi</h3>
        </div>
        <div className={style.mainContainerSMR}>
             <div className={style.filterAndCategorySMR}>
                  <h2>Filter Results</h2>
                  <h3>CATEGORY</h3>
                  <h4>All Categories</h4>
                <AccordionComponent/>
                <h1>PROJECT TIMING</h1>
                <hr />
                <Box className={style.RadioFilterDiv}>
                    <Stack defaultValue={"All"} direction="column" gap={"20px"}>
                      
                          <Radio size='lg'  value={"All"} colorScheme='blackAlpha'>
                            All
                          </Radio>
                          <Radio size='lg'  value={"Launching soon"} colorScheme='blackAlpha'>     
                            Launching soon
                          </Radio>
                          <Radio size='lg' name='1' value={"Just launched"} colorScheme='blackAlpha' >
                            Just launched
                          </Radio>
                     
                    </Stack>
                </Box>
             </div>
             <div  className={style.AudioMainDivSMR}>
                 <Box mt={"50px"}>
                     <Stack>
                     <InputGroup>
                          <InputLeftElement
                            pointerEvents='none'
                            children={<BiSearch color='gray.300' />}
                          />
                          <Input type='search' placeholder='Search for campaigns' borderRadius={"0px"}/>
                        </InputGroup>
                     </Stack>
                 </Box>
                 <hr className={style.LineAfterInputSMR}/>
                 <Box mt={"40px"} mb="20px">
                     <Flex justifyContent={"end"} gap="10px" alignItems={"center"}>
                          <Box>
                             <Text>Sort by</Text>
                          </Box>
                          <Box>
                              <Select w={"120px"} borderRadius="0">
                                <option value='Trending'>Trending</option>
                                <option value='Most Funded'>Most Funded</option>
                              </Select>
                          </Box>   
                     </Flex>
                 </Box>
                 <Box className={style.audioProjectDivsSMR}>
                        { loading && <div><img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" alt="sas" /></div>}
                       {   
                           audioData.length > 0 && 

                           audioData.map((elem)=>(
                             <Box key={elem.id} className={style.audioProjectInnerDivsSMR}>
                              <Link to={`/audio/${elem.id}`}>
                                <Image src={elem.cover}/>
                                <Box padding={"20px"} className={style.audioProjectInnerInfoDivsSMR}>
                                  <Box mb={"10px"}>
                                         <Flex  justifyContent="space-between" gap="10px" alignItems={"center"}>
                                              <Text fontSize='sm' color="teal">{elem.category}</Text> 
                                              <AiOutlineHeart />
                                         </Flex>
                                  </Box> 
                                  <hr /> 
                                  <h2>{elem.title}</h2>
                                  <p>{elem.features}</p> 
                                  <h3>Audio</h3>
                                  <Box>
                                      <Flex justifyContent={"space-between"} alignItems={"center"}>
                                          <Box className={style.FundDivSmr}>
                                                  <h2>{elem.fund}</h2>
                                                  <p>raised</p>
                                          </Box>
                                          <Box>
                                            <p>{elem.percentage}%</p>
                                          </Box>
                                      </Flex>
                                  </Box> 
                                  <Progress borderRadius={"10px"} colorScheme='green' size='sm' value={elem.percentage} />
                                   <Box className={style.daysLeftDivSMR}>
                                    {
                                      elem.daysLeft === "Now Funding through InDemand" ? <AiTwotoneFire/> :   <MdWatchLater/>
                                    }
                                    <p>{elem.daysLeft === "Now Funding through InDemand" ? elem.daysLeft: elem.daysLeft + " days left"}</p>
                                   </Box>
                                </Box>
                                </Link>
                             </Box>
                           ))
                       }
                 </Box>
             </div>
        </div>
    </div>
  )
}

export default AudioPage